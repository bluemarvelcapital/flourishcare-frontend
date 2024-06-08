import { useLocalStorage } from "usehooks-ts"

export const useAuth = () => {
  const [auth, setAuth] = useLocalStorage<{
    accessToken: string
    roleId: string
    role: string
    email: string
    refreshToken: string
    firstname: string
    lastname: string
    profilePicture: string
  }>("flourish-auth", {
    accessToken: "",
    roleId: "",
    role: "",
    email: "",
    refreshToken: "",
    firstname: "",
    lastname: "",
    profilePicture: "",
  })
  return { auth, setAuth }
}

export const useLogout = () => {
  const { setAuth } = useAuth()
  const logout = () => {
    setAuth({
      accessToken: "",
      roleId: "",
      role: "",
      email: "",
      refreshToken: "",
      firstname: "",
      lastname: "",
      profilePicture: "",
    })
  }
  return { logout }
}
