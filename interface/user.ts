export interface UserI {
  accountStatus: {
    emailVerified: boolean
    activated: boolean
  }
  _id: string
  id: string
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
  gender: string
  address: string
  phone: string
  age: string
  __v: number
  createdAt: string
  updatedAt: string
}

export interface UpdateProfileI {
  gender: string
  address: string
  phone: string
  age: string
  userId?: string // Only required for Accountmanagers and Admins when updating data for another user
  accessToken: string
}
