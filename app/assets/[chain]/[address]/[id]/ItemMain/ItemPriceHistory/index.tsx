import VolumeAndPriceChart from "@/app/components/Chart/volume-and-price";
import { Accordion } from "@/app/ui";
import React from "react";
import { IoMdTrendingUp } from "react-icons/io";

interface ItemPriceHistoryProps extends Props {}

const ItemPriceHistory: React.FC<ItemPriceHistoryProps> = ({ ...props }) => {
  const { className } = props;
  return (
    <div className={className}>
      <Accordion
        title="Price History"
        className="bg-neutral-900 rounded-lg"
        icon={<IoMdTrendingUp size={20} />}
        open={true}
        type="primary"
      >
        <div className="mt-4 w-full">
          <VolumeAndPriceChart height={240} />
        </div>
      </Accordion>
    </div>
  );
};

export default ItemPriceHistory;
