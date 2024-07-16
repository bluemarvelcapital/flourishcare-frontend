import { API_URL } from "@/constants/config"
import { TransactionI } from "@/interface/transaction"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const transactionApi = createApi({
  reducerPath: "transactionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/transaction`,
  }),
  endpoints: (builder) => ({
    getTransactions: builder.query<TransactionI[], { accessToken: string }>({
      query: ({ accessToken }) => {
        return {
          url: "/",
          method: "GET",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: { transactions: TransactionI[] } }) => {
        return res.data.transactions
      },
    }),
    getTransaction: builder.query<
      TransactionI,
      { accessToken: string; transactionId: string }
    >({
      query: ({ accessToken, transactionId }) => {
        return {
          url: "/info",
          method: "GET",
          params: { transactionId },
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (res: { data: { transaction: TransactionI } }) => {
        return res.data.transaction
      },
    }),
  }),
})

export const { useGetTransactionsQuery, useGetTransactionQuery } =
  transactionApi
