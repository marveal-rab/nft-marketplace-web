"use client";

import { Accordion } from "@/app/ui";
import React from "react";

interface StatusItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  before?: false | true;
}

const StatusItem: React.FC<StatusItemProps> = ({
  ...props
}: StatusItemProps) => {
  const { title, before, className } = props;

  return (
    <div className={className}>
      <div className="p-2">
        <div className="flex items-center w-full h-full space-x-2">
          {before && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

const Status: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const [selectedStatus, setSelectedStatus] = React.useState<number>(0);
  const statusItems = [
    { title: "All" },
    { title: "Listed", before: true },
    { title: "On auction" },
    { title: "New" },
    { title: "Has offers" },
  ];
  return (
    <div className={props.className}>
      <Accordion title="Status">
        <ul className="flex flex-wrap gap-2 m-2 text-neutral-400 font-bold">
          {statusItems.map((el, index) => {
            return (
              <li
                key={index}
                className={`p-1 rounded-xl ${
                  selectedStatus === index
                    ? "bg-neutral-50 text-neutral-900"
                    : "hover:bg-neutral-900 hover:text-neutral-200 bg-neutral-900/50"
                }`}
                onClick={() => setSelectedStatus(index)}
              >
                <StatusItem {...el} />
              </li>
            );
          })}
        </ul>
      </Accordion>
    </div>
  );
};

export default Status;
