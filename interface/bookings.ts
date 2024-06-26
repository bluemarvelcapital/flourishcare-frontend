export interface BookingI {
  id: string
  userId: string
  appointmentId: string
  reference: string
  status: "DRAFT" | "APPROVED" | "CANCELLED"
  createdAt: string
  personalizedAssessmentReport: string
  carePlan: string
  presignedContract: string
  signedContract: string
  invoice: string
  documents: { url: string; type: string; date: string }[]
  approvalTimestamps: string[]
  approvalStatus: {
    carePlan: boolean
    contract: boolean
    personalizedAssessmentReport: boolean
  }
  paid: boolean
  updatedAt: string
}

export interface UpdateBookingI {
  bookingId: string
  approvalStatus: {
    contract?: boolean // restricted to USER
    carePlan?: boolean // restricted to USER
    personalizedAssessmentReport?: boolean // restricted to ADMIN
  }
  accessToken: string
}
