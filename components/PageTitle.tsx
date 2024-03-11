"use client"
import Link from "next/link"
import React from "react"
import { CiHome } from "react-icons/ci"
import { PiCaretRightThin } from "react-icons/pi"

interface props {
  title: string
}

export const PageTitle: React.FC<props> = ({ ...props }) => {
  const { title } = props
  return (
    <div className="p-[24px] bg-white rounded-[10px] md:mb-[2.5rem] mb-[1.5rem]">
      <div className="flex items-center gap-2 text-sm mb-[1.5rem]">
        <CiHome className="text-[16px]" />
        <PiCaretRightThin style={{ color: "#D1D5DB" }} />
        <p>Account</p>
        <PiCaretRightThin style={{ color: "#D1D5DB" }} />
        <p className="text-primary">{title}</p>
      </div>

      <h2 className="text-[1.5rem] md:text-[2.3rem] lg:text-[40px] capitalize">
        {title}
      </h2>
    </div>
  )
}
