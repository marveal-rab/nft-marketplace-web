export const GenerateToken = /* GraphQL */ `
  mutation GenerateToken($address: String!) {
    generateToken(address: $address) {
      secret
      tokenType
    }
  }
`;

export const UploadFile = /* GraphQL */ `
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
