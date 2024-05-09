"use client";

import React from "react";
import { FaAngleDown } from "react-icons/fa";

export interface SelectorItem {
  title: string;
}

export interface SelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SelectorItem[];
  initialSelected?: number;
  border?: boolean;
  bg?: string;
  px?: number;
  py?: number;
}

export const Selector: React.FC<SelectorProps> = ({ ...props }) => {
  const {
    items,
    initialSelected = 0,
    border = true,
    bg = "bg-transparent",
    px = 4,
    py = 3,
    className,
  } = props;
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
      <div className="relative w-full font-semibold z-10" ref={selectRef}>
        <div
          className={`flex items-center justify-between rounded-xl w-full gap-1 ${
            border && "border-gray-500/30 border-[1px]"
          } ${bg} px-${px} py-${py}`}
          onClick={(event) => {
            setIsOpen((prevIsOpen) => !prevIsOpen);
          }}
        >
          <span className="text-nowrap">{items[selected].title}</span>
          <span className={`transition-all ${isOpen && "rotate-180"}`}>
            <FaAngleDown size={20} className="ml-auto" />
          </span>
        </div>
        {isOpen && (
          <div className="absolute rounded-xl top-14 p-1 bg-neutral-900 text-neutral-400 z-10 border-[1px] border-gray-500/10">
            {items.map((el, index) => {
              return (
                <div
                  key={index}
                  className={`px-6 py-4 w-auto rounded-xl cursor-pointer text-nowrap ${
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
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
