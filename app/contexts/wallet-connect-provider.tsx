"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConf } from "@/config";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { State, WagmiProvider } from "wagmi";

export const WalletConnectProvider = ({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState?: State;
}) => {
  // Setup queryClient
  const queryClient = new QueryClient();

  if (!wagmiConf.projectId) throw new Error("Project ID is not defined");

  // Create modal
  createWeb3Modal({
    wagmiConfig: wagmiConf.config,
    projectId: wagmiConf.projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
    enableOnramp: true, // Optional - false as default
  });

  return (
    <WagmiProvider config={wagmiConf.config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
