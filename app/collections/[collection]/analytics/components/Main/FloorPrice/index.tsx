import React from "react";
import { Datetimes } from "@/utils";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const FloorPriceChart: React.FC<Props> = ({ ...props }) => {
  const { className } = props;
  const floorPriceData = [
    [1262304000000, 1.2605],
    [1262563200000, 0.8485],
    [1262649600000, 2.4953],
    [1262736000000, 0.9147],
    [1262822400000, 0.2943],
    [1262908800000, 0.1824],
    [1263168000000, 0.6418],
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
      crosshair: false,
    },
    yAxis: [
      {
        title: {
          text: "Floor Price (ETH)",
          style: {
            color: "#f5f5f5",
          },
        },
        opposite: true,
        crosshair: false,
        gridLineColor: "#171717",
      },
    ],
    series: [
      {
        name: "Floor Price",
        data: floorPriceData,
        yAxis: 0,
        type: "line",
        showInLegend: false,
        marker: {
          enabled: false,
        },
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#a855f7"],
            [1, "#ec4899"],
          ],
        },
      },
    ],
    credits: {
      enabled: false,
    },
    plotOptions: { series: { animation: false } },
    tooltip: {
      formatter: function () {
        const index = this.point.index;
        const floorPrice = floorPriceData[index][1];
        const datatime = Datetimes.format(
          this.x as number,
          "MMM D [at] HH:mm A"
        );
        return `<div class="flex px-2 py-1 gap-1 flex-col justify-center text-center text-neutral-500"><p class="text-lg font-bold text-neutral-200">${floorPrice} ETH</p><p>${datatime}</p></div>`;
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
