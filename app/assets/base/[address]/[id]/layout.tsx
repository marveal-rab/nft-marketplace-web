import { NarBar } from "@/app/components";
import React from "react";

export default function BaseAssetsLayout({
  params,
  children,
}: {
  params: { address: string; id: number };
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-screen-2xl mx-auto px-16">
      <NarBar className="sticky top-0" />
      {children}
    </div>
  );
}
