import React from "react";
import ItemMain from "./ItemMain";
import More from "./more";
import { ItemSummary } from "./item-summary";
import ItemActivity from "./item-activity";

export default async function Page({
  params,
}: {
  params: { chain: string; address: string; id: number };
}) {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-4 mb-8 mt-4">
        <div className="flex w-full gap-6">
          <ItemSummary className="w-2/5" />
          <ItemMain className="w-3/5" />
        </div>
        <ItemActivity className="w-full" />
        <More className="w-full" />
      </div>
    </div>
  );
}
