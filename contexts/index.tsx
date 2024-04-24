import React from "react";
import {
  ContractsEventProvider,
  ContractsEventContext,
} from "./contracts-event-provider";
import {
  NFTMarketplaceProvider,
  NFTMarketplaceContext,
} from "./marketplace-provider";
import { WalletConnectProvider } from "./wallet-connect-provider";
import { IPFSProvider, IPFSContext } from "./ipfs-provider";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <NFTMarketplaceProvider>
      <ContractsEventProvider>
        <IPFSProvider>{children}</IPFSProvider>
      </ContractsEventProvider>
    </NFTMarketplaceProvider>
  );
};

export default AppProviders;

export {
  WalletConnectProvider,
  ContractsEventContext,
  NFTMarketplaceContext,
  IPFSContext,
};
