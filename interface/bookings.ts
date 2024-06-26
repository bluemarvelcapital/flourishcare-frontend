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
  documents: string[]
  approvalTimestamps: string[]
  approvalStatus: {
    carePlan: boolean
    contract: boolean
    personalizedAssessmentReport: boolean
  }
  paid: boolean
  updatedAt: string
}
