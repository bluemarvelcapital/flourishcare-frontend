import { UserI } from "./user"

export interface SubmitReviewI {
  serviceId: string
  remarks: string
  rating: number
  accessToken: string
}

export interface ReviewI {
  id: string
  remarks: string
  rating: number
  serviceId: string
  visible: true
  createdAt: string
  updatedAt: string
  userId: string
  user: UserI
}
