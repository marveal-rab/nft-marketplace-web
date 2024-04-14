import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

interface Data {
  offerPrice: number;
  totalVolume: string;
  totalOffers: number;
  bidderImg: string;
  bidders: number;
}

interface MainProps extends Props {}
interface ItemProps extends Props {
  el: Data;
}

const Item: React.FC<ItemProps> = ({ ...props }) => {
  const { el } = props;
  const bestOffer = 0.112;

  const [show, setShow] = React.useState<boolean>(false);

  return (
    <div
      className="grid grid-cols-9 items-center gap-2 my-2 hover:bg-gray-500/20 p-1 rounded-xl text-nowrap"
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <div className="col-span-3 px-2 py-1 relative h-8 w-full z-10">
        {show ? (
          <Link href="/collection/offer">
            <div className="absolute bg-gradient-to-r from-[91%] from-[#15171a] top-1">
              <div className="relative flex items-center h-full pr-4 z-[2]">
                <span>Offer at {el.offerPrice} WETH</span>
                <FaAngleRight size={16} />
              </div>
            </div>
          </Link>
        ) : (
          <div className="relative z-[2]">{el.offerPrice} WETH</div>
        )}
        <div className={`absolute h-full w-full left-0 top-0 z-[1] `}>
          <div
            className={`bg-green-950 h-full rounded-lg`}
            style={{ width: `${(100 * el.offerPrice) / bestOffer}%` }}
          ></div>
        </div>
      </div>
      <div className="col-span-2 text-center">{el.totalVolume} WETH</div>
      <div className="col-span-2 text-center">{el.totalOffers}</div>
      <div className="flex items-center col-span-2 gap-2 justify-center">
        <img src={el.bidderImg} alt="" className="h-6 w-6 rounded-full" />
        <span>{el.bidders}</span>
      </div>
    </div>
  );
};

const Main: React.FC<MainProps> = ({ ...props }) => {
  const { className } = props;

  const items = [
    {
      offerPrice: 0.091,
      totalVolume: "10.845",
      totalOffers: 10,
      bidderImg: "https://via.placeholder.com/150",
      bidders: 5,
    },
    {
      offerPrice: 0.018,
      totalVolume: "10.845",
      totalOffers: 10,
      bidderImg: "https://via.placeholder.com/150",
      bidders: 5,
    },
    {
      offerPrice: 0.005,
      totalVolume: "10.845",
      totalOffers: 10,
      bidderImg: "https://via.placeholder.com/150",
      bidders: 5,
    },
    {
      offerPrice: 0.112,
      totalVolume: "10.845",
      totalOffers: 10,
      bidderImg: "https://via.placeholder.com/150",
      bidders: 5,
    },
    {
      offerPrice: 0.112,
      totalVolume: "10.845",
      totalOffers: 10,
      bidderImg: "https://via.placeholder.com/150",
      bidders: 5,
    },
    {
      offerPrice: 0.112,
      totalVolume: "10.845",
      totalOffers: 10,
      bidderImg: "https://via.placeholder.com/150",
      bidders: 5,
    },
    {
      offerPrice: 0.112,
      totalVolume: "10.845",
      totalOffers: 10,
      bidderImg: "https://via.placeholder.com/150",
      bidders: 5,
    },
    {
      offerPrice: 0.112,
      totalVolume: "10.845",
      totalOffers: 10,
      bidderImg: "https://via.placeholder.com/150",
      bidders: 5,
    },
    {
      offerPrice: 0.112,
      totalVolume: "10.845",
      totalOffers: 10,
      bidderImg: "https://via.placeholder.com/150",
      bidders: 5,
    },
    {
      offerPrice: 0.112,
      totalVolume: "10.845",
      totalOffers: 10,
      bidderImg: "https://via.placeholder.com/150",
      bidders: 5,
    },
    {
      offerPrice: 0.112,
      totalVolume: "10.845",
      totalOffers: 10,
      bidderImg: "https://via.placeholder.com/150",
      bidders: 5,
    },
    {
      offerPrice: 0.112,
      totalVolume: "10.845",
      totalOffers: 10,
      bidderImg: "https://via.placeholder.com/150",
      bidders: 5,
    },
    {
      offerPrice: 0.112,
      totalVolume: "10.845",
      totalOffers: 10,
      bidderImg: "https://via.placeholder.com/150",
      bidders: 5,
    },
    {
      offerPrice: 0.112,
      totalVolume: "10.845",
      totalOffers: 10,
      bidderImg: "https://via.placeholder.com/150",
      bidders: 5,
    },
    {
      offerPrice: 0.112,
      totalVolume: "10.845",
      totalOffers: 10,
      bidderImg: "https://via.placeholder.com/150",
      bidders: 5,
    },
    {
      offerPrice: 0.112,
      totalVolume: "10.845",
      totalOffers: 10,
      bidderImg: "https://via.placeholder.com/150",
      bidders: 5,
    },
  ];

  return (
    <div className={className}>
      <div className="grid grid-cols-9 items-center gap-2 text-sm border-b-[1px] border-gray-500 py-2 text-neutral-500 sticky top-1 bg-black bg-opacity-100 z-30 px-2">
        <span className="col-span-3 rounded-md px-2 py-1">Offer price</span>
        <span className="col-span-2 text-center">Total Volume</span>
        <span className="col-span-2 text-center">Total offers</span>
        <span className="col-span-2 text-center">Bidders</span>
      </div>
      <div className="m-2 text-neutral-200">
        {items.map((el, index) => {
          return <Item key={index} el={el} />;
        })}
      </div>
    </div>
  );
};

export default Main;
