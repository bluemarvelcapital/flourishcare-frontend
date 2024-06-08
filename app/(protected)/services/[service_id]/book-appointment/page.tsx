import { Container } from "@/components/Container"
import { PageTitle } from "@/components/PageTitle"
import React from "react"
import { BookingForm } from "./BookingForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book Appointment | Flourish Advanced Care",
}

const AppointmentPage = () => {
  return (
    <Container>
      <PageTitle title="Appointment" link_text="Make Booking" />
      <BookingForm />
    </Container>
  )
}

export default AppointmentPage
