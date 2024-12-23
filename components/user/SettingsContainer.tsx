"use client"
import React from "react"
import { InPageNav } from "./InPageNav"

export const SettingsContainer = ({
  paths,
  children,
}: {
  paths: { route: string; name: string }[]
  children: React.ReactNode
}) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-start items-start content-start">
        <InPageNav {...{ paths }} />
        <div className="md:col-span-2 w-full">{children}</div>
      </div>
    </div>
  )
}
