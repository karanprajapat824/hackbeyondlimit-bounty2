import { NFTGallery } from "@/components/gallery/nft-gallery"
import { GalleryFilters } from "@/components/gallery/gallery-filters"

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">NFT Gallery</h1>
        <GalleryFilters />
      </div>
      <NFTGallery />
    </div>
  )
}

