import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface MainProps extends Props {}
interface CardProps extends Props {
  title: string;
  children?: React.ReactNode;
}
interface StatProps extends Props {
  title: string;
  value: string;
  rate?: number;
}

const Card: React.FC<CardProps> = ({ ...props }) => {
  const { title, className, children } = props;

  return (
    <div className={className}>
      <div className="flex flex-col rounded-xl border-[1px] border-gray-500 w-full h-full p-8">
        <div className="h-14">{title}</div>
        {children}
      </div>
    </div>
  );
};

const VolumeAndPriceChart: React.FC<Props> = ({ ...props }) => {
  const xData = [
    "Apr 9 at 8 am",
    "Apr 10 at 8 am",
    "Apr 11 at 8 am",
    "Apr 12 at 8 am",
    "Apr 13 at 8 am",
    "Apr 14 at 8 am",
    "Apr 15 at 8 am",
  ];
  const volumeData = [1.2605, 0.8485, 2.4953, 0.9147, 0.2943, 0.1824, 0.6418];
  const avgPriceData = [0.3151, 0.2121, 0.1468, 0.1143, 0.0981, 0.0912, 0.1284];

  const options = {};

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

const FloorPriceChart: React.FC<Props> = ({ ...props }) => {
  return <div></div>;
};

const Stat: React.FC<StatProps> = ({ ...props }) => {
  const { title, value, rate, className } = props;

  return (
    <div className={className}>
      <div className="flex flex-col items-start gap-1 p-6 w-full h-full rounded-2xl border-[1px] border-gray-500">
        <div className="text-neutral-700 text-sm">{title}</div>
        <div className="text-neutral-200 font-bold text-xl">{value}</div>
        {rate && (
          <div
            className={`flex items-center gap-2 text-sm font-bold ${
              rate < 0 ? "text-red-500" : "text-green-500"
            }`}
          >
            {rate < 0 && <FaArrowDown size={14} className="opacity-30" />}
            {rate > 0 && <FaArrowUp size={14} className="opacity-30" />}
            {rate} %
          </div>
        )}
      </div>
    </div>
  );
};

const Main: React.FC<MainProps> = ({ ...props }) => {
  const { className } = props;

  return (
    <div className={className}>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 w-full h-32 mt-4">
          <Stat title="Volume" value="7.63 ETH" rate={-9} className="w-1/3" />
          <Stat title="Volume" value="7.63 ETH" rate={-9} className="w-1/3" />
          <Stat title="Volume" value="7.63 ETH" rate={-9} className="w-1/3" />
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <Card title="Volume and Price" className="h-80">
            <VolumeAndPriceChart />
          </Card>
          <Card title="Floor Price" className="h-80">
            <FloorPriceChart />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Main;
