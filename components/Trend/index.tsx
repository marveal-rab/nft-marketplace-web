"use client";

import { Arrays } from "@/utils";
import { title } from "process";
import React, { useEffect } from "react";

import { BsChevronDown } from "react-icons/bs";

interface TrendProps extends React.HTMLAttributes<HTMLDivElement> {}
interface TableProps extends React.HTMLAttributes<HTMLDivElement> {}

interface TableDataItemProps
  extends TrendData,
    React.HTMLAttributes<HTMLDivElement> {
  rank: number;
  img: string;
  title: string;
  floorPrice: number;
  volume: number;
}

interface TrendData {
  img: string;
  title: string;
  floorPrice: number;
  volume: number;
}

const TableDataItem: React.FC<TableDataItemProps> = ({ ...props }) => {
  const { rank, img, title, floorPrice, volume } = props;
  return (
    <div className="py-4 text-neutral-200">
      <div className="grid grid-cols-12 items-center font-bold text-base">
        <div className="col-span-1 pl-4">{rank}</div>
        <div className="col-span-7 pl-3 flex items-center space-x-6">
          <div className="w-[70px] h-[70px] rounded-md overflow-hidden">
            <img src={img} alt="" />
          </div>
          <div className="">{title}</div>
        </div>
        <div className="col-span-2 text-center">{floorPrice} ETH</div>
        <div className="col-span-2 text-center">{volume} ETH</div>
      </div>
    </div>
  );
};

const TrendTableHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div className="grid grid-cols-12 h-8 items-center border-b-[1px] border-neutral-700/50 pb-4 font-normal text-sm text-neutral-400/60">
      <div className="col-span-1 text-center">Rank</div>
      <div className="col-span-7 pl-2">Collection</div>
      <div className="col-span-2 text-center">Floor Price</div>
      <div className="col-span-2 text-center">Volume</div>
    </div>
  );
};

const TrendTable: React.FC<TableProps> = ({ ...props }) => {
  const [page, setPage] = React.useState(2);
  const [pageSize, setPageSize] = React.useState(5);

  const items: TrendData[] = [
    {
      img: "https://picsum.photos/70/70",
      title: "Art Blocks",
      floorPrice: 0.05,
      volume: 3.6,
    },
    {
      img: "https://picsum.photos/70/70",
      title: "Art Blocks",
      floorPrice: 0.05,
      volume: 3.6,
    },
    {
      img: "https://picsum.photos/70/70",
      title: "Art Blocks",
      floorPrice: 0.05,
      volume: 3.6,
    },
    {
      img: "https://picsum.photos/70/70",
      title: "Art Blocks",
      floorPrice: 0.05,
      volume: 3.6,
    },
    {
      img: "https://picsum.photos/70/70",
      title: "Art Blocks",
      floorPrice: 0.05,
      volume: 3.6,
    },
    {
      img: "https://picsum.photos/70/70",
      title: "Art Blocks",
      floorPrice: 0.05,
      volume: 3.6,
    },
    {
      img: "https://picsum.photos/70/70",
      title: "Art Blocks",
      floorPrice: 0.05,
      volume: 3.6,
    },
    {
      img: "https://picsum.photos/70/70",
      title: "Art Blocks",
      floorPrice: 0.05,
      volume: 3.6,
    },
    {
      img: "https://picsum.photos/70/70",
      title: "Art Blocks",
      floorPrice: 0.05,
      volume: 3.6,
    },
    {
      img: "https://picsum.photos/70/70",
      title: "Art Blocks",
      floorPrice: 0.05,
      volume: 3.6,
    },
  ];

  return (
    <div className="flex justify-between w-full">
      {Arrays.chunk(items, pageSize).map((el, index) => {
        return (
          <div className="flex-row w-[48%]" key={index}>
            <TrendTableHeader />
            <div>
              {el.map((subEl, subIndex) => {
                return (
                  <TableDataItem
                    key={subIndex}
                    rank={index * pageSize + subIndex + 1}
                    img={subEl.img}
                    title={subEl.title}
                    floorPrice={subEl.floorPrice}
                    volume={subEl.volume}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Tab: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const [tab, setTab] = React.useState<number>(0);
  return (
    <div className="flex relative p-1 bg-neutral-800/50 rounded-xl font-bold text-base text-neutral-50 overflow-hidden">
      <div
        className={`absolute top-1 rounded-xl h-[40px] bg-neutral-500/50 transition-transform duration-200 ${
          tab === 0 && "translate-x-0 w-[110px]"
        } ${tab === 1 && "translate-x-[110px] w-[70px]"}`}
      ></div>
      <div
        className={`px-5 py-2 w-[110px] z-10 ${
          tab !== 0 && "text-neutral-500 hover:text-neutral-50"
        }`}
        onClick={() => setTab(0)}
      >
        Trending
      </div>
      <div
        className={`px-5 py-2 w-[70px] z-10 ${
          tab !== 1 && "text-neutral-500 hover:text-neutral-50"
        }`}
        onClick={() => setTab(1)}
      >
        Top
      </div>
    </div>
  );
};

const DateSelector: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { className } = props;
  const [selected, setSelected] = React.useState<number>(0);
  return (
    <div className={`${className}`}>
      <ul className="flex relative p-1 bg-neutral-800/50 rounded-xl font-bold text-sm text-neutral-50 overflow-hidden text-center">
        <div
          className={`absolute top-1 rounded-xl h-9 w-12 bg-neutral-500/50 transition-transform duration-200 ${
            selected === 0 && "translate-x-0"
          } ${selected === 1 && "translate-x-[100%]"} ${
            selected === 2 && "translate-x-[200%]"
          } ${selected === 3 && "translate-x-[300%]"} `}
        ></div>
        <li
          className={`px-3 py-2 w-12 z-10 ${
            selected !== 0 && "text-neutral-500 hover:text-neutral-50"
          }`}
          onClick={() => setSelected(0)}
        >
          1h
        </li>
        <li
          className={`px-3 py-2 w-12 z-10 ${
            selected !== 1 && "text-neutral-500 hover:text-neutral-50"
          }`}
          onClick={() => setSelected(1)}
        >
          16h
        </li>
        <li
          className={`px-3 py-2 w-12 z-10 ${
            selected !== 2 && "text-neutral-500 hover:text-neutral-50"
          }`}
          onClick={() => setSelected(2)}
        >
          24h
        </li>
        <li
          className={`px-3 py-2 w-12 z-10 ${
            selected !== 3 && "text-neutral-500 hover:text-neutral-50"
          }`}
          onClick={() => setSelected(3)}
        >
          7d
        </li>
      </ul>
    </div>
  );
};

const ChainSelector: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const [selected, setSelected] = React.useState<number>(0);
  const [open, setOpen] = React.useState<boolean>(false);
  const selectRef = React.useRef<HTMLDivElement>(null);

  const items = [
    { title: "All Chain", href: "#" },
    { title: "Arbitrum", href: "#" },
    { title: "Avalanche", href: "#" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative bg-neutral-800/50 rounded-xl font-bold text-base text-neutral-50"
      ref={selectRef}
    >
      <div
        className="flex items-center space-x-2 px-4 py-2.5"
        onClick={() => setOpen((preOpen) => !preOpen)}
      >
        <span>{items[selected].title}</span>
        <BsChevronDown
          className={`transition-transform duration-300 transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
          size={14}
        />
      </div>
      {open && (
        <div
          className={`absolute bg-neutral-900 rounded-xl font-bold text-base text-neutral-400 top-12 -left-2`}
        >
          <ul className="px-2 py-1">
            {items.map((el, index) => {
              return (
                <li
                  key={index}
                  className={`px-6 my-1 py-2 rounded-lg hover:bg-neutral-500/20  hover:text-neutral-50 cursor-pointer ${
                    selected === index && "bg-neutral-500/20 text-neutral-50"
                  }`}
                  onClick={() => setSelected(index)}
                >
                  <a href={el.href}>{el.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

const Selector: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div className="flex justify-between items-center">
      <Tab />
      <div className="flex space-x-5 items-center">
        <DateSelector />
        <ChainSelector />
        <a
          className="px-5 py-2.5 bg-neutral-800/50 rounded-xl font-bold text-base text-neutral-50 no-underline"
          href="#"
        >
          View All
        </a>
      </div>
    </div>
  );
};

const Trend: React.FC<TrendProps> = ({ ...props }) => {
  return (
    <div className="w-full mx-1 my-6 flex-rows space-y-4">
      <Selector />
      <TrendTable />
    </div>
  );
};

export default Trend;
