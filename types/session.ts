import { SessionOptions } from "iron-session";
import { SiweMessage, SiweResponse } from "siwe";

export interface SessionData {
  username: string;
  isLoggedIn: boolean;
  nonce?: string;
  siwe?: SiweResponse;
  token?: string;
}

export interface Current {
  address: string | undefined;
  token: string | undefined;
}

export interface VerifyParams {
  message: string;
  signature: string;
}

export const defaultSession: SessionData = {
  username: "",
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: "d40phHRwEQbVp7KwDbRqxDDbzEaoRVk1",
  cookieName: "siwe",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
