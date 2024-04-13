import React from "react";
import FilterIcon from "./FilterIcon";
import TotalItemsShow from "./TotalItemsShow";
import SearchBox from "./SearchBox";
import ListStyleIconGroup from "./ListStyleIconGroup";
import SortedSelector from "./SortedSelector";

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
        <SearchBox className="grow w-full min-w-64 max-w-[512px]" />
        <div className="flex gap-2">
          <SortedSelector />
          <ListStyleIconGroup />
        </div>
      </div>
    </div>
  );
};

export default Header;
