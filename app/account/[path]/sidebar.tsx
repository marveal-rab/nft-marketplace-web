import Currency from "@/app/components/SideBar/currency";
import Price from "@/app/components/SideBar/price";
import { Accordion, CheckBoxGroup, SearchInput } from "@/app/ui";
import React from "react";

const Collection: React.FC<Props> = (props) => {
  return (
    <div className={props.className}>
      <Accordion title="Collection">
        <div className="m-2">
          <SearchInput placeholder="Search" px={3} py={2} />
          <div className="flex justify-between text-xs text-neutral-500 mt-2 font-bold">
            <span>COLLECTION</span>
            <span>VALUE</span>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

const SideBar: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={`w-full h-full ${props.className}`}>
      <ul>
        <li>
          <Collection />
        </li>
        <li>
          <Price />
        </li>
        <li>
          <Currency />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
