"use client";

import React from "react";
import { Settings } from "react-slick";

/// internal imports
import { Carousel } from "@/ui";

interface CardItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface SwiperProps extends React.HTMLAttributes<HTMLDivElement> {}

interface SlideProps extends CardItem, React.HTMLAttributes<HTMLDivElement> {
  id: string;
  image: string;
  title: string;
  description: string;
}

const Slide: React.FC<SlideProps> = ({ ...props }) => {
  const { id, image, title, description, className } = props;
  return (
    <div className={`group relative max-w-[420px] max-h-[420px] ${className}`}>
      <div className="rounded-xl overflow-hidden origin-center ">
        <img
          src={image}
          alt={title}
          className="w-full h-full group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="p-2 absolute bottom-0">
        <p className="text-base font-bold mb-2">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

const Swiper: React.FC<SwiperProps> = ({ ...props }) => {
  const items: CardItem[] = [
    {
      id: "1",
      image: "https://picsum.photos/900/900",
      title: "Card 1",
      description: "This is the first card in the carousel.",
    },
    {
      id: "2",
      image: "https://picsum.photos/900/900",
      title: "Card 2",
      description: "This is the second card in the carousel.",
    },
    {
      id: "3",
      image: "https://picsum.photos/900/900",
      title: "Card 3",
      description: "This is the third card in the carousel.",
    },
    {
      id: "4",
      image: "https://picsum.photos/900/900",
      title: "Card 4",
      description: "This is the fourth card in the carousel.",
    },
    {
      id: "5",
      image: "https://picsum.photos/900/900",
      title: "Card 5",
      description: "This is the fifth card in the carousel.",
    },
    {
      id: "6",
      image: "https://picsum.photos/900/900",
      title: "Card 6",
      description: "This is the sixth card in the carousel.",
    },
    {
      id: "7",
      image: "https://picsum.photos/900/900",
      title: "Card 7",
      description: "This is the seventh card in the carousel.",
    },
    {
      id: "8",
      image: "https://picsum.photos/900/900",
      title: "Card 8",
      description: "This is the eighth card in the carousel.",
    },
  ];

  const settings: Settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Carousel settings={settings} className="py-4">
        {items.map((el, i) => {
          return <Slide {...el} key={i} />;
        })}
      </Carousel>
    </div>
  );
};

export default Swiper;
