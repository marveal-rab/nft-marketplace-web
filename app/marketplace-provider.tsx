"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useAccount } from "wagmi";

export const NFTMarketplaceContext = React.createContext({
  linkTo: (href: string, e?: React.MouseEvent<HTMLElement, MouseEvent>) => {},
  openWallet: () => {},
});

export const NFTMarketplaceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
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
        linkTo,
        openWallet: open,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
