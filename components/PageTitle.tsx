"use client"
import Link from "next/link"
import React from "react"
import { CiHome } from "react-icons/ci"
import { PiCaretRightThin } from "react-icons/pi"
import { GoBack } from "./GoBack"

interface props {
  title: string
  link_text?: string
}

export const PageTitle: React.FC<props> = ({ ...props }) => {
  const { title, link_text } = props
  return (
    <>
      <GoBack />
      <div className="p-[24px] bg-white rounded-[10px] md:mb-[2.5rem] mb-[1.5rem]">
        <div className="flex items-center gap-2 text-sm mb-[1.5rem]">
          <Link href={"/"}>
            <CiHome className="text-[16px]" />
          </Link>
          <PiCaretRightThin style={{ color: "#D1D5DB" }} />
          <Link href={"/account"}>Account</Link>
          <PiCaretRightThin style={{ color: "#D1D5DB" }} />
          <p className="text-primary">{link_text || title}</p>
        </div>

        <h2 className="text-[1.5rem] md:text-[2.3rem] lg:text-[40px] capitalize font-[500]">
          {title}
        </h2>
      </div>
    </>
  )
}
