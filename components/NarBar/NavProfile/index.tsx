import React from "react";

import { BsPersonCircle, BsFillMoonFill, BsBook } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BiWallet, BiChevronRight, BiHelpCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";

/// internal imports
import { Switch } from "@/ui";

const nav = [
  [
    {
      icon: <AiOutlineUser size={20} />,
      title: "Profile",
      href: "#",
      after: undefined,
    },
  ],
  [
    {
      icon: <FiSettings size={20} />,
      title: "Settings",
      href: "#",
      after: undefined,
    },
    {
      icon: <GrLanguage size={20} />,
      title: "Language",
      href: "#",
      after: (
        <div className="justify-self-center flex items-center text-gray-200/70 ">
          <div className="">en</div>
          <BiChevronRight size={24} className="font-bold" />
        </div>
      ),
    },
    {
      icon: <BsFillMoonFill size={20} />,
      title: "Night Mode",
      href: "#",
      after: <Switch className="justify-self-center" />,
    },
  ],
  [
    {
      icon: <BsBook size={20} />,
      title: "Learn",
      href: "#",
      after: undefined,
    },
    {
      icon: <BiHelpCircle size={20} />,
      title: "Help center",
      href: "#",
      after: undefined,
    },
  ],
];

const WalletLogin = () => {
  return (
    <div className="bg-gray-200 rounded-lg px-4 py-3 bg-opacity-10 hover:bg-opacity-5">
      <button className="flex space-x-3">
        <BiWallet className="" size={24} />
        <span className="font-bold">Login</span>
      </button>
    </div>
  );
};

interface AvatarPopoverProps extends React.HTMLAttributes<HTMLDivElement> {}

const AvatarPopover: React.FC<AvatarPopoverProps> = ({ ...props }) => {
  const { className } = props;
  return (
    <div
      className={`absolute top-[75px] right-0 text-left items-center p-4 bg-gray-950 border-gray-800 space-y-2 rounded-lg divide-y divide-gray-100/10 z-max ${className}`}
    >
      {nav &&
        nav.map((el, i) => {
          return (
            <div key={i}>
              {el.map((item, idx) => {
                return (
                  <div
                    className={"w-auto rounded-lg hover:bg-gray-700"}
                    key={idx}
                  >
                    <div className="flex text-base font-bold px-3 py-4 justify-between">
                      <div className="flex items-center space-x-5">
                        {item.icon}
                        <a href={item.href} className="">
                          {item.title}
                        </a>
                      </div>
                      <div className="flex justify-center w-[40px]">
                        {item.after && item.after}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Avatar: React.FC<AvatarProps> = ({ ...props }) => {
  const { className } = props;
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => {
        setIsPopoverOpen(true);
      }}
      onMouseLeave={() => {
        setIsPopoverOpen(false);
      }}
    >
      <div className="flex items-center bg-gray-200 rounded-lg p-3 bg-opacity-10 hover:bg-opacity-5">
        <button>
          <BsPersonCircle size={24} />
        </button>
      </div>
      {isPopoverOpen && <AvatarPopover className="w-[260px]" />}
    </div>
  );
};

const Cart = () => {
  return (
    <div className="flex items-center bg-gray-200 rounded-lg p-3 bg-opacity-10 hover:bg-opacity-5">
      <button>
        <AiOutlineShoppingCart size={24} />
      </button>
    </div>
  );
};

const NavProfile = () => {
  return (
    <>
      <div className="flex space-x-4 items-center h-full">
        <WalletLogin />
        <Avatar className="h-full flex items-center" />
        <Cart />
      </div>
    </>
  );
};

export default NavProfile;
