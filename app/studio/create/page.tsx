"use client";

import React from "react";
import { LuLayoutGrid } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { NFTMarketplaceContext } from "@/app/marketplace-provider";

export default function Page() {
  const { linkTo } = React.useContext(NFTMarketplaceContext);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <div
          className="h-[42.857vw] w-full relative flex justify-center before:bg-black/50 before:w-full"
          style={{
            backgroundImage: "url(/static/images/studio/creaturecrowd.avif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="text-neutral-100 px-4 py-8 absolute bottom-0">
            <div className="w-[600px] flex flex-col gap-4">
              <p className="flex gap-4 items-center">
                <img
                  src="/static/images/icons/opensea-logo.svg"
                  alt=""
                  className="w-10 h-10"
                />
                <span className="text-4xl font-bold">Create</span>
              </p>
              <p className="flex items-center gap-2 text-xs">
                <span className="text-neutral-400">Featured</span>
                <span className="font-bold">
                  Invisible Friends Physical Collectibles
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-4 py-8 text-neutral-100 justify-center">
          <div className="flex flex-col gap-6">
            <div
              className="w-[600px] p-6 rounded-xl bg-neutral-900 transition ease-out duration-300 hover:-translate-y-1 cursor-pointer hover:bg-neutral-800"
              onClick={(e) => {
                linkTo("/studio/collection/deploy", e);
              }}
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="flex gap-4 items-center">
                    <LuLayoutGrid size={20} />
                    <span className="text-xl font-bold">Drop a collection</span>
                  </p>
                  <p>Launch your NFT collection for others to mint</p>
                </div>
                <FaArrowRight />
              </div>
            </div>
            <div
              className="w-[600px] p-6 rounded-xl bg-neutral-900 transition ease-out duration-500 hover:-translate-y-1 cursor-pointer hover:bg-neutral-800"
              onClick={(e) => {
                linkTo("/studio/mint", e);
              }}
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="flex gap-4 items-center">
                    <AiOutlinePicture size={20} />
                    <span className="text-xl font-bold">Mint an NFT</span>
                  </p>
                  <p>
                    Create a collection and mint NFTs directly to your wallet
                  </p>
                </div>
                <FaArrowRight />
              </div>
            </div>
            <div className="text-neutral-500">
              <a href="#" className="text-sky-600">
                Learn more
              </a>{" "}
              about each option.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
