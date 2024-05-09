"use client";

import React from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Input, TextArea } from "@/app/ui";
import Wallet from "@/app/components/Nav/WalletIcon";
import Avatar from "@/app/components/Nav/AvatarIcon";
import { NFTMarketplaceContext } from "@/contexts";
import {
  AddTraitDialog,
  AddTrait,
  ModifyAddTrait,
} from "./components/Dialog/AddTrait";
import { MdClose } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { CollectionData, NewNftTrait } from "@/types/collection";
import Collection from "./components/Collection";
import { useSearchParams } from "next/navigation";
import { API } from "@/utils/Graphql";
import { current } from "@/app/actions";
import Upload from "./components/Upload";
import MintStepper from "./components/Dialog/MintStepper";
import MintSuccessCoverDialog from "./components/Dialog/MintSuccessCover";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { AddressType } from "@/types";
import NFTCollection from "@/abi/NFTCollection.json";

export default function Page() {
  const { linkTo } = React.useContext(NFTMarketplaceContext);
  const searchParams = useSearchParams();

  const { data: hash, writeContract } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const collectionAddress = searchParams.has("collection")
    ? (searchParams.get("collection") as `0x${string}`)
    : undefined;

  const [showAddTrait, setShowAddTrait] = React.useState(false);
  const [traits, setTraits] = React.useState([] as AddTrait[]);
  const [modifyAddTrait, setModifyAddTrait] = React.useState(
    {} as ModifyAddTrait
  );
  const [collection, setCollection] = React.useState<
    CollectionData | undefined
  >(undefined);
  const [file, setFile] = React.useState<File | undefined>(undefined);
  const [fileUrl, setFileUrl] = React.useState<string | undefined>(undefined);
  const [name, setName] = React.useState<string | undefined>(undefined);
  const [supply, setSupply] = React.useState<number | undefined>(1);
  const [description, setDescription] = React.useState<string | undefined>(
    undefined
  );
  const [externalLink, setExternalLink] = React.useState<string | undefined>(
    undefined
  );
  const [tokenId, setTokenId] = React.useState<number | undefined>(undefined);

  const [valid, setValid] = React.useState(false);

  const [openMintStepper, setOpenMintStepper] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const [errMsg, setErrMsg] = React.useState<string | undefined>(undefined);
  const [openMintSuccessCover, setOpenMintSuccessCover] = React.useState(false);

  React.useEffect(() => {
    const fetchCollection = async () => {
      if (collectionAddress) {
        const curr = await current();
        const collection = await API.findCollectionForOwner(
          {
            collectionAddress,
          },
          curr.token
        );
        setCollection(collection);
      }
    };
    fetchCollection();
  }, []);

  React.useEffect(() => {
    setValid(
      collection !== undefined &&
        file !== undefined &&
        name !== undefined &&
        supply !== undefined &&
        supply > 0
    );
  }, [collection, file, name, supply]);

  React.useEffect(() => {
    const action = async () => {
      if (!isConfirmed) {
        return;
      }
      setStep(2);

      // save to db
      await saveNFT(tokenId, fileUrl);

      setOpenMintStepper(false);
      setOpenMintSuccessCover(true);
    };
    action();
  }, [tokenId, fileUrl, isConfirmed]);

  const handleAddTrait = (trait: AddTrait) => {
    setTraits([...traits, trait]);
  };

  const handleDeleteTrait = (index: number) => {
    setTraits(traits.filter((_, i) => i !== index));
  };

  const handleModifyTrait = (index: number, trait: AddTrait) => {
    setTraits(traits.map((t, i) => (i === index ? trait : t)));
    setModifyAddTrait({} as ModifyAddTrait);
  };

  const mint = async ({
    address,
    tokenId,
    amount,
  }: {
    address: AddressType;
    tokenId: number;
    amount: number;
  }) => {
    if (!address) {
      throw new Error("contract address can not be empty");
    }
    writeContract({
      abi: NFTCollection.abi,
      address: address,
      functionName: "mint",
      args: [tokenId, amount],
    });
  };

  async function uploadFile(file: File) {
    const curr = await current();
    const res = await API.uploadFile(file, curr.token);
    setFileUrl(res.url);
    setStep(1);
    return res;
  }

  async function nextTokenId() {
    if (!collection) {
      throw new Error("no collection");
    }
    const curr = await current();
    let tokenId = await API.nextTokenId(collection.contractAddress, curr.token);
    setTokenId(tokenId);
    return tokenId;
  }

  async function mintOnContract(tokenId: number) {
    if (!collection) {
      throw new Error("no collection");
    }
    if (!supply) {
      throw new Error("no supply");
    }
    await mint({
      address: collection.contractAddress,
      tokenId: tokenId,
      amount: supply,
    });
  }

  async function saveNFT(
    tokenId: number | undefined,
    fileUrl: string | undefined
  ) {
    if (!name) {
      throw new Error("no name");
    }
    if (!fileUrl) {
      throw new Error("no fileUrl");
    }
    if (!supply || supply < 0) {
      throw new Error("no supply");
    }
    if (!collection) {
      throw new Error("no collection");
    }
    if (!tokenId) {
      throw new Error("no tokenId");
    }
    const curr = await current();
    await API.createNft(
      {
        tokenId: tokenId,
        name: name,
        imageUrl: fileUrl,
        supply: supply,
        collection: collection.contractAddress,
        description: description,
        externalLink: externalLink,
        traits: traits.map((item) => {
          return {
            traitType: item.name,
            traitValue: item.type,
          } as NewNftTrait;
        }),
      },
      curr.token
    );
    setStep(3);
  }

  const handleClickCreate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (!valid) {
      throw new Error("Invalid");
    }
    if (!file) {
      throw new Error("No file");
    }
    setOpenMintStepper(true);
    try {
      setStep(0);
      await uploadFile(file);
      const tokenId = await nextTokenId();
      // write contract to mint NFT
      await mintOnContract(tokenId);
    } catch (e: any) {
      setErrMsg(e.message);
      throw e;
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-20 flex items-center justify-end  fixed top-0 left-0 bg-black mx-auto px-16 border-b-[1px] border-b-gray-500/30 z-50">
        <div className="flex w-full justify-between items-center">
          <div
            className="group w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center cursor-pointer hover:bg-neutral-800"
            onClick={(e) => {
              linkTo("/studio/create", e);
            }}
          >
            <FaArrowLeft
              size={20}
              className="text-neutral-300 group-hover:text-neutral-100"
            />
          </div>
          <div className="flex items-center gap-2">
            <Wallet />
            <Avatar />
          </div>
        </div>
      </div>
      <div className="py-32 px-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-bold leading-10">Create an NFT</h3>
          <p className="w-1/2">
            Once your item is minted you will not be able to change any of its
            information.
          </p>
        </div>
        <div className="flex gap-16 justify-center mt-12">
          <div className="w-1/2">
            <Upload file={file} setFile={setFile} />
          </div>
          <div className="w-1/2 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-semibold">Collection *</span>
              <Collection
                collection={collection}
                setCollection={setCollection}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Name *</p>
              <Input
                placeholder="Name your NFT"
                className="ps-3 py-3"
                defaultValue={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Supply *</p>
              <Input
                placeholder="Number of supply"
                defaultValue={supply}
                className="ps-3 py-3"
                type="number"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  let value = parseInt(e.target.value);
                  if (value < 0) {
                    value = 0;
                  }
                  setSupply(value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Description</p>
              <TextArea
                placeholder="Enter a description"
                className="ps-3 px-3 py-2"
                defaultValue={description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold">External link</span>
              <Input
                placeholder="https://collection.io/item/123"
                className="ps-3 py-3"
                defaultValue={externalLink}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setExternalLink(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Traits</p>
              <p className="text-sm">
                Traits describe attributes of your item. They appear as filters
                inside your collection page and are also listed out inside your
                item page.
              </p>
              <div className="flex flex-col gap-1 my-2">
                {traits.map((trait, index) => {
                  return (
                    <div
                      className="px-3 py-2 bg-neutral-900 rounded-lg flex justify-between items-center"
                      key={index}
                    >
                      <span>
                        {trait.type}:{trait.name}
                      </span>
                      <div className="flex h-full items-center gap-4">
                        <FaPencilAlt
                          size={18}
                          className="hover:text-neutral-500"
                          onClick={(e) => {
                            e.stopPropagation();
                            setModifyAddTrait({ ...trait, id: index });
                            setShowAddTrait(true);
                          }}
                        />
                        <div className="h-full border-l-[1px] border-gray-500/30"></div>
                        <MdClose
                          size={18}
                          className="hover:text-neutral-500"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteTrait(index);
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              className="flex gap-2 items-center hover:text-neutral-500"
              onClick={(e) => {
                e.stopPropagation();
                setShowAddTrait(true);
              }}
            >
              <FaPlus />
              <span>Add trait</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-20 flex items-center justify-end border-t-[1px] border-t-gray-500/30 fixed bottom-0 left-0 bg-black mx-auto px-16">
        <button
          className="bg-sky-600 font-bold rounded-xl"
          onClick={handleClickCreate}
        >
          <div
            className={`w-full h-full px-6 py-3 ${
              !valid && "bg-black/50 text-neutral-500 cursor-not-allowed"
            }`}
          >
            Create
          </div>
        </button>
      </div>
      {showAddTrait && (
        <AddTraitDialog
          close={() => setShowAddTrait(false)}
          handleAddTrait={handleAddTrait}
          handleModifyTrait={handleModifyTrait}
          modifyAddTrait={modifyAddTrait}
        />
      )}
      <MintStepper
        open={openMintStepper}
        close={() => setOpenMintStepper(false)}
        currStep={step}
        errMsg={errMsg}
      />
      <MintSuccessCoverDialog
        open={openMintSuccessCover}
        close={() => {
          setOpenMintSuccessCover(false);
        }}
        uri={fileUrl ?? ""}
        contractAddress={collection?.contractAddress}
        tokenId={tokenId ?? 0}
        name={name ?? ""}
        chainName={"Ganache"}
      />
    </div>
  );
}
