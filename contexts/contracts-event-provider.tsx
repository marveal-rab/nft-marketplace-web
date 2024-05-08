"use client";

import React from "react";

export const ContractsEventContext = React.createContext({});

export const ContractsEventProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ContractsEventContext.Provider value={{}}>
      {children}
    </ContractsEventContext.Provider>
  );
};
