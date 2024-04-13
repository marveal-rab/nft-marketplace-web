import React from "react";

const TotalItemsShow: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div>
      <div className="flex lg:space-x-2 max-lg:flex-col max-lg:space-y-1 text-center max-md:hidden">
        <div className="flex items-center w-full space-x-2 pl-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span>Live</span>
        </div>
        <span className="text-neutral-400 text-nowrap">3,000 results</span>
      </div>
    </div>
  );
};
export default TotalItemsShow;
