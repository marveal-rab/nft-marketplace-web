"use client";

import React, { useState, useEffect } from "react";

const items = [
  {
    id: "1",
    image: "https://picsum.photos/300/300",
    title: "Card 1",
    description: "This is the first card in the carousel.",
  },
  {
    id: "2",
    image: "https://picsum.photos/300/300",
    title: "Card 2",
    description: "This is the second card in the carousel.",
  },
  {
    id: "3",
    image: "https://picsum.photos/300/300",
    title: "Card 3",
    description: "This is the third card in the carousel.",
  },
  {
    id: "4",
    image: "https://picsum.photos/300/300",
    title: "Card 4",
    description: "This is the fourth card in the carousel.",
  },
  {
    id: "5",
    image: "https://picsum.photos/300/300",
    title: "Card 5",
    description: "This is the fifth card in the carousel.",
  },
  {
    id: "6",
    image: "https://picsum.photos/300/300",
    title: "Card 6",
    description: "This is the sixth card in the carousel.",
  },
  {
    id: "7",
    image: "https://picsum.photos/300/300",
    title: "Card 7",
    description: "This is the seventh card in the carousel.",
  },
  {
    id: "8",
    image: "https://picsum.photos/300/300",
    title: "Card 8",
    description: "This is the eighth card in the carousel.",
  },
];

interface CardItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface CarouselProps {
  cards: number;
  time?: number;
}

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  cards: CardItem[];
}

const Slider: React.FC<SliderProps> = ({ ...props }) => {
  const { cards, className } = props;

  return (
    <div
      className={`flex space-x-3 w-screen h-auto object-cover items-center ${className}`}
    >
      {cards.map((el, i) => {
        return (
          <div
            className="flex-shrink-0 bg-transparent shadow-md rounded-lg overflow-hidden relative h-auto"
            key={i}
          >
            <img src={el.image} alt={el.title} className="" />
            <div className="p-2 absolute bottom-0">
              <p className="text-md font-bold mb-2">{el.title}</p>
              <p className="text-sm">{el.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Carousel: React.FC<CarouselProps> = ({ cards, time = 5000 }) => {
  const [curr, setCurr] = React.useState<number>(0);
  const [playlist, setPlaylist] = React.useState<CardItem[]>(
    items.slice(0, cards)
  );

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurr((preCurr) => {
  //       const currIdx = (preCurr + cards) % items.length;
  //       const endIdx = currIdx + cards * 2;
  //       const currPlaylist =
  //         endIdx >= items.length
  //           ? [
  //               ...items.slice(currIdx),
  //               ...items.slice(0, endIdx % items.length),
  //             ]
  //           : [...items.slice(currIdx, endIdx)];
  //       setPlaylist(currPlaylist);
  //       return currIdx;
  //     });
  //   }, time);
  //   return () => clearInterval(interval);
  // }, [items, cards, time]);

  return (
    <div className="overflow-hidden bg-gray-500/30">
      <div className={`flex flex-row w-full`}>
        <Slider cards={playlist.slice(0, cards)} className="" />
        {/* <Slider cards={playlist.slice(cards)} className="" /> */}
      </div>
    </div>
  );
};

export default Carousel;
