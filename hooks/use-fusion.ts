"use client"

import { useMutation } from "@tanstack/react-query"
import { useContract } from "./use-contract"

export function useFusion() {
  const { contract } = useContract()

  const fusionMutation = useMutation({
    mutationFn: async ({
      nft1,
      nft2,
    }: {
      nft1: string
      nft2: string
    }) => {
      if (!contract) throw new Error("Contract not initialized")
      const tx = await contract.fuseNFTs(nft1, nft2)
      await tx.wait()
      return tx
    },
  })

  return {
    fusionMutation,
  }
}

