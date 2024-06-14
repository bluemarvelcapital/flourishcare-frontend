"use client"

import { useSessionStorage } from "usehooks-ts"

export const useResetAuth = () => {
  const [resetAuth, setResetAuth] = useSessionStorage("flourish-reset-auth", {
    accessToken: "",
    email: "",
  })

  return { resetAuth, setResetAuth }
}
