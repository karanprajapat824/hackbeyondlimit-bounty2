"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ConnectKitButton } from "connectkit"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Fusion Lab", href: "/fusion" },
  { name: "Gallery", href: "/gallery" },
  { name: "My NFTs", href: "/my-nfts" },
  { name: "Profile", href: "/profile" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="border-b">
      <nav className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="text-xl font-bold">
          NFT Fusion Lab
        </Link>
        <div className="ml-10 flex gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="ml-auto">
          <ConnectKitButton />
        </div>
      </nav>
    </header>
  )
}

