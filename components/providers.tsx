"use client"

import type React from "react"

import { ThemeProvider } from "next-themes"
import { WagmiConfig, createConfig } from "wagmi"
import { ConnectKitProvider, getDefaultConfig } from "connectkit"
import { mainnet, sepolia } from "wagmi/chains"

const chains = [mainnet, sepolia]

const config = createConfig(
  getDefaultConfig({
    appName: "NFT Fusion Lab",
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID!,
    chains,
  }),
)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

