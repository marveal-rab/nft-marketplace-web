"use client";

import React, { use } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import { useNFTCollection } from "@/hooks";
import { current } from "@/app/actions";
import { FaCheck } from "react-icons/fa";
import { Dialog } from "@/app/ui";
import { AiOutlineLoading } from "react-icons/ai";
import { ChainId } from "@/hooks/useNFTCollection";
import { useWaitForTransactionReceipt } from "wagmi";

interface DeployCollectionDialogProps extends Props {
  open: boolean;
  close: () => void;
  currStep: number;
}

const DeployCollectionDialog: React.FC<DeployCollectionDialogProps> = (
  props
) => {
  const { open, close, currStep } = props;

  const steps = [
    {
      name: "Go to your wallet to finish deploy your contract",
      description:
        "You'll be asked to pay gas fees and sign in order to deploy your contract on the blockchain.",
    },
    {
      name: "Deploying your contract",
      description: "It may take some time for the transaction to be processed.",
    },
  ];

  return (
    <Dialog open={open} close={close} title="Deploying your contract">
      <div className="mt-8 flex flex-col">
        {steps.map((step, index) => {
          return (
            <div
              className="grid grid-cols-10 items-center gap-4 py-2 relative"
              key={index}
            >
              <div
                className={`col-span-1 after:w-0.5 after:absolute after:bg-neutral-800 after:left-5 ${
                  index === 0
                    ? "after:top-[50%] after:h-[50%]"
                    : index === steps.length - 1
                    ? "after:bottom-[50%] after:h-[50%]"
                    : "after:top-0 after:h-full"
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                  {index < currStep && <FaCheck className="z-10" />}
                  {index === currStep && (
                    <AiOutlineLoading className="animate-spin z-10" />
                  )}
                  {index > currStep && (
                    <div className="w-full h-full rounded-full z-10 bg-neutral-900 border-[1px] border-gray-500/30"></div>
                  )}
                </div>
              </div>
              <div className="col-span-9 flex flex-col">
                <span className="font-semibold">{step.name}</span>
                <span className="text-sm text-gray-500">
                  {step.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Dialog>
  );
};

export default function Page() {
  const [fileUrl, setFileUrl] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [symbol, setSymbol] = React.useState<string>("");
  const [blockchain, setBlockchain] = React.useState<number>(0);

  const [valid, setValid] = React.useState<boolean>(false);
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const [hash, setHash] = React.useState<undefined | `0x${string}`>();
  const [currStep, setCurrStep] = React.useState<number>(0);
  const { deployContract } = useNFTCollection();
  const {
    data: deployTx,
    isError,
    isLoading,
  } = useWaitForTransactionReceipt({
    hash,
  });

  const interval = setInterval(() => {
    if (deployTx) {
      console.log("Transaction status", deployTx);
      setCurrStep(2);
      clearInterval(interval);
    }
    if (hash) {
      console.log("Checking transaction status");
    }
  }, 1000);

  const action = async () => {
    const curr = await current();
    if (!curr.token) {
      console.error("No authorization");
      return;
    }
    if (!curr.address) {
      console.error("No address");
      return;
    }
    const hash = await deployContract({
      owner: curr.address,
      name,
      symbol,
      uri: fileUrl,
      chain: getChainId(),
    });
    console.log("Deployed contract hash", hash);
    setHash(hash);
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
  };

  const getChainId = (): ChainId => {
    return ChainId.GANACHE;
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
        setBlockchain={setBlockchain}
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
      <DeployCollectionDialog
        open={openDialog}
        close={() => {
          setOpenDialog(false);
        }}
        currStep={currStep}
      />
    </div>
  );
}
