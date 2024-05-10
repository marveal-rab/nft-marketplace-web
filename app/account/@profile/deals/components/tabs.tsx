"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface LinkTab {
  name: string;
  title: string;
  href: string;
}

export type Tab = LinkTab;

interface LinkTabProps extends Props {
  tab: LinkTab;
}

const LinkTab: React.FC<LinkTabProps> = (props) => {
  const { tab } = props;
  return <Link href={`${tab.href}`}>{tab.title}</Link>;
};

interface TabsProps extends Props {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { tabs } = props;

  const pathname = usePathname();
  const path = pathname.replace("/account/deals", "");
  const selectedTab = !path || path === "" ? "active" : path.replace("/", "");

  function isSelectedTab(tab: Tab): boolean {
    if (selectedTab === tab.name) {
      return true;
    }
    return false;
  }

  return (
    <div className={props.className}>
      <div className="flex flex-col gap-2 h-20 mt-4 text-base font-bold text-neutral-200 border-neutral-500/30">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`px-4 py-3 rounded-xl ${
              isSelectedTab(tab)
                ? "bg-neutral-700/30"
                : "text-neutral-500 hover:text-neutral-200 cursor-pointer"
            }`}
          >
            <LinkTab tab={tab} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
