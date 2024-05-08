export const ListCollectionsForOwner = /* GraphQL */ `
  {
    listCollectionsForOwner {
      id
      name
      symbol
      owner
      picUrl
    }
  }
`;

export const FindCollectionForOwner = /* GraphQL */ `
  query FindCollectionForOwner($input: FindCollectionInput!) {
    findCollectionForOwner(input: $input) {
      id
      name
      symbol
      owner
      picUrl
      contractAddress
      chainId
    }
  }
`;

export const NextTokenId = /* GraphQL */ `
  query NextTokenId($contractAddress: String!) {
    nextTokenId(contractAddress: $contractAddress)
  }
`;
