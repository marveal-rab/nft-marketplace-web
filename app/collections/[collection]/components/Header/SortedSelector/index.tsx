"use client";

import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaSort } from "react-icons/fa";

const SortedSelector: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { className } = props;
  const [selected, setSelected] = React.useState<number>(0);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const selectRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const items = [
    { title: "Price low to high" },
    { title: "Price high to low" },
  ];
  return (
    <div className={className}>
      <div className="p-4 bg-neutral-700/30 rounded-xl lg:hidden">
        <FaSort size={20} />
      </div>
      <div className="relative w-56 max-lg:hidden" ref={selectRef}>
        <div
          className="flex items-center justify-between rounded-xl w-full border-gray-500 border-[1px] px-4 py-3"
          onClick={(event) => {
            setIsOpen((prevIsOpen) => !prevIsOpen);
          }}
        >
          <span className="">{items[selected].title}</span>
          <span>
            <FaAngleDown size={20} className="ml-auto" />
          </span>
        </div>
        {isOpen && (
          <ul className="absolute rounded-xl w-full top-14 p-1 bg-neutral-900 text-neutral-400 z-max">
            {items.map((el, index) => {
              return (
                <li
                  key={index}
                  className={`px-6 py-4 w-full rounded-xl ${
                    selected !== index
                      ? "hover:text-neutral-50 hover:bg-neutral-500/20"
                      : "text-neutral-200"
                  }`}
                  onClick={() => setSelected(index)}
                >
                  {el.title}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortedSelector;
