import React from "react";

export default function StudioMintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-16">{children}</div>
    </div>
  );
}
