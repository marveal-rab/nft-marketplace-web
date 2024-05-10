import { Switch } from "@/app/ui";
import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { RiArrowLeftDownLine } from "react-icons/ri";

const Main: React.FC<Props> = (props) => {
  return (
    <div className="w-full h-full space-y-8">
      <div className="flex gap-4 justify-end">
        <div className="flex items-center gap-2">
          <span className="text-sm text-neutral-300">Show all offers</span>
          <Switch isOn />
        </div>
        <div className="p-3 flex items-center justify-center bg-neutral-900  rounded-xl">
          <IoSettingsSharp size={18} />
        </div>
      </div>
      <div className="bg-neutral-900 border-[1px] border-gray-500/30 rounded-xl divide-y-[1px] divide-gray-500/30">
        <div className="flex items-center gap-4 px-4 h-16">
          <RiArrowLeftDownLine size={20} />
          <span className="text-lg font-semibold">Offers received</span>
        </div>
        <div className="flex items-center justify-center h-32">
          No offers yet
        </div>
      </div>
    </div>
  );
};

export default Main;
