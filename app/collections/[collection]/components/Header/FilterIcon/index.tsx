import React from "react";
import { IoFilterSharp } from "react-icons/io5";

const FilterIcon: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      <div className="p-4 bg-neutral-700/30 rounded-xl">
        <IoFilterSharp size={20} />
      </div>
    </div>
  );
};

export default FilterIcon;
