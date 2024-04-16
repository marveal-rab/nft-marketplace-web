import { CheckBox } from "@/ui";
import { Datetimes } from "@/utils";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

export const SalesAfter: React.FC<Props> = ({ ...props }) => {
  const { className } = props;

  const [checked, setChecked] = React.useState<boolean>(false);
  const handleCheckboxChange = (value: string): void => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <div className={className}>
      <CheckBox
        isChecked={checked}
        onChange={handleCheckboxChange}
        label={"Outliers"}
        value={"Outliers"}
        className="px-3 py-2"
      ></CheckBox>
    </div>
  );
};

export const SalesChart: React.FC<Props> = ({ ...props }) => {
  const { className } = props;
  const priceData = [
    [1262304000000, 0.3151],
    [1262563200000, 0.2121],
    [1262649600000, 0.1468],
    [1262736000000, 0.1143],
    [1262822400000, 0.0981],
    [1262908800000, 0.0912],
    [1263168000000, 0.1284],
  ];
  const colleciton = "collection";
  const items = [
    {
      img: "https://via.placeholder.com/150",
      id: 1,
      rarity: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      id: 1,
      rarity: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      id: 1,
      rarity: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      id: 1,
      rarity: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      id: 1,
      rarity: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      id: 1,
      rarity: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      id: 1,
      rarity: 1,
    },
  ];

  const options: Highcharts.Options = {
    chart: {
      backgroundColor: "transparent",
    },
    title: {
      text: "",
    },
    xAxis: {
      type: "datetime",
      labels: {
        rotation: 0,
        formatter: function () {
          return `<div class="text-neutral-200">${Datetimes.format(
            this.value,
            "MMM D"
          )}</div>`;
        },
        useHTML: true,
      },
    },
    yAxis: [
      {
        title: {
          text: "Price (ETH)",
          style: {
            color: "#f5f5f5",
          },
        },
      },
    ],
    series: [
      {
        name: "Price",
        data: priceData,
        yAxis: 0,
        type: "scatter",
        showInLegend: false,
      },
    ],
    credits: {
      enabled: false,
    },
    plotOptions: { series: { animation: false } },
    tooltip: {
      formatter: function () {
        const index = this.point.index;
        const price = priceData[index][1];
        const datatime = Datetimes.format(
          this.x as number,
          "MMM D [at] HH:mm A"
        );
        const img = items[index].img;
        const title = `${colleciton} #${items[index].id}`;
        const rarityText = `Rarity #${items[index].rarity}`;

        return `<div class="flex px-2 py-1 gap-3 w-full items-center justify-center text-neutral-500 z-[1]"><img src="${img}" alt="${title}" class="w-16 h-16" /><div class="flex flex-col text-sm gap-0 w-44"><p class="text-lg font-bold text-neutral-200">${price} ETH</p><p>${title}</p><p>${rarityText}</p><p>${datatime}</p></div></div>`;
      },
      useHTML: true,
      backgroundColor: "#171717ef",
      borderRadius: 16,
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      className={className}
    />
  );
};

interface SalesItem {
  img: string;
  title: string;
  rarity: number;
  time: number;
  price: number;
  rate: number;
}

interface SalesItemProps extends SalesItem, Props {}

const SalesItem: React.FC<SalesItemProps> = ({ ...props }) => {
  const { img, title, rarity, time, price, rate, className } = props;

  const [hover, setHover] = React.useState<boolean>(false);

  return (
    <div className={className}>
      <div
        className="flex items-center justify-between px-3 py-1 rounded-xl hover:bg-gray-500/30 text-nowrap"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <div className="flex gap-4 items-center">
          <img src={img} alt={title} className="w-12 h-12 rounded-lg" />
          <div className="flex flex-col">
            <span className="text-base font-bold">{title}</span>
            <span className="text-xs text-gray-500">Rarity: #{rarity}</span>
            <span className="text-xs text-sky-500">{time}</span>
          </div>
        </div>
        {hover ? (
          <button className="px-3 py-2 bg-sky-500 text-neutral-200 rounded-xl font-bold">
            Buy now
          </button>
        ) : (
          <div className="flex flex-col gap-1 text-right">
            <span className="text-sm font-bold">{price} ETH</span>
            <span className="text-xs text-neutral-700">
              {rate > 0 && "+" + rate}% floor
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export const SalesList: React.FC<Props> = ({ ...props }) => {
  const items: SalesItem[] = [
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Item Title",
      rarity: 1,
      time: 1,
      price: 1,
      rate: 1,
    },
  ];
  const { className } = props;
  return (
    <div className={className}>
      <div className="w-full h-full overflow-scroll">
        {items.map((el, index) => {
          return <SalesItem key={index} {...el} />;
        })}
      </div>
    </div>
  );
};
