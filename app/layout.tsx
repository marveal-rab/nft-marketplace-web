import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NFTMarketplaceProvider } from "./marketplace-provider";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <NFTMarketplaceProvider>
          <div className="min-h-screen">{children}</div>
        </NFTMarketplaceProvider>
      </body>
    </html>
  );
}
