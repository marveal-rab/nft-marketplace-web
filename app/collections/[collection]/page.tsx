"use client";

import React from "react";
import { FaListUl } from "react-icons/fa";
import { BsFillGridFill, BsSearch } from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";
import { MdOutlineGridOn } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { Accordion } from "@/ui";

const FilterIcon: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div>
      <div className="p-4 bg-neutral-700/30 rounded-xl">
        <IoFilterSharp size={20} />
      </div>
    </div>
  );
};

const TotalItemsShow: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div>
      <div className="flex lg:space-x-2 max-lg:flex-col max-lg:space-y-1 text-center max-md:hidden">
        <div className="flex items-center w-full space-x-2 pl-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span>Live</span>
        </div>
        <span className="text-neutral-400 text-nowrap">3,000 results</span>
      </div>
    </div>
  );
};

const SearchBox: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { className } = props;
  const [searchText, setSearchText] = React.useState("");
  return (
    <div className={className}>
      <form className="">
        <div className="relative w-full mx-auto">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-300">
            <BsSearch />
          </div>
          <input
            type="search"
            className="block bg-opacity-30 w-full px-4 py-3 ps-10 text-base text-gray-100 border-gray-500 outline-none border-[1px] rounded-xl bg-gray-900 focus:outline-none"
            placeholder="Search by name or traits"
            required
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

const ListStyleIconGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const [selected, setSelected] = React.useState(1);
  const icons = [
    {
      icon: <FaListUl size={20} />,
    },
    {
      icon: <BsFillGridFill size={20} />,
    },
    {
      icon: <MdOutlineGridOn size={20} />,
    },
  ];
  return (
    <div>
      <ul className="flex relative border-gray-700 items-center text-center border-[1px] rounded-xl text-neutral-600 h-12">
        <div
          className={`absolute bg-neutral-700/30 w-12 h-12 rounded-xl transition duration-200 ease-linear translate-x-[${
            selected * 100
          }%]`}
        ></div>
        {icons.map((el, index) => {
          return (
            <li
              key={index}
              className={`rounded-xl z-10 w-12 h-full hover:text-neutral-200 ${
                selected === index && "text-neutral-200"
              }`}
              onClick={() => setSelected(index)}
            >
              <div className="flex items-center w-full h-full justify-center">
                {el.icon}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const SortedSelector: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { className } = props;
  const [selected, setSelected] = React.useState<number>(0);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const selectRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const items = [
    { title: "Price low to high" },
    { title: "Price high to low" },
  ];
  return (
    <div className={className}>
      <div className="p-4 bg-neutral-700/30 rounded-xl lg:hidden">
        <FaSort size={20} />
      </div>
      <div className="relative w-56 max-lg:hidden" ref={selectRef}>
        <div
          className="flex items-center justify-between rounded-xl w-full border-gray-500 border-[1px] px-4 py-3"
          onClick={(event) => {
            setIsOpen((prevIsOpen) => !prevIsOpen);
          }}
        >
          <span className="">{items[selected].title}</span>
          <span>
            <FaAngleDown size={20} className="ml-auto" />
          </span>
        </div>
        {isOpen && (
          <ul className="absolute rounded-xl w-full top-14 p-1 bg-neutral-900 text-neutral-400">
            {items.map((el, index) => {
              return (
                <li
                  key={index}
                  className={`px-6 py-4 w-full z-10 rounded-xl ${
                    selected !== index
                      ? "hover:text-neutral-50 hover:bg-neutral-500/20"
                      : "text-neutral-200"
                  }`}
                  onClick={() => setSelected(index)}
                >
                  {el.title}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

interface StatusItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  before?: false | true;
}

const StatusItem: React.FC<StatusItemProps> = ({
  ...props
}: StatusItemProps) => {
  const { title, before, className } = props;

  return (
    <div className={className}>
      <div className="p-2">
        <div className="flex items-center w-full h-full space-x-2">
          {before && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

const SideBar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const [selectedStatus, setSelectedStatus] = React.useState<number>(0);
  const statusItems = [
    { title: "All" },
    { title: "Listed", before: true },
    { title: "On auction" },
    { title: "New" },
    { title: "Has offers" },
  ];

  return (
    <div className={`w-full h-full overflow-scroll ${props.className}`}>
      <ul>
        <li>
          <Accordion title="Status">
            <ul className="flex flex-wrap gap-2 m-2 text-neutral-400 font-bold">
              {statusItems.map((el, index) => {
                return (
                  <li
                    key={index}
                    className={`p-1 rounded-xl ${
                      selectedStatus === index
                        ? "bg-neutral-50 text-neutral-900"
                        : "hover:bg-neutral-900 hover:text-neutral-200 bg-neutral-900/50"
                    }`}
                    onClick={() => setSelectedStatus(index)}
                  >
                    <StatusItem {...el} />
                  </li>
                );
              })}
            </ul>
          </Accordion>
        </li>
        <li>
          <Accordion title="Creator earnings">hello world</Accordion>
        </li>
        <li>
          <Accordion title="Price">hello world</Accordion>
        </li>
        <li>
          <Accordion title="Parity rank">hello world</Accordion>
        </li>
        <li>
          <Accordion title="Currency">hello world</Accordion>
        </li>
      </ul>
      <div className="border-b-[1px] border-gray-500/30"></div>
      <Accordion title="Traits"></Accordion>
      <ul>
        <li>
          <Accordion title="Background" after="12">
            hello world
          </Accordion>
        </li>
      </ul>
    </div>
  );
};

export default function Page({ params }: { params: { collection: string } }) {
  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-20 items-center sticky top-40">
        <div className="flex gap-2 h-full w-full items-center">
          <FilterIcon />
          <TotalItemsShow />
          <SearchBox className="grow w-full min-w-64 max-w-[512px]" />
          <SortedSelector />
          <ListStyleIconGroup />
        </div>
      </div>
      <div className={`flex w-full overflow-y-scroll sticky top-60`}>
        <div className="w-1/4">
          <SideBar />
        </div>
        <div className="w-3/4"></div>
      </div>
    </div>
  );
}
