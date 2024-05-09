import { Accordion } from "@/app/ui";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsGrid3X2Gap } from "react-icons/bs";

interface MoreProps extends Props {}

interface Item {
  id: string;
  title: string;
  image: string;
  price: number;
  currency: string;
  lastSale: number;
}

interface CollectionItemProps
  extends Item,
    React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  image: string;
  price: number;
  currency: string;
  lastSale: number;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ ...props }) => {
  const { id, title, image, price, currency, lastSale, className } = props;
  return (
    <div className={className}>
      <div className="group rounded-xl overflow-hidden w-full h-full relative">
        <div className="w-full h-auto overflow-hidden">
          <img
            src={image}
            alt={""}
            className="w-full h-full transition ease-linear duration-300 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col gap-3 bg-neutral-700/50 p-4 ">
          <div className="flex justify-between items-center">
            <span className="text-base font-semibold text-primary">
              {title}
            </span>
            <div className="flex gap-1 border-[1px] border-gray-500 rounded-lg px-2 py-[1px] text-xs">
              <span>#</span>
              <span>{id}</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-bold">
              {price} {currency}
            </div>
            <div className="text-xs text-neutral-500">
              Last saled: {lastSale} WETH
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-between text-center w-full bg-sky-500 h-8 transition-transform divide-x-[1px] group-hover:-translate-y-8">
          <button className="w-4/5 font-semibold">Buy now</button>
          <button className="flex w-1/5 h-full text-center justify-center items-center">
            <AiOutlineShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const More: React.FC<MoreProps> = ({ ...props }) => {
  const { className } = props;
  const items: Item[] = [];

  for (let i = 0; i < 10; i++) {
    items.push({
      id: "1",
      title: "Title",
      image: "https://via.placeholder.com/300",
      price: 0.01,
      currency: "ETH",
      lastSale: 0.01,
    });
  }

  return (
    <div className={className}>
      <Accordion
        title={"More From This Collection"}
        className="bg-neutral-900 rounded-lg"
        icon={<BsGrid3X2Gap size={20} />}
        type="primary"
      >
        <div className="w-full divide-y-[1px] divide-gray-500/30">
          <div className="w-full overflow-x-auto px-2 py-1">
            <div className="inline-flex">
              {items.map((item, index) => (
                <CollectionItem
                  key={index}
                  {...item}
                  className="flex-shrink-0 lg:w-1/4 md:w-1/3 h-auto p-4"
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center py-2">
            <button className="bg-neutral-700 px-4 py-3 rounded-lg">
              View Collection
            </button>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default More;
