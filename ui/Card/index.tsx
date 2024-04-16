import React from "react";

export interface CardProps extends Props {
  title: string;
  after?: React.ReactNode;
  children?: React.ReactNode;
  mb?: number;
}

export const Card: React.FC<CardProps> = ({ ...props }) => {
  const { title, className, children, after, mb } = props;

  return (
    <div className={className}>
      <div className="flex flex-col rounded-xl border-[1px] border-gray-500 w-full h-full p-8">
        <div className={`flex justify-between ${mb && "mb-" + mb}`}>
          <span>{title}</span>
          {after && after}
        </div>
        {children}
      </div>
    </div>
  );
};
