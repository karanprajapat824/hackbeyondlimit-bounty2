import { HeroSection } from "@/components/hero-section"
import { FeaturedNFTs } from "@/components/featured-nfts"
import { HowItWorks } from "@/components/how-it-works"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <FeaturedNFTs />
      <HowItWorks />
    </div>
  )
}

