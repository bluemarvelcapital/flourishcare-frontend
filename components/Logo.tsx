import React from "react"
import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src={"/logo.svg"}
          alt="Flourish Care Logo"
          width={164}
          height={63}
        />
      </Link>
    </div>
  )
}
