import Link from "next/link";
import React from "react";

export interface Tab {
  icon: React.ReactNode;
  title: string;
  name: string;
}

interface TabsProps extends Props {
  tabs: Tab[];
  currentTab: string;
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { tabs, currentTab } = props;

  return (
    <div className={props.className}>
      <span className="text-neutral-500 text-sm font-bold">Settings</span>
      <div className="mt-6 flex flex-col gap-2">
        {tabs.map((tab, index) => (
          <Link
            key={index}
            className={`px-5 py-4 rounded-xl ${
              currentTab === tab.name
                ? "bg-neutral-900"
                : "hover:bg-neutral-900 hover:cursor-pointer"
            }`}
            href={`/account/settings?tab=${tab.name}`}
          >
            <span className="flex gap-4 text-lg font-semibold items-center">
              {tab.icon}
              {tab.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
