import React from "react";
import { MdMoreHoriz } from "react-icons/md";

interface BlockchainsProps extends Props {
  defaultBlockchain: number;
  setBlockchain: (blockchain: number) => void;
}

const Blockchains: React.FC<BlockchainsProps> = (props) => {
  const { defaultBlockchain, setBlockchain } = props;
  const [selected, setSelected] = React.useState(defaultBlockchain);

  const items = [
    {
      id: 0,
      name: "Ethereum",
      icon: "/static/images/icons/ethereum.svg",
      description: "Most popular",
      cost: "US$13.25",
    },
    {
      id: 1,
      name: "Polygon",
      icon: "/static/images/icons/polygon.svg",
      description: "Cheaper",
      cost: "US$0.03",
    },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number
  ) => {
    setSelected(id);
    setBlockchain(id);
  };

  return (
    <div className="flex items-center gap-4 h-[250px]">
      {items.map((item) => (
        <div
          key={item.id}
          className={`h-full border-[1px] border-gray-500/30 w-1/3 px-4 py-6 rounded-xl ${
            selected === item.id && "border-[2px] border-neutral-500"
          }`}
          onClick={(e) => handleClick(e, item.id)}
        >
          <img
            src={item.icon}
            alt={item.name}
            className="w-8 h-8 rounded-full mb-6"
          />
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-lg">{item.name}</span>
            <div className="flex">
              <span className="p-1 border-[1px] border-gray-500/30 rounded-lg bg-neutral-800 text-xs font-semibold">
                {item.description}
              </span>
            </div>
            <span className="text-sm text-neutral-500">
              Estimated cost to deploy contract: {item.cost}
            </span>
          </div>
        </div>
      ))}
      <div className="h-full border-[1px] border-gray-500/30 w-1/3 px-4 py-6 rounded-xl">
        <div className="flex items-center justify-center w-8 h-8 rounded-full mb-6 bg-neutral-800">
          <MdMoreHoriz size={20} />
        </div>
        <span className="font-semibold">See more options</span>
      </div>
    </div>
  );
};

export default Blockchains;
