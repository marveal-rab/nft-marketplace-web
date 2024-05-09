import React from "react";
import { Transition } from "@headlessui/react";
import FilterIcon from "@/app/components/Icon/filter";

interface HeaderProps {
  className?: string;
  setShowSideBar: (func: (prev: boolean) => boolean) => void;
}

const TotalOffersShow = () => {
  return (
    <div>
      <span className="flex items-center gap-1 text-base font-bold text-neutral-200">
        <span>12</span>
        <span>Offers</span>
      </span>
    </div>
  );
};

const TotalStats: React.FC = ({}) => {
  const [show, setShow] = React.useState<boolean>(false);
  const items = [
    { label: "Volume", value: "309 ETH" },
    { label: "Floor", value: "0.1276 ETH" },
    { label: "Best offer", value: "0.0912 WETH" },
    { label: "Total offer volume", value: "1.4569 WETH" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 240) {
        setShow(false);
      } else if (window.scrollY > 250) {
        setShow(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex gap-2 max-lg:hidden">
      <Transition
        show={show}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex gap-4 items-center">
          {items.map((item, index) => (
            <div className="flex gap-2 items-center font-bold" key={index}>
              <p className="text-neutral-600 text-sm">{item.label}</p>
              <p className="text-neutral-200 text-base">{item.value}</p>
            </div>
          ))}
        </div>
      </Transition>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  const { className, setShowSideBar } = props;
  return (
    <div className={className}>
      <div className="flex gap-2 w-full h-full items-center justify-between">
        <div className="flex items-center gap-4">
          <FilterIcon
            onClick={(event) => {
              setShowSideBar((prev: boolean) => !prev);
            }}
          />
          <TotalOffersShow />
        </div>
        <TotalStats />
      </div>
    </div>
  );
};

export default Header;
