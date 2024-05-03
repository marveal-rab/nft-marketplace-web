import React from "react";
import { useReadContract, useWalletClient, useWriteContract } from "wagmi";
import NFTCollecitonTokenAbi from "@/abi/NFTCollecitonToken.json";
import { ganache } from "@/config/wagmi";
import NFTCollection from "@/abi/NFTCollection.json";

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
  owner: string;
  name: string;
  symbol: string;
  uri: string;
  chain: ChainId;
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

  // const getTokenUrlById = async (tokenId: number): Promise<string> => {
  //   try {
  //     const { data } = useReadContract({
  //       abi: NFTCollecitonTokenAbi.abi,
  //       address: process.env
  //         .NEXT_PUBLIC_NFT_COLLECTION_CONTRACT_ADDRESS as `0x${string}`,
  //       functionName: "tokenURI",
  //       args: [tokenId],
  //     });
  //     return data as string;
  //   } catch (error) {
  //     console.error("Failed to get token URI", error);
  //     throw error;
  //   }
  // };

  const deployContract = async (params: DeployNFTCollectionContractParams) => {
    const minter = process.env
      .NEXT_PUBLIC_NFT_COLLECTION_CONTRACT_MINTER_ADDRESS as `0x${string}`;
    const { data: walletClient } = useWalletClient({
      chainId: params.chain as number,
    });
    const hash = await walletClient?.deployContract({
      abi: NFTCollection.abi,
      bytecode: NFTCollection.bytecode as `0x${string}`,
      // admin, minter, uri, name, symbol
      args: [params.owner, minter, params.uri, params.name, params.symbol],
    });
    return hash;
  };

  return { deployContract };
}
