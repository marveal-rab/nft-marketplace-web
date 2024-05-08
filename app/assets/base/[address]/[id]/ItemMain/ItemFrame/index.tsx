import React from "react";
import { FaRegHandshake } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { Datetimes } from "@/utils";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Countdown from "react-countdown";
import { GoTag } from "react-icons/go";
import ConuntDownTimer from "./countdown-timer";

interface ItemFrameProps extends Props {}

const ItemFrame: React.FC<ItemFrameProps> = ({ ...props }) => {
  const { className } = props;
  const endTime = new Date().getTime() + 1000 * 60 * 60 * 24 * 7;

  return (
    <div className={`flex mt-5 flex-col gap-6 ${className}`}>
      <div className="">
        <div className="flex justify-between">
          <a href="#" className="text-sky-700 mb-3">
            Caster Cats
          </a>
          <span className="flex items-center gap-4">
            <FaRegHandshake size={18} />
            <FaUpload size={18} />
            <IoIosMore size={18} />
          </span>
        </div>
        <h1 className="text-2xl leading-10 font-bold">Caster Cats #2033</h1>
        <span>
          Owned by{" "}
          <a href="#" className="text-sky-700">
            28E079
          </a>
        </span>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-sm px-2 py-1 border-[1px] border-gray-500/30 rounded-lg">
          <span>#</span>1,202
        </div>
        <div className="flex items-center gap-2">
          <FaEye size={20} />
          <span>37 views</span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegHeart size={20} />
          <span>1 favorite</span>
        </div>
        <div className="flex items-center gap-2">
          <ImProfile size={20} />
          <span>PFPs</span>
        </div>
      </div>
      <div className="border-[1px] border-gray-500/30 rounded-lg bg-neutral-900">
        <div className="flex flex-col gap-4 p-6 border-b-[1px] border-b-gray-500/30">
          <span>
            Sales end{" "}
            {Datetimes.format(endTime, "YYYY年M月D日 [at] A h:mm", "zh-cn")}
          </span>
          {endTime > new Date().getTime() && (
            <Countdown date={endTime} renderer={ConuntDownTimer} />
          )}
        </div>
        <div className="flex flex-col gap-4 p-6">
          <span className="text-sm text-neutral-400">Current price</span>
          <span className=" flex items-end gap-4">
            <span className="text-3xl">0.0272 ETH</span>
            <span className="text-sm text-neutral-400">$83.57</span>
          </span>
          <div className="flex items-center gap-4 w-full h-10">
            <div className="w-1/2 flex items-center bg-sky-500 rounded-xl h-full">
              <button className="w-full h-full">Buy now</button>
              <button className="px-4 border-l-[1px] border-l-neutral-100 h-full">
                <AiOutlineShoppingCart size={18} />
              </button>
            </div>
            <button className="w-1/2 flex items-center justify-center gap-4 border-[1px] border-gray-500/30 h-full rounded-xl bg-neutral-800">
              <GoTag />
              <span>Make offer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemFrame;
