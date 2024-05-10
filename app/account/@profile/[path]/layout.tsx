import React from "react";

interface LayoutProps {
  // children: React.ReactNode;
  search: React.ReactNode;
  listings: React.ReactNode;
  offers: React.ReactNode;
  params: {
    path?: string;
  };
}

const allowedPaths = [
  "collected",
  "created",
  "private",
  "bids",
  "listings",
  "listings-inactive",
];
const showSearchPaths = [undefined, "collected", "created", "private"];
const showListingsPaths = ["listings", "listings-inactive"];
const showOffersPaths = ["bids"];

export default function AccountPathLayout(props: LayoutProps) {
  const path = props.params.path;
  const notFound =
    path !== undefined && !allowedPaths.includes(path.toLowerCase());
  if (notFound) {
    return null;
  }

  const showSearch = showSearchPaths.includes(path?.toLowerCase());
  const showListings = path && showListingsPaths.includes(path.toLowerCase());
  const showOffers = path && showOffersPaths.includes(path.toLowerCase());

  return (
    <div className="w-full h-full">
      {showSearch && props.search}
      {showListings && props.listings}
      {showOffers && props.offers}
    </div>
  );
}
