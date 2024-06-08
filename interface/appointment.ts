import { ServiceI } from "./service"
import { UserI } from "./user"

export interface AppointmentI {
  id: string
  userId: string
  tempUserId: string
  title: string
  reference: string
  status: string
  date: string
  note: string
  createdAt: string
  meta: Record<string, any>
  parentAppointmentId: string
  updatedAt: string
  parentAppointment: {
    id: string
    userId: string
    tempUserId: string
    title: string
    reference: string
    status: string
    date: string
    note: string
    createdAt: string
    meta: Record<string, any>
    parentAppointmentId: string
    updatedAt: string
  }
  childAppointments: [
    {
      id: string
      userId: string
      tempUserId: string
      title: string
      reference: string
      status: string
      date: string
      note: string
      createdAt: string
      meta: Record<string, any>
      parentAppointmentId: string
      updatedAt: string
    }
  ]
  services: ServiceI[]
  user: UserI
  tempUser: string
}

export interface CreateAppointmentReqI {
  title: string
  parentAppointmentId?: string // Only required when this is a followup appointment
  date: string
  serviceIds: string[]
  note: string
  address: string
  time: string
  duration: string
  accessToken: string
}
