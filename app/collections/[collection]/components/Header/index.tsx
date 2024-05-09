import React from "react";
import TotalItemsShow from "./TotalItemsShow";
import ListStyleIconGroup from "./ListStyleIconGroup";
import SortedSelector from "./SortedSelector";
import { SearchInput } from "@/app/ui";
import FilterIcon from "@/app/components/Icon/filter";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  setShowSideBar: (func: (prev: boolean) => boolean) => void;
}

const Header: React.FC<Props> = ({ ...props }: Props) => {
  const { setShowSideBar } = props;
  return (
    <div className={props.className}>
      <div className="flex gap-2 w-full h-full items-center justify-between">
        <FilterIcon
          onClick={(event) => {
            setShowSideBar((prev: boolean) => !prev);
          }}
        />
        <TotalItemsShow />
        <SearchInput
          className="grow w-full min-w-64 max-w-[512px]"
          placeholder="Search by name or traits"
        />
        <div className="flex gap-2">
          <SortedSelector />
          <ListStyleIconGroup />
        </div>
      </div>
    </div>
  );
};

export default Header;
