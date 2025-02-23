import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="py-24 text-center">
      <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">Merge NFTs, Create Magic</h1>
      <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
        Combine two NFTs to create a unique digital collectible. Our advanced fusion technology allows you to merge
        traits and create something entirely new.
      </p>
      <div className="flex justify-center gap-4">
        <Button asChild size="lg">
          <Link href="/fusion">Start Fusion</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/gallery">View Gallery</Link>
        </Button>
      </div>
    </div>
  )
}

