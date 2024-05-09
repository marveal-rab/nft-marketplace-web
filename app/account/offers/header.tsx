"use client";

import FilterIcon from "@/app/components/Icon/filter";
import { Selector, SelectorItem } from "@/app/ui";
import React from "react";

interface HeaderProps extends Props {
  setShowSideBar: (func: (prev: boolean) => boolean) => void;
}

const StatusSelector: React.FC<Props> = (props) => {
  const items: SelectorItem[] = [
    {
      title: "Active",
    },
    {
      title: "Expiring",
    },
    {
      title: "Inactive",
    },
  ];

  return <Selector items={items} />;
};

const TypeSelector: React.FC<Props> = (props) => {
  const items: SelectorItem[] = [
    {
      title: "Single offers",
    },
    {
      title: "Collection offers",
    },
    {
      title: "Trait collection offers",
    },
  ];

  return <Selector items={items} />;
};

const Header: React.FC<HeaderProps> = (props) => {
  const { setShowSideBar } = props;

  return (
    <div className="flex gap-2 w-full h-full items-center">
      <FilterIcon
        onClick={(event) => {
          setShowSideBar((prev: boolean) => !prev);
        }}
      />
      <TypeSelector />
      <StatusSelector />
    </div>
  );
};

export default Header;
