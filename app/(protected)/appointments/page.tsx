import React from "react"
import { Metadata } from "next"
import { Container } from "@/components/Container"
import { PageTitle } from "@/components/PageTitle"
import { AppointmentsTable } from "./AppointmentTable"

export const metadata: Metadata = {
  title: "Appointments | Flourish Advanced Care",
}

const Appointments = () => {
  return (
    <div>
      <Container>
        <PageTitle title="Appointments" />
        <AppointmentsTable />
      </Container>
    </div>
  )
}

export default Appointments
