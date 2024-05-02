import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { defineChain } from "viem";

import { cookieStorage, createStorage } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "NFT Marketplace",
  description: "NFT Marketplace",
  url: "http://localhost:3000", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export const ganache = /*#__PURE__*/ defineChain({
  id: 1_337,
  name: "Ganache",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:7545"] },
  },
  testnet: true,
});

// Create wagmiConfig
export const config = defaultWagmiConfig({
  chains: [mainnet, sepolia, ganache],
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableEmail: true,
});
