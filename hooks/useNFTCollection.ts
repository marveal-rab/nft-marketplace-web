import React from "react";
import { useReadContract, useWriteContract } from "wagmi";
import NFTCollecitonTokenAbi from "@/abi/NFTCollecitonToken.json";

export interface CreateCollectionParams {
  to: string;
  name: string;
  symbol: string;
  uri: string;
}

export function useNFTCollection() {
  const { writeContract } = useWriteContract();

  const createCollection = async (params: CreateCollectionParams) => {
    try {
      writeContract({
        abi: NFTCollecitonTokenAbi.abi,
        address: process.env
          .NEXT_PUBLIC_NFT_COLLECTION_CONTRACT_ADDRESS as `0x${string}`,
        functionName: "safeMint",
        args: [params.to, params.uri, params.name, params.symbol],
      });
    } catch (error) {
      console.error("Failed to create collection", error);
    }
  };

  const getTokenUrlById = async (tokenId: number): Promise<string> => {
    try {
      const { data } = useReadContract({
        abi: NFTCollecitonTokenAbi.abi,
        address: process.env
          .NEXT_PUBLIC_NFT_COLLECTION_CONTRACT_ADDRESS as `0x${string}`,
        functionName: "tokenURI",
        args: [tokenId],
      });
      return data as string;
    } catch (error) {
      console.error("Failed to get token URI", error);
      throw error;
    }
  };
  return { createCollection, getTokenUrlById };
}
