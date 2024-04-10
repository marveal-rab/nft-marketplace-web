"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/// internal imports
import "./styles.css";

export interface ArrowProps extends React.HTMLAttributes<HTMLDivElement> {
  hover: boolean;
  direction?: "prev" | "next";
}

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  settings: Settings;
}

export const Arrow: React.FC<ArrowProps> = ({
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

export const Carousel: React.FC<CarouselProps> = ({ ...props }) => {
  const { settings, children, className } = props;
  const [hover, setHover] = React.useState<boolean>(false);
  settings.prevArrow = <Arrow hover={hover} direction="prev" />;
  settings.nextArrow = <Arrow hover={hover} direction="next" />;
  return (
    <div className={`w-full ${className}`}>
      <div
        className="slider-container items-center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
};
