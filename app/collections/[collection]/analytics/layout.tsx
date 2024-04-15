import React from "react";

export default function CollectionAnalyticsLayout({
  params,
  children,
}: {
  params: { collection: string };
  children: React.ReactNode;
}) {
  return <div className="w-full h-full">{children}</div>;
}
