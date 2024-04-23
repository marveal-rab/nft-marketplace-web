"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useRouter } from "next/navigation";
import React from "react";
import { UseBalanceReturnType, useAccount, useBalance } from "wagmi";
import { GetBalanceData } from "wagmi/query";

export const NFTMarketplaceContext = React.createContext({
  isConnected: false,
  linkTo: (href: string, e?: React.MouseEvent<HTMLElement, MouseEvent>) => {},
  openWallet: () => {},
  balance: {} as UseBalanceReturnType<GetBalanceData>,
});

export const NFTMarketplaceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  const balance = isConnected
    ? useBalance({ address })
    : ({} as UseBalanceReturnType<GetBalanceData>);
  const router = useRouter();

  const linkTo = (
    href: string,
    e?: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e?.stopPropagation();
    if (isConnected) {
      router.push(href);
    } else {
      open();
    }
  };

  return (
    <NFTMarketplaceContext.Provider
      value={{
        isConnected,
        linkTo,
        openWallet: open,
        balance,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
