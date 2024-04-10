"use client";

import React from "react";

interface NavItemMetadata extends React.HTMLAttributes<HTMLElement> {
  title: string;
  href: string;
}

interface NavItemProps extends NavItemMetadata {
  classes?: string;
  popover?: NavItemMetadata[];
}

interface NavItemPopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  subNav?: NavItemMetadata[];
}

const NavItem: React.FC<NavItemProps> = ({ ...props }) => {
  const { title, href, popover, classes } = props;
  const [isDropsBoxOpen, setIsDropsBoxOpen] = React.useState(false);

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
        <a
          href={href}
          className="text-base font-extrabold no-underline cursor-pointer"
        >
          <h2>{title}</h2>
        </a>
        {popover && isDropsBoxOpen && (
          <NavItemPopover subNav={popover} className="top-11 left-0" />
        )}
      </li>
    </>
  );
};

const NavItemPopover: React.FC<NavItemPopoverProps> = ({ ...props }) => {
  const { subNav, className } = props;
  return (
    <div
      className={`absolute text-left items-center p-4 w-[200px] bg-gray-950 border-gray-800 space-y-2 rounded-lg z-max ${className}`}
    >
      {subNav &&
        subNav.map((item, i) => {
          return (
            <div className={"w-auto rounded-lg hover:bg-gray-700"} key={i}>
              <p className="text-base font-bold p-3">
                <a href={item.href}>{item.title}</a>
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default NavItem;
