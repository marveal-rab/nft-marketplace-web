import React from "react";
import FilterIcon from "./FilterIcon";
import { Transition } from "@headlessui/react";
import { SearchInput, Selector } from "@/app/ui";

interface HeaderProps {
  className?: string;
  setShowSideBar: (func: (prev: boolean) => boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  const { className, setShowSideBar } = props;

  const items = [
    {
      title: "Last Hour",
    },
    {
      title: "Last 6 Hours",
    },
    {
      title: "Last 24 Hours",
    },
    {
      title: "Last 7 Days",
    },
    {
      title: "Last 30 Days",
    },
    {
      title: "Last 90 Days",
    },
    {
      title: "All Time",
    },
  ];
  return (
    <div className={className}>
      <div className="flex gap-2 w-full h-full items-center justify-between">
        <div className="flex items-center gap-4">
          <FilterIcon
            onClick={(event) => {
              setShowSideBar((prev: boolean) => !prev);
            }}
          />
        </div>
        <SearchInput
          placeholder="Search by trait"
          className="grow w-full min-w-64 "
        />
        <Selector
          items={items}
          className="min-w-64 relative"
          initialSelected={items.length - 1}
        />
      </div>
    </div>
  );
};

export default Header;
