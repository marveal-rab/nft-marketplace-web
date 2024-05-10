import {
  Arbitrum,
  Avalanche,
  BNBChain,
  Base,
  Blast,
  Ethereum,
  Klaytn,
  Optimism,
  Polygon,
  Solana,
  Zora,
} from "@/app/components/Icon";
import Collection from "@/app/components/SideBar/collection";
import EventType from "@/app/components/SideBar/event-type";
import {
  Accordion,
  CheckBoxGroup,
  CheckBoxOption,
  SearchInput,
} from "@/app/ui";
import React from "react";

const Chains: React.FC<Props> = (props) => {
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

  const options: CheckBoxOption[] = [
    {
      label: "Abritrum",
      value: "abritrum",
      labelBefore: <Arbitrum />,
    },
    {
      label: "Avalanche",
      value: "avalanche",
      labelBefore: <Avalanche />,
    },
    {
      label: "BNB Chain",
      value: "bnb-chain",
      labelBefore: <BNBChain />,
    },
    {
      label: "Base",
      value: "base",
      labelBefore: <Base />,
    },
    {
      label: "Blast",
      value: "blast",
      labelBefore: <Blast />,
    },
    {
      label: "Ethereum",
      value: "ethereum",
      labelBefore: <Ethereum />,
    },
    {
      label: "Klaytn",
      value: "klaytn",
      labelBefore: <Klaytn />,
    },
    {
      label: "Optimism",
      value: "optimism",
      labelBefore: <Optimism />,
    },
    {
      label: "Polygon",
      value: "polygon",
      labelBefore: <Polygon />,
    },
    {
      label: "Solana",
      value: "solana",
      labelBefore: <Solana />,
    },
    {
      label: "Zora",
      value: "zora",
      labelBefore: <Zora />,
    },
  ];

  const handleCheckBoxChange = (values: string[]) => {
    setSelectedValues(values);
  };
  return (
    <div className={props.className}>
      <Accordion title="Chains">
        <div className="m-2"></div>
        <CheckBoxGroup
          options={options}
          selectedValues={selectedValues}
          onChange={handleCheckBoxChange}
          multiple
          className="my-2"
        />
      </Accordion>
    </div>
  );
};

const SideBar: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={`w-full h-full ${props.className}`}>
      <ul>
        <li>
          <EventType />
        </li>
        <li>
          <Collection />
        </li>
        <li>
          <Chains />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
