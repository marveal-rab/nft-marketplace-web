import React from "react";
import { Accordion, Switch } from "@/ui";
import { BiSolidDonateHeart } from "react-icons/bi";

const CreatorEarnings: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div className={props.className}>
      <Accordion title="Creator earnings">
        <div className="flex gap-2 m-2">
          <div className="text-red-500">
            <BiSolidDonateHeart size={24} />
          </div>
          <div>
            <div className="text-nowrap">Support creators</div>
            <div className="text-sm text-neutral-600">
              Show listings which pay the creator their requested earnings of
              5%.
            </div>
          </div>
          <div>
            <Switch />
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default CreatorEarnings;
