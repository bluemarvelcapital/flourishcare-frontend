"use client"
import { useRouter } from "next/navigation"
import React from "react"
import { BiArrowBack } from "react-icons/bi"

export const GoBack = () => {
  const router = useRouter()
  return (
    <div
      className="inline-flex items-center gap-3 mb-4 text-sm cursor-pointer"
      onClick={router.back}
    >
      <BiArrowBack />
      <span>Go Back</span>
    </div>
  )
}
