import React from "react"
import { Metadata } from "next"
import { Container } from "@/components/Container"
import { PageTitle } from "@/components/PageTitle"
import { BookingsTable } from "./BookingsTable"

export const metadata: Metadata = {
  title: "Bookings | Flourish Advanced Care",
}

const Bookings = () => {
  return (
    <div>
      <Container>
        <PageTitle title="Bookings" />
        <BookingsTable />
      </Container>
    </div>
  )
}

export default Bookings
