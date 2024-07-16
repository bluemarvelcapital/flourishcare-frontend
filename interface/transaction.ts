import { UserI } from "./user"

export interface TransactionI {
  createdAt: string
  amount: string
  bookingId: string
  userId: string
  id: string
  providerReference: string
  status: "PENDING" | "APPROVED"
  reference: string
  currency: string
  provider: string
  updatedAt: string
  orderNumber: number
  user: UserI
}
