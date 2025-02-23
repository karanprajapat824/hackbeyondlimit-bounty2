"use client"

import { useEffect, useState } from "react"
import { useAccount } from "wagmi"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useNFTs } from "@/hooks/use-nfts"

interface NFT {
  id: string
  name: string
  image: string
  traits: Array<{ name: string; value: string }>
}

export function NFTGallery() {
  const { address } = useAccount()
  const { nfts, isLoading } = useNFTs(address)
  const [displayNFTs, setDisplayNFTs] = useState<NFT[]>([])

  useEffect(() => {
    if (nfts) {
      setDisplayNFTs(nfts)
    }
  }, [nfts])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {displayNFTs.map((nft) => (
        <Card key={nft.id}>
          <CardContent className="p-4">
            <img
              src={nft.image || "/placeholder.svg"}
              alt={nft.name}
              className="aspect-square w-full rounded-lg object-cover"
            />
            <h3 className="mt-2 text-lg font-semibold">{nft.name}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {nft.traits.map((trait, index) => (
                <span key={index} className="rounded-full bg-muted px-2 py-1 text-xs">
                  {trait.name}: {trait.value}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

