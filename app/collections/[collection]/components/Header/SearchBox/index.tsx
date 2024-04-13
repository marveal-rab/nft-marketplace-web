"use client";

import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBox: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { className } = props;
  const [searchText, setSearchText] = React.useState("");
  return (
    <div className={className}>
      <form className="">
        <div className="relative w-full mx-auto">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-300">
            <BsSearch />
          </div>
          <input
            type="search"
            className="block bg-opacity-30 w-full px-4 py-3 ps-10 text-base text-gray-100 border-gray-500 outline-none border-[1px] rounded-xl bg-gray-900 focus:outline-none"
            placeholder="Search by name or traits"
            required
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
