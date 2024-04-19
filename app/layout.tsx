import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NFTMarketplaceProvider } from "./marketplace-provider";
import { WalletConnectProvider } from "./contexts/wallet-connect-provider";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config/wagmi";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TwinCapes - NFT marketplace",
  description: "TwinCapes - NFT marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletConnectProvider initialState={initialState}>
          <NFTMarketplaceProvider>
            <div className="min-h-screen">{children}</div>
          </NFTMarketplaceProvider>
        </WalletConnectProvider>
      </body>
    </html>
  );
}
