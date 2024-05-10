"use client";

import FilterIcon from "@/app/components/Icon/filter";
import Collection from "@/app/components/SideBar/collection";
import React from "react";
import Main from "./main";

interface PageProps {
  params: {
    path?: string;
  };
}

export default function Page(props: PageProps) {
  const [showSideBar, setShowSideBar] = React.useState<boolean>(false);

  const isActive = props.params.path === "listings";

  return (
    <div className="w-full h-full">
      <div className="w-full h-20 items-center sticky top-40 z-10">
        <div className="flex gap-2 w-full h-full items-center justify-between">
          <FilterIcon
            onClick={(event) => {
              setShowSideBar((prev: boolean) => !prev);
            }}
          />
        </div>
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
          <Main className="w-full h-full" activeListings={isActive} />
        </div>
      </div>
    </div>
  );
}
