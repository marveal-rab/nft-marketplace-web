import { BASE_URL, post } from "./request";
import * as Mutations from "./mutation";
import axios from "axios";

export const generateToken = async (address: string) => {
  const response = await post(Mutations.GenerateToken, { address });
  return response.data.generateToken;
};

export const uploadFile = async (file: File) => {
  console.log("Uploading file", file);
  const formData = new FormData();
  formData.append(
    "operations",
    '{query: "mutation ($file: Upload!) {uploadFile(file: $file){url}}", variables: { file: null }}'
  );
  formData.append("map", '{ "0": ["variables.file"] }');
  formData.append("0", file);
  const response = await axios.post(BASE_URL, formData, {
    headers: {
      "Content-Type": "application/json",
      // Accept: "application/json",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Headers": "*",
      // "Access-Control-Allow-Credentials": "true",
    },
  });
  console.log("File uploaded", response);
  return response.data.data;
};
