import { Accordion } from "@/ui";
import React from "react";

interface EventTypeProps extends Props {}

interface EventTypeItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

const EventTypeItem: React.FC<EventTypeItemProps> = ({ ...props }) => {
  const { title, className } = props;

  return (
    <div className={className}>
      <div className="p-2">
        <span>{title}</span>
      </div>
    </div>
  );
};

const EventType: React.FC<EventTypeProps> = ({ ...props }) => {
  const { className } = props;
  const [selectedStatus, setSelectedStatus] = React.useState<number>(0);
  const statusItems = [
    { title: "All" },
    { title: "Sales" },
    { title: "Listings" },
    { title: "Offers" },
    { title: "Collection offers" },
    { title: "Transfer" },
  ];
  return (
    <div className={className}>
      <Accordion title="Event Type">
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
                <EventTypeItem {...el} />
              </li>
            );
          })}
        </ul>
      </Accordion>
    </div>
  );
};

export default EventType;
