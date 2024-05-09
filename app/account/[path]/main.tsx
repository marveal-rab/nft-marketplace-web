import React from "react";

const Main: React.FC<Props> = (props) => {
  return (
    <div className="px-2">
      <p className="py-4">
        <span>0</span> items
      </p>
      <div className="flex items-center justify-center rounded-xl border-[1px] border-gray-500/30 my-6 h-60">
        <div className="flex flex-col text-center gap-4">
          <span className="text-2xl font-normal">
            No items found for this search
          </span>
          <div>
            <button className="px-6 py-3 bg-sky-500 rounded-lg">
              Back to all items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
