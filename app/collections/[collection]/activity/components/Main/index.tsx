import React from "react";
import { VolumeAndPriceChart } from "./VolumeAndPrice";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface MainProps extends Props {}
interface ActivityTableProps extends Props {}

interface Activity {
  type: string;
  img: string;
  title: string;
  author: string;
  price: number;
  dollar: number;
  quantity: number;
  rarity: number;
  from: string;
}

interface ActivityItemProps extends Activity, Props {}

const ActivityItem: React.FC<ActivityItemProps> = ({ ...props }) => {
  const {
    type,
    img,
    title,
    author,
    price,
    dollar,
    quantity,
    rarity,
    from,
    className,
  } = props;
  return (
    <li className={className}>
      <div className="w-full grid grid-cols-12 items-center gap-2 px-4 py-3 hover:bg-neutral-500/20 rounded-xl border-b-[1px] border-b-gray-500/50">
        <span>{type === "Sale" && <AiOutlineShoppingCart size={20} />}</span>
        <span className="font-bold">{type}</span>
        <span className="col-span-4">
          <div className="flex items-center gap-2">
            <img src={img} alt={title} className="w-10 h-10" />
            <div className="flex flex-col gap-0">
              <span className="text-nowrap overflow-hidden text-ellipsis font-bold">
                {title}
              </span>
              <span className="text-xs text-neutral-700">{author}</span>
            </div>
          </div>
        </span>
        <span className="col-span-2 flex flex-col text-right">
          <span className="font-bold">{price} WETH</span>
          <span className="text-xs text-neutral-700">${dollar}</span>
        </span>
        <span className="text-right">#{rarity}</span>
        <span className="col-span-1 text-right">{quantity}</span>
        <span className="col-span-2 text-right text-nowrap overflow-hidden text-ellipsis text-sky-800">
          <a href="#">{from}</a>
        </span>
      </div>
    </li>
  );
};

const ActivityTable: React.FC<ActivityTableProps> = ({ ...props }) => {
  const { className } = props;
  const items = [];

  for (let i = 0; i < 20; i++) {
    items.push({
      type: "Sale",
      img: "https://via.placeholder.com/50",
      title: "The title of the item",
      author: "Author",
      price: 0.1,
      dollar: 100,
      quantity: 1,
      rarity: 100,
      from: "From",
    });
  }

  return (
    <div className={className}>
      <div className="w-full px-2">
        <div className="w-full grid grid-cols-12 text-sm text-neutral-700 px-4 py-2 border-b-[1px] border-b-gray-500/30 gap-2">
          <span></span>
          <span></span>
          <span className="col-span-4">Item</span>
          <span className="col-span-2 text-right">Price</span>
          <span className="text-right">Rarity</span>
          <span className="col-span-1 text-right">Quantity</span>
          <span className="col-span-2 text-right">From</span>
        </div>
        <ul className="flex flex-col gap-1">
          {items.map((item, index) => {
            return <ActivityItem key={index} {...item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

const Main: React.FC<MainProps> = ({ ...props }) => {
  const { className } = props;

  return (
    <div className={className}>
      <div></div>
      <div className="h-100 w-full">
        <VolumeAndPriceChart />
      </div>
      <ActivityTable className="w-full" />
    </div>
  );
};

export default Main;
