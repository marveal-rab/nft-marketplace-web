import { SearchInput } from "@/ui";
import React from "react";
import TraitSelector from "./TraitSelector";

interface SideBarProps {
  className?: string;
}

const SideBar: React.FC<SideBarProps> = ({ ...props }) => {
  const { className } = props;
  return (
    <div className={`w-full h-full overflow-scroll ${className}`}>
      <span className="text-neutral-200 text-sm font-semibold">Filter</span>
      <SearchInput placeholder="Search" px={3} py={2} />
      <div className="flex justify-between text-xs text-neutral-700 font-bold mx-1 my-2">
        <span>TRAIT</span>
        <span>TOP OFFER</span>
      </div>
      <div className="flex my-2">
        <TraitSelector className="w-full my-1" />
      </div>
    </div>
  );
};

export default SideBar;
