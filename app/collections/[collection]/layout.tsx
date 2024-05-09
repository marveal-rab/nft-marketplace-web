"use client";

import React from "react";
import { NarBar } from "@/app/components";
import { TbWorldWww } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  params: { collection: string };
}

const Banner: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <div className={props.className}>
      <div className="w-full h-72">
        <div className="flex justify-between items-end h-full pb-6">
          <div className="flex flex-col space-y-2">
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="w-20 h-20 rounded-xl"
            />
            <p className="text-neutral-200 font-bold text-base">NFToshis</p>
            <p className="text-neutral-400 ">ToshiTheCat</p>
          </div>
          <div className="flex space-x-6 ">
            <div>
              <p className="text-neutral-200 font-bold text-base">306 ETH</p>
              <p className="text-neutral-400 text-sm">Total volume</p>
            </div>
            <div>
              <p className="text-neutral-200 font-bold text-base">0.168 ETH</p>
              <p className="text-neutral-400 text-sm">Floor price</p>
            </div>
            <div>
              <p className="text-neutral-200 font-bold text-base">
                0.1206 WETH
              </p>
              <p className="text-neutral-400 text-sm">Base offer</p>
            </div>
            <div>
              <p className="text-neutral-200 font-bold text-base">13%</p>
              <p className="text-neutral-400 text-sm">Listed</p>
            </div>
            <div>
              <div className="flex text-neutral-200 font-bold text-base space-x-2">
                <span>830</span>
                <span>(28%)</span>
              </div>
              <p className="text-neutral-400 text-sm">Owner(Unique)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-2">
        <div className="flex flex-col gap-1 w-3/5">
          <div className="flex gap-2 text-neutral-200">
            <div
              className={`${
                showMore
                  ? "text-pretty break-words"
                  : "overflow-hidden text-ellipsis text-nowrap"
              }`}
            >
              Discover NFToshis, a collection of extraordinary NFTs inspired by
              Brian Armstrong's Pet Cat. Own a piece of Toshi and be part of the
              adventure at&nbsp;
              <a href="https://toshithecat.com" className="text-sky-500">
                https://toshithecat.com
              </a>
            </div>
            {!showMore && (
              <div
                className="text-neutral-50 hover:text-neutral-600 cursor-pointer text-nowrap"
                onClick={() => {
                  setShowMore(true);
                }}
              >
                See more
              </div>
            )}
          </div>
          {showMore && (
            <div
              className="text-neutral-50 hover:text-neutral-600 cursor-pointer text-nowrap"
              onClick={() => {
                setShowMore(false);
              }}
            >
              See less
            </div>
          )}
          <div className="flex items-center space-x-4 text-neutral-400 text-nowrap">
            <div className="flex space-x-2">
              <span>Items</span>
              <span>3,000</span>
            </div>
            <div> · </div>
            <div className="flex space-x-2">
              <span>Created</span>
              <span>Aug 2023</span>
            </div>
            <div> · </div>
            <div className="flex space-x-2">
              <span>Creator earnings</span>
              <span>5%</span>
            </div>
            <div> · </div>
            <div className="flex space-x-2">
              <span>Chain Base</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 h-6">
          <a href="#" className="hover:text-neutral-500">
            <TbWorldWww size={24} />
          </a>
          <a href="" className="hover:text-neutral-500">
            <FaXTwitter size={24} />
          </a>
          <a href="#" className="hover:text-neutral-500">
            <IoIosMore size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Tabs: React.FC<TabProps> = (props) => {
  const { params } = props;
  const searchParams = useSearchParams();
  const selectedTab = searchParams.has("tab")
    ? searchParams.get("tab")
    : "items";

  const tabs = [
    {
      name: "items",
      title: "Items",
      href: `/collections/${params.collection}`,
    },
    {
      name: "offers",
      title: "Offers",
      href: `/collections/${params.collection}/offers`,
    },
    {
      name: "analytics",
      title: "Analytics",
      href: `/collections/${params.collection}/analytics`,
    },
    {
      name: "activity",
      title: "Activity",
      href: `/collections/${params.collection}/activity`,
    },
  ];

  return (
    <div className={props.className}>
      <div className="flex gap-4 h-20 mt-4 items-center text-base font-bold text-neutral-200 border-b-[1px] border-neutral-500/30">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`px-4 py-3 rounded-xl ${
              selectedTab === tab.name
                ? "bg-neutral-700/30"
                : "text-neutral-500 hover:text-neutral-200 cursor-pointer"
            }`}
          >
            <Link href={`${tab.href}?tab=${tab.name}`}>{tab.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function CollectionLayout({
  params,
  children,
}: {
  params: { collection: string };
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-screen-2xl mx-auto px-16">
      <NarBar className="sticky top-0" />
      <Banner />
      <div className="mx-2 h-screen">
        <Tabs params={params} className="sticky top-20" />
        {children}
      </div>
    </div>
  );
}
