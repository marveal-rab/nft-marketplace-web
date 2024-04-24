"use client";

import React from "react";
import NFTCollecitonTokenAbi from "@/abi/NFTCollecitonToken.json";
import { useWatchContractEvent } from "wagmi";

export const ContractsEventContext = React.createContext({});

export const ContractsEventProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useWatchContractEvent({
    abi: NFTCollecitonTokenAbi.abi,
    address: process.env
      .NEXT_PUBLIC_NFT_COLLECTION_CONTRACT_ADDRESS as `0x${string}`,
    eventName: "CollectionCreated",
    onLogs: (logs) => {
      console.log("CollectionCreated logs", logs);
    },
  });
  return (
    <ContractsEventContext.Provider value={{}}>
      {children}
    </ContractsEventContext.Provider>
  );
};
