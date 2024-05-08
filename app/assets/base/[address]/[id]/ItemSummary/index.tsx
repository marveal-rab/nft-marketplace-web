import React from "react";
import { GiChaingun } from "react-icons/gi";
import { FaExternalLinkAlt, FaRegHeart } from "react-icons/fa";
import { TbFileDescription, TbListDetails, TbWorldWww } from "react-icons/tb";
import { Accordion } from "@/ui";
import { CiShoppingTag } from "react-icons/ci";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";

interface ItemSummaryProps extends Props {}

interface TraitProps extends Props {
  name: string;
  value: string;
  rate: number;
  floor: number;
}

const Trait: React.FC<TraitProps> = ({ ...props }) => {
  const { name, value, rate, floor, className } = props;
  return (
    <div className={className}>
      <div className="flex flex-col gap-1 text-gray-500 w-full h-full p-2 text-center border-[1px] border-gray-500/30 rounded-xl text-sm bg-neutral-900/50">
        <span className="font-bold text-base">{name}</span>
        <span>
          <a href="#" className="text-neutral-100">
            {value}
          </a>
          &nbsp;{rate}%
        </span>
        <span>Floor: {floor} ETH</span>
      </div>
    </div>
  );
};

const Traits: React.FC<Props> = ({ ...props }) => {
  const { className } = props;
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push({
      name: "Trait",
      value: "Value",
      rate: 100,
      floor: 0.1,
    });
  }
  return (
    <div className={className}>
      <div className="w-full h-full grid grid-cols-3 gap-2">
        {items.map((el, index) => {
          return <Trait key={index} {...el} className="" />;
        })}
      </div>
    </div>
  );
};

const Detail: React.FC<Props> = ({ ...props }) => {
  const { className } = props;
  const items = [
    {
      key: "Contract Address",
      value: "0x628c...8020",
      link: true,
    },
    {
      key: "Token ID",
      value: "2033",
      link: true,
    },
    {
      key: "Token Standard",
      value: "ERC-721",
    },
    {
      key: "Chain",
      value: "Base",
    },
    {
      key: "Last Updated",
      value: "2 months ago",
    },
    {
      key: "Creator Earnings",
      value: "5%",
    },
  ];

  return (
    <div className={className}>
      <div className="w-full h-full">
        {items.map((el, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center py-1 text-sm"
            >
              <span className="text-base">{el.key}</span>
              {el.link ? (
                <span className="text-sky-700">
                  <a href="#">{el.value}</a>
                </span>
              ) : (
                el.value
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ItemSummary: React.FC<ItemSummaryProps> = ({ ...props }) => {
  const { className } = props;
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {" "}
      <div className="bg-neutral-900 rounded-lg overflow-hidden">
        <div className="flex justify-between mx-1 p-2 items-center">
          <GiChaingun size={20} />
          <div className="flex gap-2 items-center">
            <a href="#" className="text-sky-600">
              <FaExternalLinkAlt size={16} />
            </a>
            <span className="flex items-center gap-1">
              <FaRegHeart size={16} />3
            </span>
          </div>
        </div>
        <img
          src={"https://via.placeholder.com/150"}
          alt=""
          className="w-full"
        />
      </div>
      <div className="w-full rounded-lg bg-neutral-900 text-neutral-100">
        <div className="flex items-center gap-4 p-5 border-b-[1px] border-b-gray-500/30">
          <TbFileDescription size={16} />
          <span className="font-bold">Description</span>
        </div>
        <div className="p-6 text-gray-500 border-b-[1px] border-b-gray-500/30">
          <p>
            By{" "}
            <a href="#" className="text-neutral-100 hover:text-gray-500">
              castercats
            </a>
          </p>
          <p className="text-neutral-100 text-sm">Caster Cats</p>
        </div>
        <Accordion
          title="Traits"
          className="px-2 py-1 border-b-[1px] border-b-gray-500/30"
          icon={<CiShoppingTag size={16} />}
        >
          <Traits className="w-full h-full p-2" />
        </Accordion>
        <Accordion
          title="About Caster Cats"
          className="px-2 py-1 border-b-[1px] border-b-gray-500/30"
          icon={<HiOutlineViewGridAdd size={16} />}
        >
          <div className="p-6">
            <div className="flex gap-4">
              <img
                src={"https://via.placeholder.com/150"}
                alt=""
                className="w-20 h-20 rounded-xl"
              />
              <p className="text-sm">
                Caster Cats is a collection of 10,000 unique NFTs on the
                Ethereum blockchain. Each Caster Cat is unique and programmable
                with a variety of traits and accessories.
              </p>
            </div>

            <div className="flex mt-8">
              <div className="flex items-center p-2 gap-2 rounded-xl border-[1px] border-gray-500/30 text-center">
                <a href="#" className="hover:text-neutral-500">
                  <TbWorldWww size={20} />
                </a>
                <div className="h-full border-l-[1px] border-l-gray-500/30"></div>
                <a href="" className="hover:text-neutral-500">
                  <FaXTwitter size={20} />
                </a>
                <div className="h-full border-l-[1px] border-l-gray-500/30"></div>
                <a href="#" className="hover:text-neutral-500">
                  <IoIosMore size={20} />
                </a>
              </div>
            </div>
          </div>
        </Accordion>
        <Accordion
          title="Detail"
          className="px-2 py-1"
          icon={<TbListDetails size={16} />}
        >
          <Detail className="w-full h-full p-4" />
        </Accordion>
      </div>
    </div>
  );
};
