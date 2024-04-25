"use client";

import React, { useCallback } from "react";
import { loggedIn, logout, nonce, verify } from "@/app/actions";
import { SiweMessage } from "siwe";
import { useAccount, useChainId, useDisconnect, useSignMessage } from "wagmi";
import { VerifyParams } from "@/types/session";

interface SessionProviderProps {
  children: React.ReactNode;
}

export const SessionContext = React.createContext({});

const buildSiweMessage = (address: string, chainId: number, nonce: string) => {
  return new SiweMessage({
    domain: window.location.host,
    address,
    statement: "Sign in the app.",
    uri: window.location.origin,
    version: "1",
    chainId,
    nonce,
  });
};

export function SessionProvider({ children }: SessionProviderProps) {
  const { isConnected, address } = useAccount();
  const chainId = useChainId();
  const { signMessageAsync } = useSignMessage();
  const { disconnect } = useDisconnect();
  const [signing, setSigning] = React.useState(false);

  const sign = useCallback(async () => {
    if (isConnected && address) {
      if (await loggedIn()) {
        return;
      }
      const n = await nonce();
      const message = buildSiweMessage(address, chainId, n);
      const verifyParams: VerifyParams = {
        message: message.toMessage(),
        signature: await signMessageAsync({
          message: message.prepareMessage(),
        }),
      };
      verify(verifyParams)
        .then((verifySuccess) => {
          if (!verifySuccess) {
            disconnect();
          }
        })
        .catch((error) => {
          console.error("Login failed", error);
          disconnect();
        });
    } else {
      logout();
    }
  }, [isConnected, address]);

  React.useEffect(() => {
    if (signing) {
      return;
    } else {
      setSigning(true);
      sign();
      setSigning(false);
    }
  }, [sign]);

  return (
    <SessionContext.Provider value={{}}>{children}</SessionContext.Provider>
  );
}
