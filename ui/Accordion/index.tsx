"use client";

import { after } from "node:test";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  after?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  ...props
}: AccordionProps) => {
  const { title, after, className, children } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={className}>
      <div
        className={`group flex justify-between items-center text-neutral-200 rounded-xl px-3 py-4 ${
          children ? "hover:bg-neutral-900/50" : ""
        }`}
        onClick={() => {
          setIsOpen((prevIsOpen) => !prevIsOpen);
        }}
      >
        <span className="font-bold text-base">{title}</span>
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
      {isOpen && children && (
        <div className="border-b-[1px] border-b-neutral-500/50">{children}</div>
      )}
    </div>
  );
};
