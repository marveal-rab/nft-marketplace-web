"use client";

import React from "react";
import { Accordion } from "@/ui";
import Status from "./Status";
import CreatorEarnings from "./CreatorEarnings";
import Price from "./Price";
import RarityRank from "./RarityRank";
import Currency from "./Currency";

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
      <Accordion title="Traits"></Accordion>
      <ul>
        <li>
          <Accordion title="Background" after="12">
            hello world
          </Accordion>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
