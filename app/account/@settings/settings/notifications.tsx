import { CheckBox, Input } from "@/app/ui";
import React from "react";
import { FaEthereum } from "react-icons/fa";

interface ItemData {
  title: string;
  description: string;
  value: string;
}

const items: ItemData[] = [
  {
    title: "Item Sold",
    description: "When someone purchased one of your items",
    value: "item_sold",
  },
  {
    title: "Bid Activity",
    description: "When someone bids on one of your items",
    value: "bid_activity",
  },
  {
    title: "Deals Accepted",
    description: "When someone accepted one of your deals",
    value: "deals_accepted",
  },
  {
    title: "Deal Offers",
    description: "When someone offers a deal on your items",
    value: "deal_offers",
  },
  {
    title: "Price Change",
    description: "When an item you made an offer on changes in price",
    value: "price_change",
  },
  {
    title: "Auction Expiration",
    description: "When a timed auction you created ends",
    value: "auction_expiration",
  },
  {
    title: "Outbid",
    description: "When an offer you placed is exceeded by another user",
    value: "outbid",
  },
  {
    title: "Owned Item Updates",
    description:
      "When a significant update occurs for one of the items you have purchased on OpenSea",
    value: "owned_item_updates",
  },
  {
    title: "Successful Purchase",
    description: "When you successfully buy an item",
    value: "successful_purchase",
  },
  {
    title: "Successful Mint",
    description: "When you successfully mint an item",
    value: "successful_mint",
  },
];

interface ItemsProps extends Props {
  items: ItemData[];
}

interface ItemProps extends Props {
  item: ItemData;
}

const Item: React.FC<ItemProps> = (props) => {
  const { item } = props;

  const [checked, setChecked] = React.useState<boolean>(true);
  const handleCheckboxChange = (value: string): void => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <div className="flex gap-6 px-8 py-5">
      <div className="mt-1">
        <CheckBox
          value={item.value}
          isChecked={checked}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-semibold text-base">{item.title}</span>
        <span>{item.description}</span>
      </div>
    </div>
  );
};

const Notifications: React.FC<Props> = (props) => {
  return (
    <div className="ml-16 mb-20">
      <h2 className="text-3xl font-bold my-12">Notification settings</h2>
      <div>
        <span>
          Select which notifications you would like to receive for 0xdd58...bfe2
        </span>
        <div className="flex flex-col gap-2 border-[1px] border-gray-500/30 divide-y-[1px] divide-gray-500/30 rounded-xl mt-2">
          {items.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-2">
        <span className="font-semibold">Minimum Bid Threshold</span>
        <span>
          Receive notifications only when you receive offers with a value
          greater than or equal to this amount of ETH.
        </span>
        <div className="relative w-full mt-5">
          <div className="absolute flex items-center p-4 bg-neutral-900 gap-4 h-20 w-32 rounded-l-xl left-2 -top-4">
            <FaEthereum />
            <div className="flex flex-col">
              <span className="font-bold text-neutral-300">ETH</span>
              <span className="text-sm text-neutral-500">Ethereum</span>
            </div>
          </div>
          <Input placeholder="" className="h-12 ps-36 w-full" />
        </div>
      </div>
      <button className="mt-12 px-4 py-3 bg-blue-500 rounded-lg">Save</button>
    </div>
  );
};

export default Notifications;
