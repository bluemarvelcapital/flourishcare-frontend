"use client"
import { store } from "@/context/store"
import React from "react"
import { Provider } from "react-redux"

interface props {
  children: React.ReactNode
}

export const ClientProvider = ({ children }: props) => {
  return <Provider store={store}>{children}</Provider>
}
