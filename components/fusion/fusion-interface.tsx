"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NFTSelector } from "@/components/fusion/nft-selector"
import { FusionPreview } from "@/components/fusion/fusion-preview"
import { useFusion } from "@/hooks/use-fusion"

export function FusionInterface() {
  const { isConnected } = useAccount()
  const [selectedNFTs, setSelectedNFTs] = useState<{
    nft1?: string
    nft2?: string
  }>({})
  const { fusionMutation } = useFusion()

  const handleFusion = async () => {
    if (!selectedNFTs.nft1 || !selectedNFTs.nft2) return
    await fusionMutation.mutateAsync({
      nft1: selectedNFTs.nft1,
      nft2: selectedNFTs.nft2,
    })
  }

  if (!isConnected) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Connect Wallet</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Please connect your wallet to start fusing NFTs</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fusion Interface</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 lg:grid-cols-2">
          <NFTSelector
            label="Select First NFT"
            onSelect={(nft) => setSelectedNFTs((prev) => ({ ...prev, nft1: nft }))}
          />
          <NFTSelector
            label="Select Second NFT"
            onSelect={(nft) => setSelectedNFTs((prev) => ({ ...prev, nft2: nft }))}
          />
        </div>
        <FusionPreview nft1={selectedNFTs.nft1} nft2={selectedNFTs.nft2} />
        <Button className="w-full" disabled={!selectedNFTs.nft1 || !selectedNFTs.nft2} onClick={handleFusion}>
          Start Fusion
        </Button>
      </CardContent>
    </Card>
  )
}

