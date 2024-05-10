"use client";

import { useSearchParams } from "next/navigation";
import Tabs, { Tab } from "./tabs";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuTags } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineCode } from "react-icons/md";
import Profile from "./profile";
import FeaturedItems from "./featured";
import Notifications from "./notifications";
import Offers from "./offers";
import Support from "./support";
import Developer from "./developer";

const tabs: Tab[] = [
  { icon: <VscAccount size={24} />, name: "profile", title: "Profile" },
  {
    icon: <MdOutlineFeaturedPlayList size={24} />,
    name: "featured",
    title: "Featured items",
  },
  {
    icon: <IoNotificationsOutline size={24} />,
    name: "notifications",
    title: "Notifications",
  },
  { icon: <LuTags size={24} />, name: "offers", title: "Offers" },
  {
    icon: <MdOutlineSecurity size={24} />,
    name: "support",
    title: "Account support",
  },
  { icon: <MdOutlineCode size={24} />, name: "developer", title: "Developer" },
];

export default function Page() {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "profile";

  return (
    <div className="w-full h-full flex divide-x-[1px] divide-gray-500/30">
      <Tabs
        className="w-[340px] px-4 mt-2"
        tabs={tabs}
        currentTab={currentTab}
      />
      <div className="w-full">
        {currentTab === "profile" && <Profile />}
        {currentTab === "featured" && <FeaturedItems />}
        {currentTab === "notifications" && <Notifications />}
        {currentTab === "offers" && <Offers />}
        {currentTab === "support" && <Support />}
        {currentTab === "developer" && <Developer />}
      </div>
    </div>
  );
}
