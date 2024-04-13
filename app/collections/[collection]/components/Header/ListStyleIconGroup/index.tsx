"use client";

import React from "react";
import { FaListUl } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { MdOutlineGridOn } from "react-icons/md";

const ListStyleIconGroup: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  className = "",
  ...props
}) => {
  const [selected, setSelected] = React.useState(1);
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
  return (
    <ul
      className={`flex relative border-gray-700 items-center text-center border-[1px] rounded-xl text-neutral-600 h-12 ${className}`}
    >
      <div
        className={`absolute bg-neutral-700/30 w-12 h-12 rounded-xl transition-transform translate-x-[${
          selected * 100
        }%]`}
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

export default ListStyleIconGroup;
