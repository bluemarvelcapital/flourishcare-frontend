export interface UserI {
  accountStatus: {
    emailVerified: boolean
    activated: boolean
  }
  _id: string
  firstname: string
  lastname: string
  email: string
  role: {
    id: string
    name: string
    createdAt: string
    updatedAt: string
  }
  profilePicture: string
  roleId: string
  endUserId: string
  superAdminId: string
  accountManagerId: string
  adminId: string
  __v: number
  createdAt: string
  updatedAt: string
}
