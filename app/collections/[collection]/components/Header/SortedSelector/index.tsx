"use client";

import { Selector, SelectorItem } from "@/ui";
import React from "react";
import { FaSort } from "react-icons/fa";

const SortedSelector: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { className } = props;

  const items: SelectorItem[] = [
    { title: "Price low to high" },
    { title: "Price high to low" },
  ];
  return (
    <div className={className}>
      <div className="p-4 bg-neutral-700/30 rounded-xl lg:hidden">
        <FaSort size={20} />
      </div>
      <Selector items={items} className="w-56 max-lg:hidden" />
    </div>
  );
};

export default SortedSelector;
