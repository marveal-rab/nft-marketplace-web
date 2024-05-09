import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

interface StatProps extends Props {
  title: string;
  value: string;
  rate?: number;
}

export const Stat: React.FC<StatProps> = ({ ...props }) => {
  const { title, value, rate, className } = props;

  return (
    <div className={className}>
      <div className="flex flex-col items-start gap-1 p-6 w-full h-full rounded-2xl border-[1px] border-gray-500">
        <div className="text-neutral-700 text-sm">{title}</div>
        <div className="text-neutral-200 font-bold text-xl">{value}</div>
        {rate && (
          <div
            className={`flex items-center gap-2 text-sm font-bold ${
              rate < 0 ? "text-red-500" : "text-green-500"
            }`}
          >
            {rate < 0 && <FaArrowDown size={14} className="opacity-30" />}
            {rate > 0 && <FaArrowUp size={14} className="opacity-30" />}
            {rate} %
          </div>
        )}
      </div>
    </div>
  );
};
