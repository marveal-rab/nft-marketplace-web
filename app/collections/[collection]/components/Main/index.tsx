import React from "react";
import Grid from "./Grid";

const Main: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const items: ItemData[] = [
    {
      id: "1",
      title: "hello world",
      image: "https://via.placeholder.com/150",
      price: "0.1",
      currency: "ETH",
      lastSale: "0.2 ETH",
    },
    {
      id: "2",
      title: "hello world",
      image: "https://via.placeholder.com/150",
      price: "0.1",
      currency: "ETH",
      lastSale: "0.2 ETH",
    },
    {
      id: "3",
      title: "hello world",
      image: "https://via.placeholder.com/150",
      price: "0.1",
      currency: "ETH",
      lastSale: "0.2 ETH",
    },
    {
      id: "4",
      title: "hello world",
      image: "https://via.placeholder.com/150",
      price: "0.1",
      currency: "ETH",
      lastSale: "0.2 ETH",
    },
    {
      id: "5",
      title: "hello world",
      image: "https://via.placeholder.com/150",
      price: "0.1",
      currency: "ETH",
      lastSale: "0.2 ETH",
    },
    {
      id: "6",
      title: "hello world",
      image: "https://via.placeholder.com/150",
      price: "0.1",
      currency: "ETH",
      lastSale: "0.2 ETH",
    },
    {
      id: "7",
      title: "hello world",
      image: "https://via.placeholder.com/150",
      price: "0.1",
      currency: "ETH",
      lastSale: "0.2 ETH",
    },
    {
      id: "8",
      title: "hello world",
      image: "https://via.placeholder.com/150",
      price: "0.1",
      currency: "ETH",
      lastSale: "0.2 ETH",
    },
    {
      id: "9",
      title: "hello world",
      image: "https://via.placeholder.com/150",
      price: "0.1",
      currency: "ETH",
      lastSale: "0.2 ETH",
    },
    {
      id: "10",
      title: "hello world",
      image: "https://via.placeholder.com/150",
      price: "0.1",
      currency: "ETH",
      lastSale: "0.2 ETH",
    },
  ];
  return (
    <div className={props.className}>
      <Grid items={items} />
    </div>
  );
};

export default Main;
