import { API_URL } from "@/constants/config"
import {
  AddClientRequestI,
  AddClientResponseI,
  ClientI,
} from "@/interface/profile"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const profilesApi = createApi({
  reducerPath: "profilesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/profile`,
  }),
  endpoints: (builder) => ({
    getClients: builder.query<ClientI[], { accessToken: string }>({
      query: ({ accessToken }) => {
        return {
          url: "/client",
          method: "GET",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: { clients: ClientI[] } }) => {
        return res.data.clients
      },
    }),

    addClient: builder.mutation<AddClientResponseI, AddClientRequestI>({
      query: ({ accessToken, ...data }) => {
        return {
          url: "/client/new",
          method: "POST",
          body: data,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: AddClientResponseI }) => {
        return res.data
      },
    }),
  }),
})

export const { useGetClientsQuery, useAddClientMutation } = profilesApi
