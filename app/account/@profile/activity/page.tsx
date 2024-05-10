"use client";

import React from "react";
import SideBar from "./sidebar";
import Main from "./main";
import { IoFilterSharp } from "react-icons/io5";

export default function Page() {
  const [showSideBar, setShowSideBar] = React.useState<boolean>(false);

  return (
    <div className="w-full h-full">
      <div className="w-full h-20 items-center sticky top-40 z-10">
        <div className="flex w-full h-full items-center">
          <div
            className="p-4 bg-neutral-700/30 rounded-xl"
            onClick={(e) => {
              e.stopPropagation();
              setShowSideBar((prev) => !prev);
            }}
          >
            <IoFilterSharp size={20} />
          </div>
        </div>
      </div>
      <div
        className={`flex w-full h-[calc(100vh-240px)] sticky top-60 pt-2 pb-8`}
      >
        {showSideBar && (
          <div className="w-1/4 min-w-60 h-full overflow-y-auto scroller max-md:hidden">
            <SideBar />
          </div>
        )}
        <div className="w-full h-full mx-2 overflow-y-auto scroller">
          <Main className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
