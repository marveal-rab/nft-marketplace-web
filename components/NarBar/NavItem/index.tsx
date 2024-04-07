"use client";

import React, { FC, HTMLAttributes, useState } from "react";

interface NavItemMetadata extends HTMLAttributes<HTMLElement> {
  title: string;
  href: string;
}

interface NavItemProps extends NavItemMetadata {
  classes?: string;
  popover?: NavItemMetadata[];
}

interface NavItemPopoverProps {
  classes?: string;
  subNav?: NavItemMetadata[];
}

const NavItem: FC<NavItemProps> = ({ ...props }) => {
  const { title, href, popover, classes } = props;
  const [isDropsBoxOpen, setIsDropsBoxOpen] = useState(false);

  return (
    <>
      <li
        className={`relative flex h-full items-center hover:text-gray-300 ${classes}`}
        onMouseEnter={() => {
          setIsDropsBoxOpen(true);
        }}
        onMouseLeave={() => {
          setIsDropsBoxOpen(false);
        }}
      >
        <a href={href} className="text-lg no-underline cursor-pointer">
          <span>{title}</span>
        </a>
        {popover && isDropsBoxOpen && (
          <NavItemPopover subNav={popover} classes="top-11 left-0" />
        )}
      </li>
    </>
  );
};

const NavItemPopover: FC<NavItemPopoverProps> = ({ ...props }) => {
  const { subNav, classes } = props;
  return (
    <div
      className={`absolute text-left items-center p-4 w-[200px] bg-gray-950 border-gray-800 space-y-2 rounded-lg ${classes}`}
    >
      {subNav &&
        subNav.map((item, i) => {
          return (
            <div className={"w-auto rounded-lg hover:bg-gray-700"} key={i}>
              <p className="text-md font-bold p-3">
                <a href={item.href}>{item.title}</a>
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default NavItem;
