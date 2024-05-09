import React from "react";

interface ListingsItem {
  img: string;
  title: string;
  rarity: number;
  time: number;
  price: number;
  rate: number;
}

interface ListingsItemProps extends ListingsItem, Props {}

const ListingsItem: React.FC<ListingsItemProps> = ({ ...props }) => {
  const { img, title, rarity, time, price, rate, className } = props;

  const [hover, setHover] = React.useState<boolean>(false);

  return (
    <div className={className}>
      <div
        className="flex items-center justify-between px-3 py-1 rounded-xl hover:bg-gray-500/30 text-nowrap"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <div className="flex gap-4 items-center">
          <img src={img} alt={title} className="w-12 h-12 rounded-lg" />
          <div className="flex flex-col">
            <span className="text-base font-bold">{title}</span>
            <span className="text-xs text-gray-500">Rarity: #{rarity}</span>
            <span className="text-xs text-gray-700">{time}</span>
          </div>
        </div>
        {hover ? (
          <button className="px-3 py-2 bg-sky-500 text-neutral-200 rounded-xl font-bold">
            Buy now
          </button>
        ) : (
          <div className="flex flex-col gap-1 text-right">
            <span className="text-sm font-bold">{price} ETH</span>
            <span className="text-xs text-neutral-700">
              {rate > 0 && "+" + rate}% floor
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const Listings: React.FC<Props> = ({ ...props }) => {
  const items: ListingsItem[] = [
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
  ];
  const { className } = props;
  return (
    <div className={className}>
      <div className="w-full h-full overflow-scroll">
        {items.map((el, index) => {
          return <ListingsItem key={index} {...el} />;
        })}
      </div>
    </div>
  );
};

export default Listings;
