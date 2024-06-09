import { API_URL } from "@/constants/config"
import { AppointmentI, CreateAppointmentReqI } from "@/interface/appointment"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const appointmentApi = createApi({
  reducerPath: "appointmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/appointment`,
  }),
  endpoints: (builder) => ({
    createAppointment: builder.mutation<AppointmentI, CreateAppointmentReqI>({
      query: ({ accessToken, ...body }) => {
        return {
          url: "/new",
          method: "POST",
          body,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: { appointment: AppointmentI } }) => {
        return res.data.appointment
      },
    }),
    getAppointments: builder.query<AppointmentI[], { accessToken: string }>({
      query: ({ accessToken }) => {
        return {
          url: "/",
          method: "GET",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: { appointments: AppointmentI[] } }) => {
        return res.data.appointments
      },
    }),
  }),
})

export const { useCreateAppointmentMutation, useGetAppointmentsQuery } =
  appointmentApi
