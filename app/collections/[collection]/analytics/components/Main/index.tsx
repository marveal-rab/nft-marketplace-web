import React from "react";

import { Card, Selector } from "@/ui";
import Listings from "./Listings";
import { VolumeAndPriceChart } from "./VolumeAndPrice";
import { FloorPriceChart } from "./FloorPrice";
import { Stat } from "./Stats";
import { SalesAfter, SalesChart, SalesList } from "./Sales";

interface MainProps extends Props {}

const Main: React.FC<MainProps> = ({ ...props }) => {
  const { className } = props;

  return (
    <div className={className}>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 w-full h-32 mt-4">
          <Stat title="Volume" value="7.63 ETH" rate={-9} className="w-1/3" />
          <Stat title="Volume" value="7.63 ETH" rate={-9} className="w-1/3" />
          <Stat title="Volume" value="7.63 ETH" rate={-9} className="w-1/3" />
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <Card title="Volume and Price" className="h-80" mb={8}>
            <VolumeAndPriceChart />
          </Card>
          <Card title="Floor Price" className="h-80" mb={8}>
            <FloorPriceChart />
          </Card>
          <Card
            title="Listings"
            className="h-80"
            after={
              <Selector
                items={[
                  { title: "Price" },
                  { title: "Date" },
                  { title: "Rarity" },
                ]}
                className="w-28"
              />
            }
            mb={2}
          >
            <Listings className="w-full h-44" />
          </Card>
          <Card title="Sales" className="h-80" mb={4} after={<SalesAfter />}>
            <SalesChart />
          </Card>
          <Card title="Sales" className="h-80" mb={6}>
            <SalesList className="w-full h-[200px]" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Main;
