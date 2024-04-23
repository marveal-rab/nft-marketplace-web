"use client";

import React from "react";
import Upload from "./Upload";
import { Input } from "@/app/ui";
import Blockchains from "./BlockChain";

interface FormProps extends Props {
  fileUri: string;
  setFileUri: (fileUri: string) => void;
  name: string;
  setName: (name: string) => void;
  symbol: string;
  setSymbol: (symbol: string) => void;
  blockchain: number;
  setBlockchain: (blockchain: number) => void;
}

const Form: React.FC<FormProps> = (props) => {
  const {
    fileUri,
    setFileUri,
    name,
    setName,
    symbol,
    setSymbol,
    blockchain,
    setBlockchain,
  } = props;

  return (
    <div className="w-full h-full flex justify-center py-28">
      <div className="max-w-[600px] pt-6 flex flex-col text-neutral-100">
        <span className="font-semibold text-3xl leading-heading-lg mb-3">
          First, you’ll need to create a collection for your NFT
        </span>
        <span className="mb-8">
          You’ll need to deploy an ERC-1155 contract on the blockchain to create
          a collection for your NFT.{" "}
          <a href="#" className="text-sky-600">
            What is a contract?
          </a>
        </span>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-semibold">Logo image</span>
            <Upload fileUri={fileUri} setFileUri={setFileUri} />
          </div>
          <div className="flex gap-4 justify-between">
            <div className="flex flex-col gap-4 w-2/3">
              <span className="font-semibold">Contract name</span>
              <Input
                className="py-3 ps-3"
                placeholder="My Collection Name"
                defaultValue={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-4 w-1/3">
              <span className="font-semibold">Token symbol</span>
              <Input
                className="py-3 ps-3"
                placeholder="MCN"
                defaultValue={symbol}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSymbol(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-semibold">Blockchain</div>
            <Blockchains
              defaultBlockchain={blockchain}
              setBlockchain={setBlockchain}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
