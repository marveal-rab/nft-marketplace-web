import React from "react";

interface TraitSelectorProps extends Props {}

const TraitSelector: React.FC<TraitSelectorProps> = ({ ...props }) => {
  const [selected, setSelected] = React.useState<number>(0);

  const items = [
    {
      price: "0.112 WETH",
      volume: "10.845 WETH",
    },
    {
      label: "style",
      value: "custom",
      rate: "1.288%",
      price: "0.112 WETH",
      volume: "10.845 WETH",
    },
    {
      label: "style",
      value: "custom",
      rate: "1.288%",
      price: "0.112 WETH",
      volume: "10.845 WETH",
    },
    {
      label: "style",
      value: "custom",
      rate: "1.288%",
      price: "0.112 WETH",
      volume: "10.845 WETH",
    },
    {
      label: "style",
      value: "custom",
      rate: "1.288%",
      price: "0.112 WETH",
      volume: "10.845 WETH",
    },
  ];

  const { className } = props;
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {items.map((el, index) => {
        return (
          <div
            className={`flex justify-between items-center text-sm text-neutral-700 rounded-xl p-2 hover:bg-neutral-500/20 ${
              selected === index && "bg-neutral-500/20"
            }`}
            key={index}
            onClick={() => setSelected(index)}
          >
            <div className="flex flex-col gap-1">
              {el.label ? (
                <div>
                  <div className="text-xs">{el.label}</div>
                  <div className="flex gap-1">
                    <span className="text-neutral-200">{el.value}</span>
                    <span>{el.rate}</span>
                  </div>
                </div>
              ) : (
                <span>No Traits</span>
              )}
            </div>
            <div className="flex flex-col text-right">
              <span className="text-neutral-200">{el.price}</span>
              <span className="text-nowrap text-xs">Volume: {el.volume}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TraitSelector;
