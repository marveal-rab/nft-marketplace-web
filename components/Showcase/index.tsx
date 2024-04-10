"use client";

import React, { useEffect } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/// internal imports
import "./styles.css";

interface ShowcaseItemProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Item[];
}

interface Item {
  title: string;
  floorPrice: number;
  totalVolume: number;
  image: string;
  href: string;
}

interface ShowcaseData {
  title: string;
  items: Item[];
  link?: string;
}

interface ArrowProps extends React.HTMLAttributes<HTMLDivElement> {
  hover: boolean;
  direction?: "prev" | "next";
}

interface SlideProps extends Item, React.HTMLAttributes<HTMLDivElement> {
  title: string;
  floorPrice: number;
  totalVolume: number;
  image: string;
  href: string;
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

const Slide: React.FC<SlideProps> = ({ ...props }) => {
  const { title, floorPrice, totalVolume, image } = props;
  return (
    <div className="max-w-[280px] max-h-[280px] ">
      <div className="relative rounded-xl h-full w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full" />
        <div className="absolute bottom-0 w-full bg-neutral-900 max-h-20">
          <p className="m-2 text-normal text-ellipsis whitespace-nowrap overflow-hidden">
            {title}
          </p>
          <div className="flex justify-between mx-3 mb-1 text-neutral-400/30">
            <div className="w-1/2">
              <p className="text-xs text-ellipsis whitespace-nowrap overflow-hidden">
                Floor Price
              </p>
              <p className="text-neutral-100 text-sm">{floorPrice} ETH</p>
            </div>
            <div className="w-1/2 text-right">
              <p className="text-xs text-ellipsis whitespace-nowrap overflow-hidden">
                Total Volume
              </p>
              <p className="text-neutral-100 text-sm">{totalVolume} ETH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShowcaseItem: React.FC<ShowcaseItemProps> = ({ items, ...props }) => {
  const [hover, setHover] = React.useState<boolean>(false);

  const settings: Settings = {
    infinite: false,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <Arrow hover={hover} direction="next" />,
    prevArrow: <Arrow hover={hover} direction="prev" />,
  };

  return (
    <div className="w-full">
      <div
        className="slider-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Slider {...settings}>
          {items.map((el, i) => {
            return <Slide key={i} {...el} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

const Showcase: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const data: ShowcaseData[] = [
    {
      title: "Noteable collections",
      items: [
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
      ],
    },
    {
      title: "Top Collectors Buys Today",
      items: [
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
      ],
    },
    {
      title: "Trending in Art",
      items: [
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
      ],
      link: "#",
    },
    {
      title: "Trending in Gaming",
      items: [
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
      ],
      link: "#",
    },
    {
      title: "Trending in Memberships",
      items: [
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
      ],
      link: "#",
    },
    {
      title: "Trending in Music",
      items: [
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
      ],
      link: "#",
    },
    {
      title: "Trending in PFPs",
      items: [
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
      ],
      link: "#",
    },
    {
      title: "Trending in Photography",
      items: [
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
        {
          title: "The best of the best",
          floorPrice: 0.1,
          totalVolume: 1000,
          image: "https://picsum.photos/200",
          href: "#",
        },
      ],
      link: "#",
    },
  ];

  return (
    <div className="w-full flex-row space-y-14 mt-12">
      {data.map((el, index) => (
        <div key={index} className="flex-row space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-extrabold">{el.title}</h2>
            {el.link && (
              <a
                href="el.link"
                className="px-5 py-2.5 bg-neutral-800/50 rounded-xl font-bold text-base text-neutral-50 no-underline hover:bg-neutral-600/50"
              >
                View category
              </a>
            )}
          </div>
          <ShowcaseItem items={el.items} />
        </div>
      ))}
    </div>
  );
};

export default Showcase;
