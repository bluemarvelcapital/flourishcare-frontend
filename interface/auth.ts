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

export interface GuestSignupI {
  email: string
  firstname: string
  lastname: string
  phone: string
  has_registered: boolean
}

export interface GuestSignUpResponseI {
  createdAt: string
  id: string
  email: string
  firstname: string
  lastname: string
  phone: string
  updatedAt: string
}
