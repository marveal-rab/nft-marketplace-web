import { Accordion } from "@/app/ui";
import { Datetimes } from "@/utils";
import React from "react";
import { GoTag } from "react-icons/go";

interface ItemListingsProps extends Props {}

interface Item {
  price: number;
  usdPrice: number;
  quanity: number;
  expiration: Date | number;
  from: string;
}

interface TableRowProps extends Item, Props {}

const TableRow: React.FC<TableRowProps> = ({ ...props }) => {
  const { price, usdPrice, quanity, expiration, from, className } = props;
  return (
    <div className={className}>
      <div className="w-full grid grid-cols-10 items-center py-3">
        <span className="col-span-2 text-bold">{price} ETH</span>
        <span className="col-span-2">${usdPrice}</span>
        <span>{quanity}</span>
        <span className="col-span-2 text-sm">
          {Datetimes.fromNow(expiration)}
        </span>
        <span className="col-span-2 text-sky-600">
          <a href="#">{from}</a>
        </span>
        <span>
          <button className="bg-sky-500 rounded-lg px-2 py-1">Buy</button>
        </span>
      </div>
    </div>
  );
};

const ItemListings: React.FC<ItemListingsProps> = ({ ...props }) => {
  const { className } = props;
  const items: Item[] = [];

  for (let i = 0; i < 10; i++) {
    items.push({
      price: 0.1,
      usdPrice: 100,
      quanity: 1,
      expiration:
        new Date().getTime() - Math.round(Math.random() * 1000 * 60 * 60 * 24),
      from: "28E079",
    });
  }

  return (
    <div className={className}>
      <Accordion
        title="Listings"
        className="bg-neutral-900 rounded-lg"
        icon={<GoTag size={20} />}
        open={false}
        type="primary"
      >
        <div className="w-full text-center">
          <div className="grid grid-cols-10 items-center w-full gap-2 px-2 border-b-[1px] border-gray-500/30 text-neutral-400">
            <span className="col-span-2">Price</span>
            <span className="col-span-2">USD Price</span>
            <span>Quanity</span>
            <span className="col-span-2">Expiration</span>
            <span className="col-span-2">From</span>
            <span></span>
          </div>
          <div className="max-h-[300px] overflow-y-scroll px-2">
            {items.map((item, index) => (
              <TableRow key={index} {...item} />
            ))}
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default ItemListings;
