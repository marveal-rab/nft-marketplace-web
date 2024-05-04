"use client";

import React, { use } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import { useNFTCollection } from "@/hooks";
import { current } from "@/app/actions";
import { ChainId } from "@/hooks/useNFTCollection";
import { useWaitForTransactionReceipt, useWalletClient } from "wagmi";
import { Graphqls } from "@/utils";
import {
  DeployStepperDialog,
  DeploySuccessCoverDialog,
} from "./components/Dialog";
import { AddressType } from "@/types/collection";

export default function Page() {
  const [fileUrl, setFileUrl] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [symbol, setSymbol] = React.useState<string>("");
  const [blockchain, setBlockchain] = React.useState<number>(0);
  const [chainId, setChainId] = React.useState<ChainId | undefined>(undefined);

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
    const hash = await deployContract(walletClient, {
      owner: curr.address as `0x${string}`,
      name,
      symbol,
      uri: fileUrl,
      chain: chainId as ChainId,
    });
    setHash(hash);
  };

  const waitReceipt = async () => {
    try {
      const { data } = await receipt.refetch();
      if (!data) return;
      console.log("Transaction", data.status, data.contractAddress);
      if (data.status === "success") {
        setContractAddress(data.contractAddress);
        if (!data.contractAddress) {
          console.error("No contract address");
          return;
        }
        if (!chainId) {
          console.error("No chain id");
          return;
        }
        const curr = await current();
        const res = await Graphqls.createCollection(
          {
            name,
            symbol,
            picUrl: fileUrl,
            contractAddress: data.contractAddress,
            chainId,
          },
          curr.token
        );
        console.log("Create collection", res);
      }
    } catch (error) {
      console.error("Error", error);
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
    setCurrStep(0);
    await action();
    setCurrStep(1);
    await waitReceipt();
    setCurrStep(2);
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
