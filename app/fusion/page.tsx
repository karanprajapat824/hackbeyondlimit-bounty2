import { FusionInterface } from "@/components/fusion/fusion-interface"
import { NFTRequirements } from "@/components/fusion/nft-requirements"

export default function FusionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">NFT Fusion Lab</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <NFTRequirements />
        <FusionInterface />
      </div>
    </div>
  )
}

