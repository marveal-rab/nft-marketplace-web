"use client";

import React from "react";

import { Header, Main, SideBar } from "./components";

export default function Page({ params }: { params: { collection: string } }) {
  const [showSideBar, setShowSideBar] = React.useState(true);

  return (
    <div className="w-full h-full">
      <div className="w-full h-20 items-center sticky top-40">
        <Header className="w-full h-full" setShowSideBar={setShowSideBar} />
      </div>
      <div
        className={`flex w-full h-[calc(100vh-240px)] sticky top-60 pt-2 pb-8`}
      >
        {showSideBar && (
          <div className="w-1/4 min-w-60 h-full overflow-scroll max-md:hidden">
            <SideBar />
          </div>
        )}
        <div className="w-full h-full mx-2 overflow-scroll">
          <Main className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
