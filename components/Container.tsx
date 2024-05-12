"use client"
import React, { ReactNode } from "react"

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[1300px] mx-auto px-[1rem]">{children}</div>
}
