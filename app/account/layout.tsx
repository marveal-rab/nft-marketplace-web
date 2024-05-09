import React from "react";
import { NarBar } from "@/app/components";
import Tabs, { Tab } from "./components/tabs";
import Banner from "./components/banner";

const tabs: Tab[] = [
  {
    name: "collected",
    title: "Collected",
    href: `/account/collected`,
    type: "link",
  },
  {
    name: "offers",
    title: "Offers made",
    href: `/account/offers`,
    type: "link",
  },
  {
    name: "deals",
    title: "Deals",
    href: `/account/deals`,
    type: "link",
  },
  {
    name: "created",
    title: "Created",
    href: `/account/created`,
    type: "link",
  },
  {
    name: "favorites",
    title: "Favorites",
    href: `/account/favorites`,
    type: "link",
  },
  {
    name: "activity",
    title: "Activity",
    href: `/account/activity`,
    type: "link",
  },
  {
    name: "more",
    title: "More",
    type: "menu",
    children: [
      {
        name: "bids",
        title: "Offers received",
        href: "/account/bids",
        type: "link",
      },
      {
        name: "listings",
        title: "Active listings",
        href: "/account/listings",
        type: "link",
      },
      {
        name: "listings-inactive",
        title: "Inactive listings",
        href: "/account/listings-inactive",
        type: "link",
      },
      {
        name: "private",
        title: "Hidden",
        href: "/account/private",
        type: "link",
      },
    ],
  },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-16">
        <NarBar className="sticky top-0 z-10 bg-black" />
        <Banner />
        <div className="mx-2 h-screen">
          <Tabs className="sticky top-20" tabs={tabs} />
          {children}
        </div>
      </div>
    </div>
  );
}
