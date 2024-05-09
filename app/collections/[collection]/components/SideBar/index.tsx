"use client";

import React from "react";
import Status from "./Status";
import CreatorEarnings from "./CreatorEarnings";
import Traits from "./Traits";
import Price from "@/app/components/SideBar/price";
import RarityRank from "@/app/components/SideBar/rarity-rank";
import Currency from "@/app/components/SideBar/currency";

const SideBar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div className={`w-full h-full overflow-scroll ${props.className}`}>
      <ul>
        <li>
          <Status />
        </li>
        <li>
          <CreatorEarnings />
        </li>
        <li>
          <Price />
        </li>
        <li>
          <RarityRank />
        </li>
        <li>
          <Currency />
        </li>
      </ul>
      <div className="border-b-[1px] border-gray-500/30"></div>
      <Traits />
    </div>
  );
};

export default SideBar;
