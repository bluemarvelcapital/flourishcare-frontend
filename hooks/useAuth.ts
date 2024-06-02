import { useLocalStorage } from "usehooks-ts"

export const useAuth = () => {
  const [auth, setAuth] = useLocalStorage<{
    accessToken: string
    roleId: string
    role: string
    email: string
    refreshToken: string
  }>("flourish-auth", {
    accessToken: "",
    roleId: "",
    role: "",
    email: "",
    refreshToken: "",
  })
  return { auth, setAuth }
}
