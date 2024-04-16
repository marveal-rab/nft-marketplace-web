import React from "react";
import Traits from "./Traits";
import RarityRank from "./RarityRank";
import EventType from "./EventType";

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
