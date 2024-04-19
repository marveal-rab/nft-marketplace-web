import React from "react";
import { Accordion, Input } from "@/app/ui";

interface RartityRankProps extends React.HTMLAttributes<HTMLDivElement> {}

const RarityRank: React.FC<RartityRankProps> = ({ ...props }) => {
  return (
    <div className={props.className}>
      <Accordion title="Rarity Rank">
        <div className="flex flex-col gap-2 m-2">
          <div className="w-full flex items-center justify-around text-neutral-100 text-base">
            <Input className="w-20 h-10 py-2" placeholder="1" center />
            <span className="font-semibold text-lg">-</span>
            <Input className="w-20 h-10 py-2" placeholder="3,000" center />
          </div>
          <button className="h-10 w-full bg-sky-500 rounded-xl">Apply</button>
        </div>
      </Accordion>
    </div>
  );
};

export default RarityRank;
