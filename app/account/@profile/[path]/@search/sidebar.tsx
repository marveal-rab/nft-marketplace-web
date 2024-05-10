import Collection from "@/app/components/SideBar/collection";
import Currency from "@/app/components/SideBar/currency";
import Price from "@/app/components/SideBar/price";
import { Accordion, CheckBoxGroup, SearchInput } from "@/app/ui";
import React from "react";

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

const HiddenStatus: React.FC<Props> = ({ ...props }) => {
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

  const items = [
    {
      label: "Hidden by you",
      value: "self",
    },
    {
      label: "Auto-hidden",
      value: "auto",
    },
  ];

  const handleCheckBoxChange = (values: string[]) => {
    setSelectedValues(values);
  };

  return (
    <div className={props.className}>
      <Accordion title="Hidden Status">
        <div className="m-2">
          <CheckBoxGroup
            options={items}
            selectedValues={selectedValues}
            onChange={handleCheckBoxChange}
            multiple
            className="my-2"
          />
        </div>
      </Accordion>
    </div>
  );
};

const PrivateSideBar: React.FC<Props> = (props) => {
  return (
    <div className={`w-full h-full ${props.className}`}>
      <ul>
        <li>
          <HiddenStatus />
        </li>
        <li>
          <Collection />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
export { PrivateSideBar };
