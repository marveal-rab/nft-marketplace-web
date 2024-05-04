import { BASE_URL, post } from "./request";
import * as Mutations from "./mutation";
import * as Queries from "./query";
import { FindCollectionInput, NewCollectionParams } from "@/types/collection";
import { TokenType } from "@/types/session";

export const generateToken = async (address: string) => {
  const response = await post(Mutations.GenerateToken, { address });
  return response.data.generateToken;
};

export const createUser = async (authorization: string) => {
  const response = await post(
    Mutations.CreateUser,
    {
      user: {},
    },
    {
      headers: {
        Authorization: authorization,
      },
    }
  );
  return response.data;
};

export const createCollection = async (
  collection: NewCollectionParams,
  authorization: string | undefined
) => {
  if (!authorization) {
    throw new Error("No authorization");
  }
  const response = await post(
    Mutations.CreateCollection,
    {
      newCollection: collection,
    },
    {
      headers: {
        Authorization: authorization,
      },
    }
  );
  return response;
};

export const uploadFile = async (file: File) => {
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
  });
  return await response.json();
};

export const listCollectionsForOwner = async (authorization: string) => {
  const response = await post(
    Queries.ListCollectionsForOwner,
    {},
    {
      headers: {
        Authorization: authorization,
      },
    }
  );
  return response.data.listCollectionsForOwner;
};

export const findCollectionForOwner = async (
  input: FindCollectionInput,
  authorization: TokenType
) => {
  if (!authorization) {
    throw new Error("No authorization");
  }
  const response = await post(
    Queries.FindCollectionForOwner,
    { input },
    {
      headers: {
        Authorization: authorization,
      },
    }
  );
  return response.data.findCollectionForOwner;
};
