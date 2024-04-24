"use client";

import React from "react";

interface IPFSContextType {}

export const IPFSContext = React.createContext<IPFSContextType>({});

export const IPFSProvider = ({ children }: { children: React.ReactNode }) => {
  // const ipfs = createHelia({
  //   host: "localhost",
  //   port: 5001,
  //   protocol: "http",
  // });

  return <IPFSContext.Provider value={{}}>{children}</IPFSContext.Provider>;
};
