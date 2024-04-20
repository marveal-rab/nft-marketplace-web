import React from "react";

import { BsPersonCircle, BsFillMoonFill, BsBook } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BiWallet, BiChevronRight, BiHelpCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";

/// internal imports
import { Switch } from "@/app/ui";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

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

interface WalletLoginProps extends Props {}

const WalletLogin: React.FC<WalletLoginProps> = ({ ...props }) => {
  const { className } = props;
  const { open } = useWeb3Modal();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    open();
  };

  return (
    <div
      className={`flex items-center rounded-lg bg-transparent xl:p-3 xl:bg-gray-200/10 xl:hover:bg-gray-200/5 ${className}`}
      onClick={handleClick}
    >
      <button className="flex space-x-3">
        <BiWallet className="" size={24} />
        <span className="font-bold sm:max-xl:hidden">Login</span>
      </button>
    </div>
  );
};

interface AvatarPopoverProps extends React.HTMLAttributes<HTMLDivElement> {}

const AvatarPopover: React.FC<AvatarPopoverProps> = ({ ...props }) => {
  const { className } = props;
  return (
    <div
      className={`absolute top-[75px] right-0 text-left items-center px-4 py-1 bg-neutral-900 rounded-lg divide-y divide-gray-500/30 z-max ${className}`}
    >
      {nav &&
        nav.map((el, i) => {
          return (
            <div key={i} className="py-2">
              {el.map((item, idx) => {
                return (
                  <div
                    className={"w-auto rounded-lg hover:bg-neutral-500/20"}
                    key={idx}
                  >
                    <div className="flex text-base font-bold px-3 py-4 justify-between">
                      <div className="flex items-center gap-5">
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

  const { isConnected } = useAccount();
  const { open } = useWeb3Modal();
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    if (isConnected) {
      router.push("/account");
    } else {
      open();
    }
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => {
        setIsPopoverOpen(true);
      }}
      onMouseLeave={() => {
        setIsPopoverOpen(false);
      }}
      onClick={handleClick}
    >
      <div className="flex items-center rounded-lg bg-transparent xl:p-3 xl:bg-gray-200/10 xl:hover:bg-gray-200/5 cursor-pointer">
        <BsPersonCircle size={24} />
      </div>
      {isPopoverOpen && <AvatarPopover className="w-[260px]" />}
    </div>
  );
};

interface CartProps extends Props {}

const Cart: React.FC<CartProps> = ({ ...props }) => {
  const { className } = props;
  return (
    <div
      className={`flex items-center rounded-lg bg-transparent xl:p-3 xl:bg-gray-200/10 xl:hover:bg-gray-200/5 ${className}`}
    >
      <AiOutlineShoppingCart size={24} />
    </div>
  );
};

const Search: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { className } = props;
  return (
    <div
      className={`flex items-center rounded-lg bg-transparent xl:p-3 xl:bg-gray-200/10 xl:hover:bg-gray-200/5 ${className}`}
    >
      <FaSearch size={24} />
    </div>
  );
};

const NavProfile = () => {
  return (
    <>
      <div className="flex items-center h-full">
        <Search className="px-3 xl:px-2 xl:hidden" />
        <WalletLogin className="h-full px-3 xl:px-2" />
        <Avatar className="h-full flex items-center px-3 xl:px-2" />
        <Cart className="h-full px-3 xl:px-2" />
      </div>
    </>
  );
};

export default NavProfile;
