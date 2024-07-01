import { API_URL } from "@/constants/config"
import {
  BookingI,
  PaymentInitI,
  PaymentInitResponse,
  SignContractI,
  UpdateBookingI,
  UploadBookingDocI,
} from "@/interface/bookings"
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
    getBooking: builder.query<
      BookingI,
      { accessToken: string; bookingId: string }
    >({
      query: ({ accessToken, bookingId }) => {
        return {
          url: "/info",
          method: "GET",
          params: { bookingId },
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: { booking: BookingI } }) => {
        return res.data.booking
      },
    }),
    updateDocumentApprovalStatus: builder.mutation<BookingI, UpdateBookingI>({
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
    uploadSignedContract: builder.mutation<BookingI, UploadBookingDocI>({
      query: ({ accessToken, ...body }) => {
        const formData = new FormData()
        formData.append("bookingId", body.bookingId)
        formData.append("document", body.document)
        formData.append("documentType", body.documentType)

        return {
          url: "/doc",
          method: "PATCH",
          body: formData,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: { booking: BookingI } }) => {
        return res.data.booking
      },
    }),
    signContract: builder.mutation<BookingI, SignContractI>({
      query: ({ accessToken, ...body }) => {
        const formData = new FormData()
        formData.append("bookingId", body.bookingId)
        formData.append("document", body.document, "contract")

        return {
          url: "/sign",
          method: "POST",
          redirect: "follow",
          body: formData,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: { booking: BookingI } }) => {
        return res.data.booking
      },
    }),
    initPayment: builder.mutation<PaymentInitResponse, PaymentInitI>({
      query: ({ accessToken, ...body }) => {
        return {
          url: "/pay",
          method: "POST",
          body,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: PaymentInitResponse }) => {
        return res.data
      },
    }),
  }),
})

export const {
  useGetBookingsQuery,
  useUpdateDocumentApprovalStatusMutation,
  useGetBookingQuery,
  useUploadSignedContractMutation,
  useSignContractMutation,
  useInitPaymentMutation,
} = bookingsApi
