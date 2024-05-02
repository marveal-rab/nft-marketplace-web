"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConf } from "@/config";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { State, WagmiProvider } from "wagmi";
import { Web3Modal } from "@web3modal/wagmi";

// Setup queryClient
const queryClient = new QueryClient();

if (!wagmiConf.projectId) throw new Error("Project ID is not defined");

// Create modal
const web3Modal: Web3Modal = createWeb3Modal({
  wagmiConfig: wagmiConf.config,
  projectId: wagmiConf.projectId,
  enableAnalytics: false, // Optional - defaults to your Cloud configuration
  enableOnramp: false, // Optional - false as default
});

export const WalletConnectProvider = ({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState?: State;
}) => {
  return (
    <WagmiProvider config={wagmiConf.config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
