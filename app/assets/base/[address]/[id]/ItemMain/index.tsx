import React from "react";
import ItemFrame from "./ItemFrame";
import ItemPriceHistory from "./ItemPriceHistory";
import ItemListings from "./ItemListings";
import ItemOffers from "./ItemOffers";

interface ItemMainProps extends Props {}

const ItemMain: React.FC<ItemMainProps> = (props) => {
  const { className } = props;
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <ItemFrame className="w-full" />
      <ItemPriceHistory />
      <ItemListings />
      <ItemOffers />
    </div>
  );
};

export default ItemMain;
