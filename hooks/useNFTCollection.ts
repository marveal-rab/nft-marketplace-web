import React from "react";
import { useWriteContract } from "wagmi";

import { ganache } from "@/config/wagmi";
import NFTCollection from "@/abi/NFTCollection.json";
import { WalletClient } from "viem";
import { AddressType } from "@/types";

export interface CreateCollectionParams {
  to: string;
  name: string;
  symbol: string;
  uri: string;
}

export enum ChainId {
  GANACHE = ganache.id,
}

export interface DeployNFTCollectionContractParams {
  owner: `0x${string}`;
  name: string;
  symbol: string;
  uri: string;
  chain: ChainId;
}

export interface MintNFTParams {
  address: AddressType;
  tokenId: number;
  amount: number;
}

export function useNFTCollection() {
  const { writeContract } = useWriteContract();

  // const createCollection = async (params: CreateCollectionParams) => {
  //   try {
  //     writeContract({
  //       abi: NFTCollecitonTokenAbi.abi,
  //       address: process.env
  //         .NEXT_PUBLIC_NFT_COLLECTION_CONTRACT_ADDRESS as `0x${string}`,
  //       functionName: "safeMint",
  //       args: [params.to, params.uri, params.name, params.symbol],
  //     });
  //   } catch (error) {
  //     console.error("Failed to create collection", error);
  //   }
  // };

  const deployContract = async (
    walletClient: WalletClient,
    params: DeployNFTCollectionContractParams
  ) => {
    const hash = await walletClient.deployContract({
      abi: NFTCollection.abi,
      bytecode: NFTCollection.bytecode as `0x${string}`,
      args: [params.owner, params.uri, params.name, params.symbol],
      account: params.owner,
      chain: walletClient.chain,
    });
    return hash;
  };

  const mintNFT = async (params: MintNFTParams) => {
    if (!params.address) {
      throw new Error("contract address can not be empty");
    }
    try {
      writeContract({
        abi: NFTCollection.abi,
        address: params.address,
        functionName: "mint",
        args: [params.tokenId, params.amount],
      });
    } catch (error) {
      console.error("Failed to create collection", error);
      throw error;
    }
  };

  return { deployContract, mintNFT };
}
