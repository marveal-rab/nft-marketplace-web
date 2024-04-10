"use client";

import React from "react";

const categories = [
  {
    name: "All",
    href: "#",
  },
  {
    name: "Art",
    href: "#",
  },
  {
    name: "Gaming",
    href: "#",
  },
  {
    name: "Memberships",
    href: "#",
  },
  {
    name: "PFPs",
    href: "#",
  },
  {
    name: "Photography",
    href: "#",
  },
  {
    name: "Music",
    href: "#",
  },
];

const Category = () => {
  const [select, setSelect] = React.useState<number>(0);

  const clickCategory = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    i: number
  ) => {
    setSelect(i);
    window.location.href = categories[i].href;
  };

  return (
    <div className="flex w-auto h-[80px]">
      <div className="flex items-center ml-4 font-bold space-x-2 text-base">
        {categories &&
          categories.map((el, i) => {
            return (
              <div
                key={i}
                className={`px-4 py-2 rounded-lg hover:bg-gray-400/20 ${
                  select === i && "bg-gray-400/20"
                }`}
                onClick={(event) => {
                  clickCategory(event, i);
                }}
              >
                <span>{el.name}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Category;
