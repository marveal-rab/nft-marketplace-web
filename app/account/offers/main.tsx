import React from "react";

const Main: React.FC<Props> = (props) => {
  return (
    <div className="px-2">
      <div className="flex items-center justify-center rounded-xl border-[1px] border-gray-500/30 my-6 h-60">
        <span className="text-2xl font-normal">No items to display</span>
      </div>
    </div>
  );
};

export default Main;
