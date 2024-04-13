import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  items: ItemData[];
}

interface GridItemProps extends ItemData, React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  image: string;
  price: string;
  currency: string;
  lastSale: string;
}

const GridItem: React.FC<GridItemProps> = ({ ...props }) => {
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
              Last saled: {lastSale}
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

const Grid: React.FC<GridProps> = ({ ...props }) => {
  const { items } = props;
  return (
    <div className={props.className}>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full h-full -z-max">
        {items.map((el, index) => {
          return <GridItem key={index} {...el} />;
        })}
      </div>
    </div>
  );
};

export default Grid;
