"use server";

import {
  SessionData,
  VerifyParams,
  defaultSession,
  sessionOptions,
} from "@/types/session";
import { Cryptor } from "@/utils";
import { IronSession, getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SiweMessage, generateNonce } from "siwe";

const ENCRYPT_KEY = Buffer.from("bW5pRKLlkdMOe028l0vOqGmKM87KhUfC", "utf8");

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
    session.token = Cryptor.encrypt(fields.data.address, ENCRYPT_KEY);
    await session.save();
    return true;
  } catch (error) {
    console.error("Error verifying message", error);
  }
  return false;
}

export async function me(): Promise<string | undefined> {
  "use server";

  const session = await getSession();
  return session.siwe?.data.address;
}

export async function uploadFile(file: File): Promise<string> {
  "use server";

  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return data.url;
}
