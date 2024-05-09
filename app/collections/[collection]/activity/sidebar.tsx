import React from "react";
import Traits from "./components/Traits";
import EventType from "@/app/components/SideBar/event-type";
import RarityRank from "@/app/components/SideBar/rarity-rank";

interface SideBarProps extends Props {}

const SideBar: React.FC<SideBarProps> = ({ ...props }) => {
  const { className } = props;
  return (
    <div className={`w-full h-full overflow-scroll ${className}`}>
      <ul>
        <li>
          <EventType />
        </li>
        <li>
          <RarityRank />
        </li>
      </ul>
      <div className="border-b-[1px] border-gray-500/30"></div>
      <Traits />
    </div>
  );
};

export default SideBar;
