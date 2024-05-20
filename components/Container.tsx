"use client"
import React, { ReactNode } from "react"

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="py-[2rem] md:py-[3rem] lg:py-[6rem]">
      <div className="max-w-[1300px] mx-auto px-[1rem] ">{children}</div>
    </div>
  )
}
