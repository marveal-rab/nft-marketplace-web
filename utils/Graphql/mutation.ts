export const GenerateToken = /* GraphQL */ `
  mutation GenerateToken($address: String!) {
    generateToken(address: $address) {
      secret
      tokenType
    }
  }
`;

export const CreateUser = /* GraphQL */ `
  mutation ($user: NewUser!) {
    createUser(user: $user) {
      id
      address
    }
  }
`;

export const CreateCollection = /* GraphQL */ `
  mutation ($newCollection: NewCollection!) {
    createCollection(newCollection: $newCollection) {
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

export const FilesMkdir = /* GraphQL */ `
  mutation {
    filesMkdir {
      name
      hash
      url
    }
  }
`;

export const CreateNFT = /* GraphQL */ `
  mutation ($newNft: NewNFT!) {
    createNft(newNft: $newNft) {
      tokenId
    }
  }
`;
