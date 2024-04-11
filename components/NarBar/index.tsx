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

const NarBar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div className="flex justify-between h-20 text-center items-center w-full space-x-4">
      <div className="inline-flex shrink-0 divide-x space-x-4 divide-gray-700 items-center h-full">
        <div className="flex px-4 h-full">
          <Image
            src={"https://opensea.io/static/images/logos/opensea-logo.svg"}
            alt="OpenSea Logo"
            width={40}
            height={40}
          />
          <div className="h-full items-center content-center">
            <h1 className="text-lg ml-4 font-extrabold">Twin Capes</h1>
          </div>
        </div>
        <ul className="flex space-x-8 pl-8 items-center h-11">
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
      <div className="flex-grow w-auto min-w-[200px] max-w-[400px] max-xl:hidden">
        <SearchBox />
      </div>
      <div className="mr-4 shrink-0 h-full flex items-center">
        <NavProfile />
      </div>
    </div>
  );
};

export default NarBar;
