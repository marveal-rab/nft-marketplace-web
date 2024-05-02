"use client";

import React from "react";
import NFTCollecitonTokenAbi from "@/abi/NFTCollecitonToken.json";
import { useWatchContractEvent } from "wagmi";

export const ContractsEventContext = React.createContext({});

export interface CollectionCreatedEventArgs {
  owner: string;
  tokenId: number;
  name: string;
  symbol: string;
}

export const ContractsEventProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useWatchContractEvent({
    chainId: 1337,
    abi: NFTCollecitonTokenAbi.abi,
    address: process.env
      .NEXT_PUBLIC_NFT_COLLECTION_CONTRACT_ADDRESS as `0x${string}`,
    eventName: "CollectionCreated",
    onLogs: (logs) => {
      const log = logs[0] as any;
      const args = log.args as CollectionCreatedEventArgs;
      console.log("CollectionCreated logs", args);
    },
  });
  return (
    <ContractsEventContext.Provider value={{}}>
      {children}
    </ContractsEventContext.Provider>
  );
};
