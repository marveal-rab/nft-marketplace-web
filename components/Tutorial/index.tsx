import { Carousel } from "@/ui";
import React from "react";
import { Settings } from "react-slick";

/// internal imports
import "./styles.css";

interface TutorialItemProps
  extends TutorialData,
    React.HTMLAttributes<HTMLDivElement> {
  title: string;
  image: string;
  href: string;
}

interface TutorialData {
  title: string;
  image: string;
  href: string;
}

const TutorialItem: React.FC<TutorialItemProps> = ({ ...props }) => {
  const { title, image, href, className } = props;
  return (
    <div
      className={`group max-w-[280px] max-h-[280px] transition ease-in-out duration-300 hover:-translate-y-1 ${className}`}
    >
      <a href={href} className="no-underline">
        <div className="relative rounded-xl h-full w-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full" />
          <div className="absolute bottom-0 w-full bg-neutral-900 max-h-20 group-hover:bg-neutral-800">
            <p className="mx-2 mt-2 mb-6 text-normal text-ellipsis whitespace-nowrap overflow-hidden">
              {title}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

const Tutorial: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const items: TutorialData[] = [
    {
      title: "How to use Tailwind CSS",
      image: "https://via.placeholder.com/150",
      href: "#",
    },
    {
      title: "How to use React",
      image: "https://via.placeholder.com/150",
      href: "#",
    },
    {
      title: "How to use Next.js",
      image: "https://via.placeholder.com/150",
      href: "#",
    },
    {
      title: "How to use Vite",
      image: "https://via.placeholder.com/150",
      href: "#",
    },
    {
      title: "How to use TypeScript",
      image: "https://via.placeholder.com/150",
      href: "#",
    },
    {
      title: "How to use ESLint",
      image: "https://via.placeholder.com/150",
      href: "#",
    },
    {
      title: "How to use Prettier",
      image: "https://via.placeholder.com/150",
      href: "#",
    },
    {
      title: "How to use Jest",
      image: "https://via.placeholder.com/150",
      href: "#",
    },
    {
      title: "How to use React Testing Library",
      image: "https://via.placeholder.com/150",
      href: "#",
    },
    {
      title: "How to use Cypress",
      image: "https://via.placeholder.com/150",
      href: "#",
    },
  ];

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
  };

  return (
    <div className="w-full mt-8">
      <div className="flex-row space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-extrabold">Tutorial</h2>
          <a
            href={"#"}
            className="px-5 py-2.5 bg-neutral-800/50 rounded-xl font-bold text-base text-neutral-50 no-underline hover:bg-neutral-600/50"
          >
            Learn more
          </a>
        </div>
        <Carousel settings={settings}>
          {items.map((item, index) => (
            <TutorialItem key={index} {...item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Tutorial;
