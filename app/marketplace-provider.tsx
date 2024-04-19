"use client";

import React from "react";

export const NFTMarketplaceContext = React.createContext({});

export const NFTMarketplaceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <NFTMarketplaceContext.Provider value={{}}>
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
