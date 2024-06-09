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

export const useGuestUser = () => {
  const [guestUser, setGuestUser] = useLocalStorage<{
    email: string
    firstname: string
    lastname: string
    phone: string
    has_registered: boolean
    joined: string
    id: string
  }>("flourish-guest", {
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    has_registered: false,
    joined: "",
    id: "",
  })
  return { guestUser, setGuestUser }
}
