import { API_URL } from "@/constants/config"
import { BookingI, UpdateBookingI } from "@/interface/bookings"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const bookingsApi = createApi({
  reducerPath: "bookingsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/booking`,
  }),
  endpoints: (builder) => ({
    getBookings: builder.query<BookingI[], { accessToken: string }>({
      query: ({ accessToken }) => {
        return {
          url: "/",
          method: "GET",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: { bookings: BookingI[] } }) => {
        return res.data.bookings
      },
    }),
    acceptCarePlan: builder.mutation<BookingI, UpdateBookingI>({
      query: ({ accessToken, ...body }) => {
        return {
          url: "/doc/approval",
          method: "PATCH",
          body,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: { booking: BookingI } }) => {
        return res.data.booking
      },
    }),
  }),
})

export const { useGetBookingsQuery, useAcceptCarePlanMutation } = bookingsApi
