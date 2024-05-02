"use client";

import React from "react";
import NFTCollecitonTokenAbi from "@/abi/NFTCollecitonToken.json";
import { useWatchContractEvent } from "wagmi";
import { Graphqls } from "@/utils";
import { current } from "@/app/actions";
import { NewCollectionParams } from "@/types/NewCollectionParams";

export const ContractsEventContext = React.createContext({});

export interface CollectionCreatedEventArgs {
  owner: string;
  tokenId: number;
  name: string;
  symbol: string;
  uri: string;
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
    onLogs: async (logs) => {
      const log = logs[0] as any;
      const args = log.args as CollectionCreatedEventArgs;
      const curr = await current();
      if (curr.address !== args.owner) {
        console.error("Owner does not match");
        return;
      }
      if (!curr.token) {
        console.error("No authorization");
        return;
      }
      const collection: NewCollectionParams = {
        name: args.name,
        symbol: args.symbol,
        picUrl: args.uri,
      };
      await Graphqls.createCollection(collection, curr.token);
      console.log("CollectionCreated logs", args);
    },
  });
  return (
    <ContractsEventContext.Provider value={{}}>
      {children}
    </ContractsEventContext.Provider>
  );
};
