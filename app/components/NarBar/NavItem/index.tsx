"use client";

import React from "react";
import { NFTMarketplaceContext } from "@/contexts";

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
  const { linkTo } = React.useContext(NFTMarketplaceContext);

  return (
    <>
      <div
        className={`relative flex h-full items-center hover:text-gray-300 ${classes}`}
        onMouseEnter={() => {
          setIsDropsBoxOpen(true);
        }}
        onMouseLeave={() => {
          setIsDropsBoxOpen(false);
        }}
        onClick={(e) => {
          linkTo(href, e);
        }}
      >
        <span className="text-base font-extrabold no-underline cursor-pointer">
          {title}
        </span>
        {popover && isDropsBoxOpen && (
          <NavItemPopover subNav={popover} className="top-11 left-0" />
        )}
      </div>
    </>
  );
};

const NavItemPopover: React.FC<NavItemPopoverProps> = ({ ...props }) => {
  const { subNav, className } = props;

  const { linkTo } = React.useContext(NFTMarketplaceContext);

  return (
    <div
      className={`absolute text-left items-center p-4 w-[200px] bg-neutral-900 border-gray-800 space-y-2 rounded-lg z-max ${className}`}
    >
      {subNav &&
        subNav.map((el, index) => {
          return (
            <div
              className={
                "w-auto rounded-lg hover:bg-neutral-500/20 cursor-pointer"
              }
              key={index}
              onClick={(e) => {
                linkTo(el.href, e);
              }}
            >
              <p className="text-base font-bold p-3">{el.title}</p>
            </div>
          );
        })}
    </div>
  );
};

export default NavItem;
