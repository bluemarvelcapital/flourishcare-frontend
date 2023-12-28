import React from "react"
import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <div>
      <Link href="/">
        <img
          src={"/logo.png"}
          alt="Flourish Care Logo"
          style={{ width: "164px", height: "63px" }}
        />
      </Link>
    </div>
  )
}
