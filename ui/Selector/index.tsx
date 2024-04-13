"use client";

import React from "react";
import { FaAngleDown } from "react-icons/fa";

export interface SelectorItem {
  title: string;
}

export interface SelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SelectorItem[];
  initialSelected?: number;
}

export const Selector: React.FC<SelectorProps> = ({
  initialSelected = 0,
  ...props
}) => {
  const { items, className } = props;
  const selectRef = React.useRef<HTMLDivElement>(null);
  const [selected, setSelected] = React.useState<number>(initialSelected);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

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

  return (
    <div className={className}>
      <div className="relative w-full font-semibold" ref={selectRef}>
        <div
          className="flex items-center justify-between rounded-xl w-full border-gray-500 border-[1px] px-4 py-3"
          onClick={(event) => {
            setIsOpen((prevIsOpen) => !prevIsOpen);
          }}
        >
          <span className="">{items[selected].title}</span>
          <span className={`transition-all ${isOpen && "rotate-180"}`}>
            <FaAngleDown size={20} className="ml-auto" />
          </span>
        </div>
        {isOpen && (
          <ul className="absolute rounded-xl w-full top-14 p-1 bg-neutral-900 text-neutral-400">
            {items.map((el, index) => {
              return (
                <li
                  key={index}
                  className={`px-6 py-4 w-full rounded-xl cursor-pointer ${
                    selected !== index
                      ? "hover:text-neutral-50 hover:bg-neutral-500/20"
                      : "text-neutral-200 cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (selected === index) return;
                    setSelected(index);
                    setIsOpen(false);
                  }}
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
