import { UserI } from "./user"

export interface ClientI {
  id: string
  userId: string
  address: null | string
  accountManagerId: null | string
  createdAt: string
  updatedAt: string
  user: UserI
}

export interface AddClientResponseI {
  user: UserI
  endUserInfo: {
    id: string
    userId: string
    accountManagerId: string
    createdAt: string
  }
}

export interface AddClientRequestI {
  firstname: string
  lastname: string
  email: string
  accessToken: string
}
