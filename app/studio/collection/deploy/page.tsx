"use client";

import { Input } from "@/app/ui";
import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import Upload from "./components/Upload";
import { FaArrowLeft } from "react-icons/fa";
import Wallet from "@/app/components/Nav/WalletIcon";
import Avatar from "@/app/components/Nav/AvatarIcon";
import { NFTMarketplaceContext } from "@/app/marketplace-provider";

export default function Page() {
  const { linkTo } = React.useContext(NFTMarketplaceContext);

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-20 flex items-center justify-end border-b-[1px] border-b-gray-500/30 fixed top-0 left-0 bg-black mx-auto px-16">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-4">
            <div
              className="group w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center cursor-pointer hover:bg-neutral-800"
              onClick={(e) => {
                linkTo("/studio/create", e);
              }}
            >
              <FaArrowLeft
                size={20}
                className="text-neutral-500 group-hover:text-neutral-100"
              />
            </div>
            <span className="font-bold text-xl">Create an NFT</span>
          </div>
          <div className="flex items-center gap-2">
            <Wallet />
            <Avatar />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center py-28">
        <div className="max-w-[600px] pt-6 flex flex-col text-neutral-100">
          <span className="font-semibold text-3xl leading-heading-lg mb-3">
            First, you’ll need to create a collection for your NFT
          </span>
          <span className="mb-8">
            You’ll need to deploy an ERC-1155 contract on the blockchain to
            create a collection for your NFT.{" "}
            <a href="#" className="text-sky-600">
              What is a contract?
            </a>
          </span>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="font-semibold">Logo image</span>
              <Upload />
            </div>
            <div className="flex gap-4 justify-between">
              <div className="flex flex-col gap-4 w-2/3">
                <span className="font-semibold">Contract name</span>
                <Input className="py-3 ps-3" placeholder="My Collection Name" />
              </div>
              <div className="flex flex-col gap-4 w-1/3">
                <span className="font-semibold">Token symbol</span>
                <Input className="py-3 ps-3" placeholder="MCN" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-semibold">Blockchain</div>
              <div className="flex items-center gap-4 h-[250px]">
                <div className="h-full border-[1px] border-gray-500/30 w-1/3 px-4 py-6 rounded-xl">
                  <img
                    src="/static/images/icons/ethereum.svg"
                    alt="ethereum"
                    className="w-8 h-8 rounded-full mb-6"
                  />
                  <div className="flex flex-col gap-3">
                    <span className="font-semibold text-lg">Ethereum</span>
                    <div className="flex">
                      <span className="p-1 border-[1px] border-gray-500/30 rounded-lg bg-neutral-800 text-xs font-semibold">
                        Most popular
                      </span>
                    </div>
                    <span className="text-sm text-neutral-500">
                      Estimated cost to deploy contract: US$13.25
                    </span>
                  </div>
                </div>
                <div className="h-full border-[1px] border-gray-500/30 w-1/3 px-4 py-6 rounded-xl">
                  <img
                    src="/static/images/icons/polygon.svg"
                    alt="ethereum"
                    className="w-8 h-8 rounded-full mb-6"
                  />
                  <div className="flex flex-col gap-3">
                    <span className="font-semibold text-lg">Polygon</span>
                    <div className="flex">
                      <span className="p-1 border-[1px] border-gray-500/30 rounded-lg bg-neutral-800 text-xs font-semibold">
                        Cheaper
                      </span>
                    </div>
                    <span className="text-sm text-neutral-500">
                      Estimated cost to deploy contract: US$0.03
                    </span>
                  </div>
                </div>
                <div className="h-full border-[1px] border-gray-500/30 w-1/3 px-4 py-6 rounded-xl">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full mb-6 bg-neutral-800">
                    <MdMoreHoriz size={20} />
                  </div>
                  <span className="font-semibold">See more options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-20 flex items-center justify-end border-t-[1px] border-t-gray-500/30 fixed bottom-0 left-0 bg-black mx-auto px-16">
        <button className="bg-sky-600 font-bold rounded-xl">
          <div className="bg-black/50 w-full h-full px-6 py-3 text-neutral-500">
            Continue
          </div>
        </button>
      </div>
    </div>
  );
}
