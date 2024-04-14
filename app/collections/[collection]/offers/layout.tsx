import React from "react";

export default function CollectionLayout({
  params,
  children,
}: {
  params: { collection: string };
  children: React.ReactNode;
}) {
  return <div className="">{children}</div>;
}
