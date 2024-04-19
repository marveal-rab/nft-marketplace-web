"use client";

import React from "react";

export const NFTMarketplaceContext = React.createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => {},
});

export const NFTMarketplaceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <NFTMarketplaceContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
