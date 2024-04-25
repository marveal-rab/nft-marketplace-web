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
import { SessionProvider } from "./session-provider";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <NFTMarketplaceProvider>
      <ContractsEventProvider>
        <SessionProvider>{children}</SessionProvider>
      </ContractsEventProvider>
    </NFTMarketplaceProvider>
  );
};

export default AppProviders;

export { WalletConnectProvider, ContractsEventContext, NFTMarketplaceContext };
