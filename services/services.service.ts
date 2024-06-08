import { API_URL } from "@/constants/config"
import { ServiceI, ServiceReqParams } from "@/interface/service"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/service`,
  }),
  endpoints: (builder) => ({
    getServices: builder.query<ServiceI[], ServiceReqParams>({
      query: ({ ...params }) => {
        return {
          url: "/",
          method: "GET",
          params: {
            ...params,
            page: params.page || 1,
            limit: params.limit || 20,
          },
        }
      },
      transformResponse: (res: { data: { services: ServiceI[] } }) => {
        return res.data.services
      },
    }),
  }),
})

export const { useGetServicesQuery } = serviceApi
