"use client"
import React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

export const InPageNav = ({
  paths,
}: {
  paths: { route: string; name: string }[]
}) => {
  const pathname = usePathname()

  return (
    <div className="bg-white rounded-md w-full border-[1px] border-gray-200 transition-all grid md:grid-cols-1 grid-cols-2">
      {paths.map(({ route, name }, index) => {
        const active = pathname.toLowerCase() === route.toLowerCase()
        const activeCls = active
          ? "bg-primary/10 text-primary font-semibold"
          : ""
        const border =
          index !== paths.length - 1 ? "border-b-[1px] border-b-gray-100" : ""
        const borderMobile =
          index % 2 === 0
            ? ""
            : "border-l-[1px] border-l-gray-100 md:border-l-[0px]"
        return (
          <Link
            href={route}
            key={route}
            className={`${activeCls} ${border} ${borderMobile} w-full block p-[22px] text-[#6A6B6C] hover:bg-primary/10`}
          >
            {name}
          </Link>
        )
      })}
    </div>
  )
}
