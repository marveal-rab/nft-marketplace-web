"use client";

import React from "react";
import { BiWallet } from "react-icons/bi";
import { NFTMarketplaceContext } from "@/app/marketplace-provider";
import { UseBalanceReturnType, useBalance } from "wagmi";
import { GetBalanceData } from "wagmi/query";

interface WalletProps extends Props {}

const Wallet: React.FC<WalletProps> = ({ ...props }) => {
  const { className } = props;
  const { openWallet, isConnected, address } = React.useContext(
    NFTMarketplaceContext
  );
  const balance = useBalance({
    address,
  });

  const [balanceText, setBalanceText] = React.useState<string>("");

  React.useEffect(() => {
    if (isConnected && balance.data) {
      let value = (
        Number(balance.data?.value) / Math.pow(10, balance.data?.decimals)
      ).toFixed(3);
      // 如果value小数末尾为0，则去掉
      if (value.indexOf(".") > -1) {
        value = value.replace(/\.?0+$/, "");
      }
      const symbol = balance.data?.symbol;
      setBalanceText(`${value} ${symbol}`);
    } else {
      setBalanceText("Login");
    }
  }, [isConnected, balance.data]);

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
          {isConnected && balance.data ? balanceText : "Login"}
        </span>
      </button>
    </div>
  );
};

export default Wallet;
