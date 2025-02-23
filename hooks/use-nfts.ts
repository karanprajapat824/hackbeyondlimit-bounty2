"use client"

import { useQuery } from "@tanstack/react-query"
import { Network, Alchemy } from "alchemy-sdk"

const settings = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
}

const alchemy = new Alchemy(settings)

export function useNFTs(address?: string) {
  return useQuery({
    queryKey: ["nfts", address],
    queryFn: async () => {
      if (!address) return []
      const nfts = await alchemy.nft.getNftsForOwner(address)
      return nfts.ownedNfts.map((nft) => ({
        id: nft.tokenId,
        name: nft.title,
        image: nft.media[0]?.gateway ?? "/placeholder.svg",
        traits: nft.rawMetadata?.attributes ?? [],
      }))
    },
    enabled: !!address,
  })
}

