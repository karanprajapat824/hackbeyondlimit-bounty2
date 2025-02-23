"use client"

import { useAccount } from "wagmi"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileHeader() {
  const { address } = useAccount()

  if (!address) {
    return (
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">Connect Wallet</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Please connect your wallet to view your profile</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="mb-8">
      <div className="relative h-48 rounded-lg bg-gradient-to-r from-primary to-primary-foreground">
        <div className="absolute -bottom-16 left-8">
          <Avatar className="h-32 w-32 border-4 border-background">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="mt-20 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Unnamed</h1>
          <p className="text-sm text-muted-foreground">
            {address.slice(0, 6)}...{address.slice(-4)}
          </p>
        </div>
        <Button>Edit Profile</Button>
      </div>
    </div>
  )
}

