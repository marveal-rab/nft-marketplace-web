"use client";

import React from "react";
import { BsPersonCircle, BsFillMoonFill, BsBook } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BiChevronRight, BiHelpCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";

import { Switch } from "@/ui";
import { NFTMarketplaceContext } from "@/contexts/marketplace-provider";

interface NavAvatarIconProps extends Props {}
interface AvatarPopoverProps extends Props {
  nav: NavItem[][];
}
interface NavItem {
  icon: React.ReactNode;
  title: string;
  href: string;
  after: React.ReactNode;
}

export const AvatarPopover: React.FC<AvatarPopoverProps> = ({ ...props }) => {
  const { nav, className } = props;
  return (
    <div
      className={`absolute top-[75px] right-0 text-left items-center px-4 py-1 bg-neutral-900 rounded-lg divide-y divide-gray-500/30 z-max ${className}`}
    >
      {nav &&
        nav.map((el, i) => {
          return (
            <div key={i} className="py-2">
              {el.map((item, idx) => {
                return (
                  <div
                    className={"w-auto rounded-lg hover:bg-neutral-500/20"}
                    key={idx}
                  >
                    <div className="flex text-base font-bold px-3 py-4 justify-between">
                      <div className="flex items-center gap-5">
                        {item.icon}
                        <a href={item.href} className="">
                          {item.title}
                        </a>
                      </div>
                      <div className="flex justify-center w-[40px]">
                        {item.after && item.after}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

const Avatar: React.FC<NavAvatarIconProps> = ({ ...props }) => {
  const nav = [
    [
      {
        icon: <AiOutlineUser size={20} />,
        title: "Profile",
        href: "#",
        after: undefined,
      },
    ],
    [
      {
        icon: <FiSettings size={20} />,
        title: "Settings",
        href: "#",
        after: undefined,
      },
      {
        icon: <GrLanguage size={20} />,
        title: "Language",
        href: "#",
        after: (
          <div className="justify-self-center flex items-center text-gray-200/70 ">
            <div className="">en</div>
            <BiChevronRight size={24} className="font-bold" />
          </div>
        ),
      },
      {
        icon: <BsFillMoonFill size={20} />,
        title: "Night Mode",
        href: "#",
        after: <Switch className="justify-self-center" />,
      },
    ],
    [
      {
        icon: <BsBook size={20} />,
        title: "Learn",
        href: "#",
        after: undefined,
      },
      {
        icon: <BiHelpCircle size={20} />,
        title: "Help center",
        href: "#",
        after: undefined,
      },
    ],
  ];
  const { className } = props;
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  const { linkTo } = React.useContext(NFTMarketplaceContext);

  return (
    <div
      className={`relative h-full flex items-center px-3 xl:px-2 ${className}`}
      onMouseEnter={() => {
        setIsPopoverOpen(true);
      }}
      onMouseLeave={() => {
        setIsPopoverOpen(false);
      }}
      onClick={(e) => {
        linkTo("/account", e);
      }}
    >
      <div className="flex items-center rounded-lg bg-transparent xl:p-3 xl:bg-gray-200/10 xl:hover:bg-gray-200/5 cursor-pointer">
        <BsPersonCircle size={24} />
      </div>
      {isPopoverOpen && <AvatarPopover className="w-[260px]" nav={nav} />}
    </div>
  );
};

export default Avatar;
