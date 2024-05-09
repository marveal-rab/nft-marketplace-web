import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppProviders, { WalletConnectProvider } from "@/contexts";
import { config } from "@/config/wagmi";
import { cookieToInitialState } from "wagmi";
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
      <body className={`scroller-bold ${inter.className}`}>
        <WalletConnectProvider initialState={initialState}>
          <AppProviders>
            <div className="min-h-screen">{children}</div>
          </AppProviders>
        </WalletConnectProvider>
      </body>
    </html>
  );
}
