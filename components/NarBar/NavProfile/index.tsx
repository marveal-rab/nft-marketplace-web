import React from "react";

import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";

const WalletLogin = () => {
  return (
    <div className="bg-gray-200 rounded-lg px-4 py-3 bg-opacity-10 hover:bg-opacity-5">
      <button className="flex space-x-4">
        <BiWallet className="" size={24} />
        <span className="font-bold">Login</span>
      </button>
    </div>
  );
};

interface AvatarPopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: string;
}

const AvatarPopover: React.FC<AvatarPopoverProps> = ({ ...props }) => {
  const { classes } = props;
  return (
    <div
      className={`absolute right-0 text-left items-center p-4 w-[200px] bg-gray-950 border-gray-800 space-y-2 rounded-lg ${classes}`}
    >
      <div className={"w-auto rounded-lg hover:bg-gray-700"}>
        <p className="text-md font-bold p-3">
          <a href={"#"}>Profile</a>
        </p>
      </div>
    </div>
  );
};

const Avatar = () => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  return (
    <div className="relative">
      <div
        className="flex items-center bg-gray-200 rounded-lg p-3 bg-opacity-10 hover:bg-opacity-5"
        onMouseEnter={() => {
          setIsPopoverOpen(true);
        }}
        onMouseLeave={() => {
          setIsPopoverOpen(false);
        }}
      >
        <button>
          <BsPersonCircle size={24} />
        </button>
      </div>
      {isPopoverOpen && <AvatarPopover />}
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
      <div className="flex space-x-4 items-center">
        <WalletLogin />
        <Avatar />
        <Cart />
      </div>
    </>
  );
};

export default NavProfile;
