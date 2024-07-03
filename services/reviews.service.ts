import { API_URL } from "@/constants/config"
import { ReviewI, SubmitReviewI } from "@/interface/review"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/review`,
  }),
  endpoints: (builder) => ({
    submitReview: builder.mutation<ReviewI, SubmitReviewI>({
      query: ({ accessToken, ...data }) => {
        return {
          url: "/new",
          method: "POST",
          body: data,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: { review: ReviewI } }) => {
        return res.data.review
      },
    }),
    getReviews: builder.query<
      ReviewI[],
      { accessToken: string; serviceId: string }
    >({
      query: ({ accessToken, serviceId }) => {
        return {
          url: "/",
          method: "GET",
          params: { serviceId },
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: { reviews: ReviewI[] } }) => {
        return res.data.reviews
      },
    }),
  }),
})

export const { useSubmitReviewMutation, useGetReviewsQuery } = reviewApi
