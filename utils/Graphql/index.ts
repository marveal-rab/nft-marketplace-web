import { BASE_URL, post } from "./request";
import * as Mutations from "./mutation";

export const generateToken = async (address: string) => {
  const response = await post(Mutations.GenerateToken, { address });
  return response.data.generateToken;
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
