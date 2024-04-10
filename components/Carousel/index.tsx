"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/// internal imports
import { Arrays } from "@/utils";
import "./styles.css";

interface CardItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {}

interface SlideProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CardItem[];
}

const Slide: React.FC<SlideProps> = ({ ...props }) => {
  const { items, className, onMouseEnter, onMouseLeave } = props;
  return (
    <div
      className={`flex gap-6 justify-between mx-2 ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.map((el, i) => {
        return (
          <div className="group relative max-w-[420px] max-h-[420px]" key={i}>
            <div className="rounded-xl overflow-hidden origin-center ">
              <img
                src={el.image}
                alt={el.title}
                className="w-full h-full group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="p-2 absolute bottom-0">
              <p className="text-base font-bold mb-2">{el.title}</p>
              <p className="text-sm">{el.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

interface ArrowProps extends React.HTMLAttributes<HTMLDivElement> {
  hover: boolean;
  direction?: "prev" | "next";
}

const Arrow: React.FC<ArrowProps> = ({
  hover: hoverContainer,
  direction,
  ...props
}) => {
  const { onClick, style, className } = props;
  const [hover, setHover] = React.useState<boolean>(false);

  const isPrev = direction === "prev";
  const isNext = direction === "next";

  return (
    <div
      className={`${className} rounded-lg`}
      style={{
        ...style,
        display: "flex",
        width: "40px",
        height: "100%",
        alignItems: "center",
        background: hover ? "#37415140" : "#37415100",
        color: hoverContainer || hover ? "#e5e7ebAA" : "#e5e7eb00",
        lineHeight: "40px",
        textAlign: "center",
        fontSize: "35px",
        cursor: "pointer",
        left: isPrev ? "-40px" : "auto",
        right: isNext ? "-40px" : "auto",
      }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {isPrev && <FaChevronLeft />}
      {isNext && <FaChevronRight />}
    </div>
  );
};

const Carousel: React.FC<CarouselProps> = ({ ...props }) => {
  const [hover, setHover] = React.useState<boolean>(false);
  const [cards, setCards] = React.useState<number>(4);
  const [time, setTime] = React.useState<number>(5000);

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

  return (
    <div className="w-full py-4">
      <div
        className="slider-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Slider
          infinite={true}
          speed={700}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={time}
          prevArrow={<Arrow hover={hover} direction="prev" />}
          nextArrow={<Arrow hover={hover} direction="next" />}
        >
          {Arrays.chunk(items, cards).map((el, i) => {
            return <Slide items={el} key={i} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
