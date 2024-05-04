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
}

export type AddressType = `0x${string}` | undefined | null;

export interface FindCollectionInput {
  collectionAddress: AddressType;
}
