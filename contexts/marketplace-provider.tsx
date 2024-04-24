"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useAccount } from "wagmi";

interface NFTMarketplaceContextValue {
  isConnected: boolean;
  address: `0x${string}` | undefined;
  linkTo: (href: string, e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  openWallet: () => void;
}

const initContext = {
  isConnected: false,
  address: undefined,
  linkTo: (href: string, e?: React.MouseEvent<HTMLElement, MouseEvent>) => {},
  openWallet: () => {},
};

export const NFTMarketplaceContext =
  React.createContext<NFTMarketplaceContextValue>(initContext);

export const NFTMarketplaceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();
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
        address,
        linkTo,
        openWallet: open,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
