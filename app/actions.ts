"use server";

import {
  Current,
  SessionData,
  TokenType,
  VerifyParams,
  defaultSession,
  sessionOptions,
} from "@/types/session";
import { API } from "@/utils/Graphql";
import { IronSession, getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SiweMessage, generateNonce } from "siwe";

export async function getSession(): Promise<IronSession<SessionData>> {
  "use server";

  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
    session.username = defaultSession.username;
  }
  return session;
}

export async function loggedIn(): Promise<boolean> {
  "use server";

  const session = await getSession();
  return session.isLoggedIn;
}

export async function logout() {
  "use server";

  // false => no db call for logout
  const session = await getSession();
  session.destroy();
}

export async function nonce(): Promise<string> {
  "use server";

  const nonce = generateNonce();
  const session = await getSession();
  session.nonce = nonce;
  await session.save();

  return nonce;
}

export async function verify(params: VerifyParams): Promise<boolean> {
  "use server";

  try {
    const siweMessage = new SiweMessage(params.message);
    const fields = await siweMessage.verify({ signature: params.signature });
    const session = await getSession();
    if (fields.data.nonce !== session.nonce) {
      console.error("Nonce does not match", fields.data.nonce, session.nonce);
      return false;
    }
    session.siwe = fields;
    session.isLoggedIn = true;
    const response = await API.generateToken(fields.data.address);
    session.token = `${response.tokenType} ${response.secret}` as TokenType;
    await session.save();
    await API.createUser(session.token);
    return true;
  } catch (error) {
    console.error("Error verifying message", error);
  }
  return false;
}

export async function current(): Promise<Current> {
  "use server";

  const session = await getSession();
  return {
    address: session.siwe?.data.address as `0x${string}` | undefined,
    token: session.token as TokenType,
  };
}
