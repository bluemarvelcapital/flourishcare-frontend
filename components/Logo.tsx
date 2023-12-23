import React from "react"
import Image from "next/image"

export const Logo = () => {
  return (
    <div>
      <Image
        src={"/logo.svg"}
        alt="Flourish Care Logo"
        width={164}
        height={63}
      />
    </div>
  )
}
