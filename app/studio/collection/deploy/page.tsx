"use client";

import React, { use } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import { useNFTCollection } from "@/hooks";
import { current } from "@/app/actions";
import { ChainId } from "@/hooks/useNFTCollection";
import { useWaitForTransactionReceipt, useWalletClient } from "wagmi";
import { API } from "@/utils/Graphql";
import {
  DeployStepperDialog,
  DeploySuccessCoverDialog,
} from "./components/Dialog";
import { NewCollectionParams } from "@/types/collection";
import { AddressType } from "@/types";

export default function Page() {
  const [fileUrl, setFileUrl] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [symbol, setSymbol] = React.useState<string>("");
  const [blockchain, setBlockchain] = React.useState<number>(0);
  const [chainId, setChainId] = React.useState<ChainId | undefined>(
    ChainId.GANACHE
  );
  const [errMsg, setErrMsg] = React.useState<any | undefined>(undefined);

  const [valid, setValid] = React.useState<boolean>(false);
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const [hash, setHash] = React.useState<undefined | `0x${string}`>();
  const [currStep, setCurrStep] = React.useState<number>(0);
  const [contractAddress, setContractAddress] = React.useState<AddressType>();
  const [openCover, setOpenCover] = React.useState<boolean>(false);

  const { deployContract } = useNFTCollection();
  const receipt = useWaitForTransactionReceipt({
    hash,
  });
  const { data: walletClient } = useWalletClient({
    chainId,
  });

  const action = async () => {
    const curr = await current();
    if (!curr.token) {
      console.error("No authorization");
      throw new Error("No authorization");
    }
    if (!curr.address) {
      console.error("No address");
      throw new Error("No address");
    }
    if (!walletClient) {
      console.error("No wallet client");
      throw new Error("No wallet client");
    }

    const dir = await API.filesMkdir(curr.token);

    const hash = await deployContract(walletClient, {
      owner: curr.address as `0x${string}`,
      name,
      symbol,
      uri: dir.url,
      chain: chainId as ChainId,
    });
    setHash(hash);
    return {
      dir,
      hash,
    };
  };

  const waitReceipt = async (dir: any) => {
    const { data } = await receipt.refetch();
    if (!data) return;
    console.log("Transaction", data.status, data.contractAddress);
    if (data.status === "success") {
      setContractAddress(data.contractAddress);
      if (!data.contractAddress) {
        throw new Error("No contract address");
      }
      if (!chainId) {
        throw new Error("No chain id");
      }
      if (!dir) {
        throw new Error("No directory");
      }
      const curr = await current();
      const res = await API.createCollection(
        {
          name,
          symbol,
          picUrl: fileUrl,
          contractAddress: data.contractAddress,
          chainId,
          dirName: dir.name,
          dirHash: dir.hash,
        } as NewCollectionParams,
        curr.token
      );
      console.log("Create collection", res);
    }
  };

  React.useEffect(() => {
    setValid(
      (fileUrl &&
        name &&
        symbol &&
        fileUrl !== "" &&
        name !== "" &&
        symbol !== "") as boolean
    );
  }, [fileUrl, name, symbol]);

  const handleClick = async (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (!valid) return;
    setOpenDialog(true);
    try {
      setCurrStep(0);
      const { dir } = await action();
      setCurrStep(1);
      await waitReceipt(dir);
      setCurrStep(2);
    } catch (e: any) {
      console.error(e);
      setErrMsg(e?.message);
      throw e;
    }
    setOpenCover(true);
  };

  const getChainId = (blockchain: number): ChainId => {
    return ChainId.GANACHE;
  };

  const changeBlockchain = (bc: number) => {
    setBlockchain(bc);
    setChainId(getChainId(bc));
  };

  return (
    <div className="w-full h-full relative">
      <Nav />
      <Form
        fileUrl={fileUrl}
        setFileUrl={setFileUrl}
        name={name}
        setName={setName}
        symbol={symbol}
        setSymbol={setSymbol}
        blockchain={blockchain}
        changeBlockchain={changeBlockchain}
      />
      <footer className="w-full h-20 flex items-center justify-end border-t-[1px] border-t-gray-500/30 fixed bottom-0 left-0 bg-black mx-auto px-16">
        <button
          className="bg-sky-600 font-bold rounded-xl"
          onClick={handleClick}
        >
          <div
            className={`w-full h-full px-6 py-3 ${
              !valid && "bg-black/50 text-neutral-500 cursor-not-allowed"
            }`}
          >
            Continue
          </div>
        </button>
      </footer>
      <DeployStepperDialog
        open={openDialog}
        close={() => {
          setOpenDialog(false);
        }}
        currStep={currStep}
        errMsg={errMsg}
      />
      <DeploySuccessCoverDialog
        open={openCover}
        close={() => {
          setOpenCover(false);
        }}
        contractAddress={contractAddress}
        uri={fileUrl}
        name={name}
        chainName={"Ganache"}
      />
    </div>
  );
}
