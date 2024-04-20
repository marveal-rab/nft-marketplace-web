import React from "react";
import { NarBar } from "@/app/components";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-16">
        <NarBar className="sticky top-0" />
        {children}
      </div>
    </div>
  );
}
