export const GenerateToken = /* GraphQL */ `
  mutation GenerateToken($address: String!) {
    generateToken(address: $address) {
      secret
      tokenType
    }
  }
`;
