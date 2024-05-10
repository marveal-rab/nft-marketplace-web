"use client";

import React from "react";
import Header from "./header";
import Main from "./main";
import Collection from "@/app/components/SideBar/collection";

export default function Page() {
  const [showSideBar, setShowSideBar] = React.useState<boolean>(false);

  return (
    <div className="w-full h-full">
      <div className="w-full h-20 items-center sticky top-40 z-10">
        <Header className="w-full h-full" setShowSideBar={setShowSideBar} />
      </div>
      <div
        className={`flex w-full h-[calc(100vh-240px)] sticky top-60 pt-2 pb-8`}
      >
        {showSideBar && (
          <div className="w-1/4 min-w-60 h-full overflow-y-auto scroller max-md:hidden">
            <div className={`w-full h-full`}>
              <ul>
                <li>
                  <Collection />
                </li>
              </ul>
            </div>
          </div>
        )}
        <div className="w-full h-full mx-2 overflow-y-auto scroller">
          <Main className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
