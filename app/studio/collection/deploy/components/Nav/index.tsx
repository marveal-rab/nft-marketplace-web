import React from "react";
import Avatar from "@/app/components/Nav/AvatarIcon";
import Wallet from "@/app/components/Nav/WalletIcon";
import { NFTMarketplaceContext } from "@/contexts";
import { FaArrowLeft } from "react-icons/fa";

const Nav = () => {
  const { linkTo } = React.useContext(NFTMarketplaceContext);
  return (
    <nav className="w-full h-20 flex items-center justify-end border-b-[1px] border-b-gray-500/30 fixed top-0 left-0 bg-black mx-auto px-16">
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center gap-4">
          <div
            className="group w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center cursor-pointer hover:bg-neutral-800"
            onClick={(e) => {
              linkTo("/studio/create", e);
            }}
          >
            <FaArrowLeft
              size={20}
              className="text-neutral-500 group-hover:text-neutral-100"
            />
          </div>
          <span className="font-bold text-xl">Create an NFT</span>
        </div>
        <div className="flex items-center gap-2">
          <Wallet />
          <Avatar />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
