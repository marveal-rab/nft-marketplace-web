import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { GoDependabot } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";

const Developer = () => {
  return (
    <div className="ml-16">
      <h2 className="text-3xl font-bold my-12">Featured items</h2>
      <div className="rounded-xl bg-neutral-900 p-6 w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-4 flex items-center justify-center bg-neutral-800 rounded-xl">
            <MdOutlineEmail size={28} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">
              Verify your email to get access
            </span>
            <span className="text-neutral-500">
              Critical API updates will be sent to this email in the future.
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-neutral-800 px-5 py-3 rounded-xl font-semibold text-nowrap">
            View API docs
          </button>
          <button className="bg-sky-500 px-5 py-3 rounded-xl font-semibold text-nowrap">
            Verify in profile
          </button>
        </div>
      </div>
      <div className="mt-8">
        <p className="font-semibold my-6">Learn about OpenSea API</p>
        <div className="h-[320px] w-full flex gap-4">
          <div className="h-full w-1/3 bg-neutral-900 rounded-xl px-8 py-6">
            <div className="mt-2">
              <IoBookOutline size={28} />
            </div>
            <p className="font-semibold mt-6 mb-4">Display NFTs in your app</p>
            <p className="text-neutral-500">
              Retrieve NFT data, images, and other information from both on and
              off-chain sources.
            </p>
          </div>
          <div className="h-full w-1/3 bg-neutral-900 rounded-xl px-8 py-6">
            <div className="mt-2">
              <GoDependabot size={28} />
            </div>
            <p className="font-semibold mt-6 mb-4">Buy & Sell NFTS</p>
            <p className="text-neutral-500">
              Easily retrieve and create OpenSea listings and offers.
            </p>
          </div>
          <div className="h-full w-1/3 bg-neutral-900 rounded-xl px-8 py-6">
            <div className="mt-2">
              <MdOutlineAnalytics size={28} />
            </div>
            <p className="font-semibold mt-6 mb-4">
              Analyze NFT & Marketplace Data
            </p>
            <p className="text-neutral-500">
              Access real-time and historical data about specific NFTs,
              collections, and the OS marketplace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
