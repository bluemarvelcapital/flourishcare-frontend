import React from "react"
import { Metadata } from "next"
import { Container } from "@/components/Container"
import { PageTitle } from "@/components/PageTitle"
import { TransactionsTable } from "./TransactionsTable"

export const metadata: Metadata = {
  title: "Transactions | Flourish Advanced Care",
}

const Transactions = () => {
  return (
    <div>
      <Container>
        <PageTitle title="Transactions" />
        <TransactionsTable />
      </Container>
    </div>
  )
}

export default Transactions
