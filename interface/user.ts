export interface UserI {
  accountStatus: {
    emailVerified: boolean
    activated: boolean
  }
  _id: string
  firstname: string
  lastname: string
  email: string
  role: string
  __v: number
  createdAt: string
  updatedAt: string
}
