"use client";

import React from "react";
import { FaAngleDown } from "react-icons/fa";

export interface AccordionProps extends Props {
  title: string;
  after?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  open?: boolean;
  bottomBorder?: boolean;
  px?: number;
  py?: number;
}

export interface AccordionGroupProps extends Props {}

export const Accordion: React.FC<AccordionProps> = ({ ...props }) => {
  const {
    title,
    after,
    className,
    children,
    icon,
    open = false,
    px = 3,
    py = 4,
  } = props;
  const [isOpen, setIsOpen] = React.useState<boolean>(open);
  const padding = `px-${px} py-${py}`;

  return (
    <div className={className}>
      <div
        className={`group flex justify-between items-center text-neutral-200 rounded-xl ${padding} ${
          children && "hover:bg-neutral-900/50"
        } ${isOpen && "rounded-b-none border-b-[1px] border-b-gray-500/30"}`}
        onClick={() => {
          setIsOpen((prevIsOpen) => !prevIsOpen);
        }}
      >
        <div className="flex items-center gap-4">
          {icon && icon}
          <span className="font-bold text-base">{title}</span>
        </div>
        {children && (
          <div className="flex items-center gap-1">
            {after && (
              <span className="text-neutral-600 text-sm font-bold">
                {after}
              </span>
            )}
            <FaAngleDown
              size={20}
              className={`group-hover:text-neutral-600 transition duration-300 ease-linear ${
                isOpen && "rotate-180"
              }`}
            />
          </div>
        )}
      </div>
      {isOpen && children && <div className="w-full h-full">{children}</div>}
    </div>
  );
};
