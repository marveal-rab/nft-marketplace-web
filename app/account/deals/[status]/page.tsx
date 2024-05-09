import React from "react";
import { Selector } from "@/app/ui";

const DealSelector: React.FC<Props> = (props) => {
  const items = [
    {
      title: "All deals",
    },
    {
      title: "Deals sent",
    },
    {
      title: "Deals received",
    },
  ];
  return <Selector items={items} />;
};

const SortedSelector: React.FC<Props> = (props) => {
  const items = [
    {
      title: "Most recent",
    },
    {
      title: "Expiring soon",
    },
  ];
  return <Selector items={items} />;
};

export default function Page({ params }: { params: { status: string } }) {
  const status = params.status;
  const showSortedSelector = !status || status === "active";

  return (
    <div className="w-full px-2">
      <div className="flex items-center justify-between my-8 mx-1">
        <span className="text-2xl font-bold">0 Deals</span>
        <div className="flex items-center gap-2">
          <DealSelector />
          {showSortedSelector && <SortedSelector />}
          <button className="bg-sky-500 rounded-lg px-4 py-3 font-semibold">
            Make a deal
          </button>
        </div>
      </div>
      <div className="w-full bg-neutral-900 h-60 flex items-center justify-center rounded-xl border-[1px] border-gray-500/30">
        <span>No deals to display</span>
      </div>
    </div>
  );
}
