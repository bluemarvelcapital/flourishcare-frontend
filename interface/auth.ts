import { UserI } from "./user"

export interface LoginRequestI {
  email: string
  password: string
}

export interface LoginResponse {
  user: UserI
  accessToken: string
  refreshToken: string
}

export interface SignUpRequestI {
  email: string
  password: string
  fullname: string
  confirm_password: string
  roleId: string
}
