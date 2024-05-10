"use client";

import FilterIcon from "@/app/components/Icon/filter";
import { SearchInput, Selector, SelectorItem } from "@/app/ui";
import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { MdOutlineGridOn } from "react-icons/md";

interface HeaderProps extends Props {
  setShowSideBar: (func: (prev: boolean) => boolean) => void;
}

const StatusSelector: React.FC<Props> = (props) => {
  const items: SelectorItem[] = [
    {
      title: "Listed",
    },
    {
      title: "On auction",
    },
    {
      title: "New",
    },
    {
      title: "Has offers",
    },
  ];

  return <Selector items={items} />;
};

const ChainSelector: React.FC<Props> = (props) => {
  const items: SelectorItem[] = [
    {
      title: "Arbitrum",
    },
    {
      title: "Avalanche",
    },
    {
      title: "BNB Chain",
    },
    {
      title: "Base",
    },
    {
      title: "Blast",
    },
    {
      title: "Ethereum",
    },
    {
      title: "Klaytn",
    },
    {
      title: "Optimism",
    },
    {
      title: "Polygon",
    },
    {
      title: "Solana",
    },
    {
      title: "Zora",
    },
  ];

  return <Selector items={items} />;
};

const SortedSelect: React.FC<Props> = (props) => {
  const items = [
    {
      title: "Recently received",
    },
    {
      title: "Price high to low",
    },
    {
      title: "Price low to high",
    },
    {
      title: "highest floor",
    },
    {
      title: "Best offer",
    },
    {
      title: "Recently listed",
    },
    {
      title: "Recently created",
    },
    {
      title: "Highest last sale",
    },
    {
      title: "Oldest",
    },
  ];
  return <Selector items={items} className="w-60" />;
};

const ListStyleIconGroup: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  className = "",
  ...props
}) => {
  const [selected, setSelected] = React.useState<number>(1);
  const icons = [
    {
      icon: <FaListUl size={20} />,
    },
    {
      icon: <BsFillGridFill size={20} />,
    },
    {
      icon: <MdOutlineGridOn size={20} />,
    },
  ];

  const translate = () => {
    return selected === 0
      ? "translate-x-0"
      : selected === 1
      ? "translate-x-[100%]"
      : selected === 2
      ? "translate-x-[200%]"
      : "";
  };

  return (
    <ul
      className={`flex relative border-gray-700 items-center text-center border-[1px] rounded-xl text-neutral-600 h-12 ${className}`}
    >
      <div
        className={`absolute bg-neutral-700/30 w-12 h-12 rounded-xl transition-transform ${translate()}`}
      ></div>
      {icons.map((el, index) => {
        return (
          <li
            key={index}
            className={`rounded-xl z-10 w-12 h-full hover:text-neutral-200 ${
              selected === index && "text-neutral-200"
            }`}
            onClick={() => setSelected(index)}
          >
            <div className="flex items-center w-full h-full justify-center">
              {el.icon}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Header: React.FC<HeaderProps> = (props) => {
  const { setShowSideBar } = props;

  return (
    <div className="flex gap-2 w-full h-full items-center justify-between">
      <FilterIcon
        onClick={(event) => {
          setShowSideBar((prev: boolean) => !prev);
        }}
      />
      <StatusSelector />
      <ChainSelector />
      <SearchInput
        className="grow w-full min-w-64 flex-grow-1"
        placeholder="search by name"
      />
      <SortedSelect className="w-60 shrink-0" />
      <ListStyleIconGroup />
    </div>
  );
};

export default Header;
