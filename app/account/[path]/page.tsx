"use client";

import React from "react";
import Header from "./header";
import SideBar from "./sidebar";
import Main from "./main";

interface PageProps {
  params: {
    path?: string;
  };
}

export default function Page(props: PageProps) {
  const path = props.params.path;
  const notFound =
    path !== undefined && path !== "collected" && path !== "created";
  if (notFound) {
    return null;
  }

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
