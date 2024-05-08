import React from "react";
import { Accordion, Input, Selector, SelectorItem } from "@/ui";

interface PriceProps extends React.HTMLAttributes<HTMLDivElement> {}

const Price: React.FC<PriceProps> = ({ ...props }) => {
  const items: SelectorItem[] = [
    { title: "USD" },
    { title: "ETH" },
    { title: "SOL" },
  ];
  return (
    <div className={props.className}>
      <Accordion title="Price">
        <div className="flex flex-col gap-2 m-2">
          <Selector items={items} />
          <div className="w-full flex items-center justify-around text-neutral-100 text-base">
            <Input className="w-20 h-10 py-2" placeholder="Min" center />
            <span className="font-semibold text-lg">to</span>
            <Input className="w-20 h-10 py-2" placeholder="Max" center />
          </div>
          <button className="h-10 w-full bg-sky-500 rounded-xl">Apply</button>
        </div>
      </Accordion>
    </div>
  );
};

export default Price;
