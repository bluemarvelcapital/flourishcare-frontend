"use client"
import React, { ReactNode } from "react"
import { ConfigProvider } from "antd"

export const AntProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#66ACDC",
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
