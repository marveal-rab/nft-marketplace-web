"use client";

import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
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

export default function Page() {
  const { linkTo } = React.useContext(NFTMarketplaceContext);

  const [showAddTrait, setShowAddTrait] = React.useState(false);
  const [traits, setTraits] = React.useState([] as AddTrait[]);
  const [modifyAddTrait, setModifyAddTrait] = React.useState(
    {} as ModifyAddTrait
  );

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
            <div className="group text-center border-[1px]  border-dashed border-gray-500/30 hover:bg-neutral-900 w-full transition duration-100 ease-linear hover:border-solid rounded-xl pt-[100%] relative cursor-pointer">
              <div className="absolute flex flex-col top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <span className="flex justify-center mb-4">
                  <MdOutlineFileUpload size={36} />
                </span>
                <span className="font-semibold">Drag and drop media</span>
                <span className="text-sky-600 text-sm">Browse files</span>
                <span className="text-neutral-400 text-sm">Max size: 50MB</span>
                <span className="text-neutral-400 text-sm">
                  JPG, PNG, GIF, SVG, MP4
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-semibold">Collection *</span>
              <div className="">
                <div
                  className="group p-4 h-24 bg-neutral-900 rounded-xl flex items-center gap-4 hover:bg-neutral-800 cursor-pointer"
                  onClick={(e) => {
                    linkTo("/studio/collection/deploy", e);
                  }}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-neutral-800 rounded-xl group-hover:bg-neutral-700">
                    <FaPlus />
                  </div>
                  <span className="font-semibold">Create a new Collection</span>
                </div>
                <span className="text-xs text-neutral-500">
                  Not all collections are eligible.{" "}
                  <a href="#" className="text-sky-600">
                    Learn more
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Name *</p>
              <Input placeholder="Name your NFT" className="ps-3 py-3" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Supply *</p>
              <Input
                placeholder="Number of supply"
                defaultValue={"1"}
                className="ps-3 py-3"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Description</p>
              <TextArea
                placeholder="Enter a description"
                className="ps-3 px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold">External link</span>
              <Input
                placeholder="https://collection.io/item/123"
                className="ps-3 py-3"
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
        <button className="bg-sky-600 font-bold rounded-xl">
          <div className="bg-black/50 w-full h-full px-6 py-3 text-neutral-500">
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
    </div>
  );
}
