import { Container } from "@/components/Container"
import { PageTitle } from "@/components/PageTitle"
import React from "react"
import { BookingForm } from "./BookingForm"

const AppointmentPage = () => {
  return (
    <Container>
      <PageTitle title="Appointment" link_text="Make Booking" />
      <BookingForm />
    </Container>
  )
}

export default AppointmentPage
