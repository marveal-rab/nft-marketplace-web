import { SessionOptions } from "iron-session";
import { SiweResponse } from "siwe";
import { AddressType } from ".";

export interface SessionData {
  username: string;
  isLoggedIn: boolean;
  nonce?: string;
  siwe?: SiweResponse;
  token?: TokenType;
}

export interface Current {
  address: AddressType;
  token: TokenType;
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

export type TokenType = `Bearer ${string}` | undefined;
