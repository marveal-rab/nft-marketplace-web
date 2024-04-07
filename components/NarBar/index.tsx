"use client";

import React from "react";
import Image from "next/image";

// internal imports
import NavItem from "./NavItem";
import SearchBox from "./SearchBox";
import NavProfile from "./NavProfile";

const nav = [
  {
    title: "Drops",
    href: "#",
    subNav: [
      { title: "Featured", href: "#" },
      { title: "Learn more", href: "#" },
    ],
  },
  {
    title: "Stats",
    href: "#",
    subNav: [
      { title: "Rankings", href: "#" },
      { title: "Activity", href: "#" },
    ],
  },
  { title: "Create", href: "#" },
];

const NarBar = () => {
  return (
    <div className="flex justify-between h-20 mx-16 text-center items-center bg-gray-500 bg-opacity-30">
      <div className="inline-flex divide-x space-x-4 divide-gray-700 items-center h-full">
        <div className="flex px-4 h-full">
          <Image
            src={"https://opensea.io/static/images/logos/opensea-logo.svg"}
            alt="OpenSea Logo"
            width={40}
            height={40}
          />
          <div className="h-full items-center content-center">
            <span className="text-xl ml-4">Twin Capes</span>
          </div>
        </div>
        <ul className="flex space-x-10 pl-8 items-center h-11">
          {nav.map((item, i) => {
            return (
              <NavItem
                key={i}
                title={item.title}
                href={item.href}
                popover={item.subNav}
              />
            );
          })}
        </ul>
      </div>
      <div className="w-[100%] max-w-[400px] min-w-[300px]">
        <SearchBox />
      </div>
      <div className="mr-4">
        <NavProfile />
      </div>
    </div>
  );
};

export default NarBar;
