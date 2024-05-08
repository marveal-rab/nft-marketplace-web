import { Accordion, Selector } from "@/ui";
import { Datetimes } from "@/utils";
import React from "react";
import { BiTransfer } from "react-icons/bi";
import { GoTag } from "react-icons/go";

interface ItemActivityProps extends Props {}
interface Item {
  event: string;
  price: number;
  from: string;
  to: string;
  date: Date | number;
}
interface ActivityTableRowProps extends Item, Props {}

const ActivityTableRow: React.FC<ActivityTableRowProps> = ({ ...props }) => {
  const { event, price, from, to, date, className } = props;
  return (
    <div className={className}>
      <div className="grid grid-cols-5 items-center py-3 px-2">
        <span className="flex items-center gap-2">
          <GoTag />
          <span>{event}</span>
        </span>
        <span>{price} ETH</span>
        <span className="text-sky-600">
          <a href="#">{from}</a>
        </span>
        <span className="text-sky-600">
          <a href="#">{to}</a>
        </span>
        <span>{Datetimes.fromNow(date)}</span>
      </div>
    </div>
  );
};

const ItemActivity: React.FC<ItemActivityProps> = ({ ...props }) => {
  const { className } = props;

  const options = [
    {
      title: "Sales",
    },
    {
      title: "Deals Accepted",
    },
    {
      title: "Listings",
    },
    {
      title: "Offers",
    },
    {
      title: "Deal offers",
    },
    {
      title: "Transfers",
    },
  ];

  const items: Item[] = [];
  for (let i = 0; i < 50; i++) {
    items.push({
      event: "Sale",
      price: 0.1,
      from: "0x1234567890",
      to: "0x0987654321",
      date: Math.round(new Date().getTime() - Math.random() * 1000000000),
    });
  }

  return (
    <div className={className}>
      <Accordion
        title="Item Activity"
        className="bg-neutral-900 rounded-lg"
        icon={<BiTransfer size={20} />}
        px={5}
        py={5}
      >
        <div>
          <div className="p-4 border-b-[1px] border-b-gray-500/30">
            <Selector items={options} />
          </div>
          <div className="w-full">
            <div className="grid grid-cols-5 px-2 py-1 text-neutral-400 border-b-[1px] border-b-gray-500/30">
              <span>Event</span>
              <span>Price</span>
              <span>From</span>
              <span>To</span>
              <span>Date</span>
            </div>
            <div className="max-h-[400px] overflow-scroll divide-y-[1px] divide-gray-500/30">
              {items.map((el, index) => {
                return <ActivityTableRow key={index} {...el} />;
              })}
            </div>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default ItemActivity;
