"use client";

import React from "react";
import { ItemSummary } from "./ItemSummary";
import ItemMain from "./ItemMain";
import ItemActivity from "./ItemActivity";
import More from "./More";

export default function Page({
  params,
}: {
  params: { address: string; id: number };
}) {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex w-full gap-4">
          <ItemSummary className="w-2/5" />
          <ItemMain className="w-3/5" />
        </div>
        <ItemActivity className="w-full" />
        <More className="w-full" />
      </div>
    </div>
  );
}
