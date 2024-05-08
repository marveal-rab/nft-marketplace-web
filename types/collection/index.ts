import { AddressType } from "..";

export interface NewCollectionParams {
  name: string;
  symbol: string;
  picUrl: string;
  contractAddress: `0x${string}`;
  chainId: number;
}

export interface CollectionData {
  id: string;
  name: string;
  symbol: string;
  owner: string;
  picUrl: string;
  contractAddress: AddressType;
  chainId: number;
  dirName: string;
  dirHash: string;
}

export interface FindCollectionInput {
  collectionAddress: AddressType;
}

export interface NewNftParams {
  tokenId: number;
  name: string;
  description?: string;
  imageUrl: string;
  supply: number;
  externalLink?: string;
  collection: AddressType;
  traits?: NewNftTrait[];
}

export interface NewNftTrait {
  traitType: string;
  traitValue: string;
}
