import { BASE_URL, post } from "./request";
import * as Mutations from "./mutation";
import * as Queries from "./query";
import {
  FindCollectionInput,
  NewCollectionParams,
  NewNftParams,
} from "@/types/collection";
import { TokenType } from "@/types/session";
import { AddressType } from "@/types";

export const API = {
  generateToken: async (address: string) =>
    request("generateToken", Mutations.GenerateToken, { address }),
  createUser: async (authorization: TokenType) =>
    request_with_token(
      "createUser",
      Mutations.CreateUser,
      {
        user: {},
      },
      authorization
    ),
  createCollection: async (
    collection: NewCollectionParams,
    authorization: TokenType
  ) =>
    request_with_token(
      "createCollection",
      Mutations.CreateCollection,
      { newCollection: collection },
      authorization
    ),
  filesMkdir: async (authorization: TokenType) =>
    request_with_token("filesMkdir", Mutations.FilesMkdir, {}, authorization),
  uploadFile: async (file: File, authorization: TokenType) => {
    if (!authorization) {
      throw new Error("No authorization");
    }
    const formdata = new FormData();
    formdata.append(
      "operations",
      '{"query" : "mutation ($file: Upload!) {uploadFile(file: $file){url}}", "variables" : {"file": null}}'
    );
    formdata.append("map", '{"0": ["variables.file"]}');
    formdata.append("0", file);
    const response = await fetch(BASE_URL, {
      method: "POST",
      body: formdata,
      mode: "cors",
      headers: {
        Authorization: authorization as string,
      },
    });
    let data = await response.json();
    if (data.errors) {
      throw new Error(data.errors[0].message);
    }
    return data.data.uploadFile;
  },
  listCollectionsForOwner: async (authorization: TokenType) =>
    request_with_token(
      "listCollectionsForOwner",
      Queries.ListCollectionsForOwner,
      {},
      authorization
    ),
  findCollectionForOwner: async (
    input: FindCollectionInput,
    authorization: TokenType
  ) =>
    request_with_token(
      "findCollectionForOwner",
      Queries.FindCollectionForOwner,
      { input },
      authorization
    ),
  createNft: async (nft: NewNftParams, authorization: TokenType) =>
    request_with_token(
      "createNft",
      Mutations.CreateNFT,
      { newNft: nft },
      authorization
    ),
  nextTokenId: async (contractAddress: AddressType, authorization: TokenType) =>
    request_with_token(
      "nextTokenId",
      Queries.NextTokenId,
      { contractAddress },
      authorization
    ),
};

/**
 * send request with token
 *
 * @param name name of the query
 * @param query query string
 * @param variables variables
 * @param authorization token
 * @returns response
 */
const request_with_token = async (
  name: string,
  query: string,
  variables: any,
  authorization: TokenType
) => {
  if (!authorization) {
    throw new Error("No authorization");
  }
  const response = await post(query, variables, {
    headers: {
      Authorization: authorization,
    },
  });
  if (response.errors) {
    throw new Error(response.errors[0].message);
  }
  return response.data[name];
};

/**
 * send request
 *
 * @param name name of the query
 * @param query query string
 * @param variables variables
 * @returns response
 */
const request = async (name: string, query: string, variables: any) => {
  const response = await post(query, variables);
  if (response.errors) {
    throw new Error(response.errors[0].message);
  }
  return response.data[name];
};
