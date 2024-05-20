"use client"
import React, { ReactNode } from "react"
import { ConfigProvider } from "antd"

export const SuccessAntProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#04BD4B",
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
