import { API_URL } from "@/constants/config"
import { BookingI } from "@/interface/bookings"
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
  }),
})

export const { useGetBookingsQuery } = bookingsApi
