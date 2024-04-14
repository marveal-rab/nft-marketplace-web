import React from "react";

interface MainProps extends Props {}

const Main: React.FC<MainProps> = ({ ...props }) => {
  const { className } = props;

  const items = [{}];

  return (
    <div className={className}>
      <div>
        <span>Offer price</span>
        <span>Total Volume</span>
        <span>Total offers</span>
        <span>Bidders</span>
      </div>
      <ul></ul>
    </div>
  );
};

export default Main;
