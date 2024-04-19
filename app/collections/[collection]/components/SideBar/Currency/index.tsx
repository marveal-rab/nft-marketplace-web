import React from "react";
import { Accordion, CheckBoxGroup, SearchInput } from "@/app/ui";

interface CurrencyProps extends React.HTMLAttributes<HTMLDivElement> {}

const Currency: React.FC<CurrencyProps> = ({ ...props }) => {
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

  const items = [
    {
      label: "ETH",
      value: "ETH",
    },
    {
      label: "WETH",
      value: "WETH",
    },
  ];

  const handleCheckBoxChange = (values: string[]) => {
    setSelectedValues(values);
  };

  return (
    <div className={props.className}>
      <Accordion title="Currency">
        <div className="m-2">
          <SearchInput placeholder="Search" px={3} py={2} />
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

export default Currency;
