"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

interface LinkTab {
  name: string;
  title: string;
  href: string;
  type?: "link";
}

interface MenuTab {
  name: string;
  title: string;
  type: "menu";
  children: LinkTab[];
}

export type Tab = LinkTab | MenuTab;

interface LinkTabProps extends Props {
  tab: LinkTab;
}

interface MenuTabProps extends Props {
  tab: MenuTab;
  selectedTab: string;
}

const LinkTab: React.FC<LinkTabProps> = (props) => {
  const { tab } = props;
  return <Link href={`${tab.href}`}>{tab.title}</Link>;
};

const MenuTab: React.FC<MenuTabProps> = (props) => {
  const { tab, selectedTab } = props;
  const [open, setOpen] = React.useState(false);
  const selectRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      <span
        className="flex items-center gap-1"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        {tab.title} <IoIosArrowDown size={16} />
      </span>
      {open && (
        <div className="absolute rounded-xl w-48 top-14 -left-[50%] p-1 bg-neutral-900 text-neutral-400 z-20">
          {tab.children.map((el, index) => {
            return (
              <div
                key={index}
                className={`px-6 py-4 w-full rounded-xl cursor-pointer ${
                  selectedTab !== el.name
                    ? "hover:text-neutral-50 hover:bg-neutral-500/20"
                    : "text-neutral-200 cursor-not-allowed"
                }`}
              >
                <LinkTab tab={el} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

interface TabsProps extends Props {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { tabs } = props;
  const pathname = usePathname();
  const path = pathname.split("/");
  const selectedTab = path.length === 2 ? "collected" : path[2];

  function isSelectedTab(tab: Tab): boolean {
    if (selectedTab === tab.name) {
      return true;
    }
    if (tab.type === "menu" && tab.children) {
      return tab.children.some((child) => child.name === selectedTab);
    }
    return false;
  }

  return (
    <div className={props.className}>
      <div className="flex gap-4 h-20 mt-4 items-center text-base font-bold text-neutral-200 border-b-[1px] border-neutral-500/30">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`px-4 py-3 rounded-xl ${
              isSelectedTab(tab)
                ? "bg-neutral-700/30"
                : "text-neutral-500 hover:text-neutral-200 cursor-pointer"
            }`}
          >
            {tab.type === "link" && <LinkTab tab={tab} />}
            {tab.type === "menu" && (
              <MenuTab tab={tab} selectedTab={selectedTab} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
