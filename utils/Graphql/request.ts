export const BASE_URL = "http://127.0.0.1:8000/graphql";

export const get = async (
  query: string,
  variables?: any,
  options?: RequestInit
) => {
  return await request(query, variables, { ...options, method: "GET" });
};

export const post = async (
  query: string,
  variables?: any,
  options?: RequestInit
) => {
  return await request(query, variables, { ...options, method: "POST" });
};

export const request = async (
  query: string,
  variables?: any,
  options?: RequestInit
) => {
  const response = await fetch(BASE_URL, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...options?.headers,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: "cors",
    ...options,
  });
  return response.json();
};
