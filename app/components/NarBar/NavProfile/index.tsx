import React from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import Avatar from "@/app/components/Nav/AvatarIcon";
import Wallet from "@/app/components/Nav/WalletIcon";

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
        <Wallet />
        <Avatar />
        <Cart className="px-3 xl:p2-2" />
      </div>
    </>
  );
};

export default NavProfile;
