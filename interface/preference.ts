import { UserI } from "./user"

export interface PreferenceI {
  id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

export interface UpdateUserPreferenceI {
  preferenceId: string
  status: "ACTIVE" | "INACTIVE"
  accessToken: string
}

export interface UserPreferenceI {
  id: string
  status: "ACTIVE" | "INACTIVE"
  userId: string
  createdAt: string
  updatedAt: string
  preferenceId: string
  user: UserI
  preference: PreferenceI[]
}
