"use client"
import React from "react"
import { LoadingOutlined } from "@ant-design/icons"

export const Loader = ({ name }: { name?: string }) => {
  return (
    <div className="w-full h-[20rem] flex flex-col justify-center items-center">
      <div className="flex gap-3 items-center">
        <LoadingOutlined />
        <span>Loading {name || ""}</span>
      </div>
    </div>
  )
}
