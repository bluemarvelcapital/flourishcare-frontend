"use client"
import React, { ReactNode } from "react"
import { ConfigProvider } from "antd"

export const AntProvider = ({
  children,
  primary_color,
}: {
  children: ReactNode
  primary_color?: string
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primary_color || "#66ACDC",
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
