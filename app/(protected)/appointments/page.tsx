import React from "react"
import { Metadata } from "next"
import { Container } from "@/components/Container"
import { PageTitle } from "@/components/PageTitle"
import { AppointmentsTab } from "./AppointmentTab"

export const metadata: Metadata = {
  title: "Appointments | Flourish Advanced Care",
}

const Appointments = () => {
  return (
    <div>
      <Container>
        <PageTitle title="Appointments" />
        <AppointmentsTab />
      </Container>
    </div>
  )
}

export default Appointments
