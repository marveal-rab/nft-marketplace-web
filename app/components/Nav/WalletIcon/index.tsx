"use client";

import React from "react";
import { BiWallet } from "react-icons/bi";
import { NFTMarketplaceContext } from "@/app/marketplace-provider";

interface WalletProps extends Props {}

const Wallet: React.FC<WalletProps> = ({ ...props }) => {
  const { className } = props;
  const { openWallet, isConnected, balance } = React.useContext(
    NFTMarketplaceContext
  );

  return (
    <div
      className={`flex items-center rounded-lg bg-transparent xl:bg-gray-200/10 xl:hover:bg-gray-200/5 px-3 xl:px-2 xl:py-3 ${className}`}
      onClick={(e) => {
        e.stopPropagation();
        openWallet();
      }}
    >
      <button className="flex space-x-3">
        <BiWallet className="" size={24} />
        <span className="font-bold sm:max-xl:hidden">
          {isConnected
            ? balance.data?.value + " " + balance.data?.symbol
            : "Login"}
        </span>
      </button>
    </div>
  );
};

export default Wallet;
