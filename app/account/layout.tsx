import React from "react";
import { NarBar } from "@/app/components";
import Tabs, { Tab } from "./@profile/components/tabs";
import Banner from "./@profile/components/banner";
import { usePathname } from "next/navigation";
import Pathname from "./pathname";

export default function AccountLayout({
  profile,
  settings,
}: {
  profile: React.ReactNode;
  settings: React.ReactNode;
}) {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-16">
        <NarBar className="sticky top-0 z-10 bg-black" />
        <Pathname profile={profile} settings={settings} />
      </div>
    </div>
  );
}
