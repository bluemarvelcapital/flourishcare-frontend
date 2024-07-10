import React from "react"
import { UserBookingsTable } from "./UserBookingsTable"

export const metadata = {
  title: "Appointments - Sub User",
}

const SubUserAppointmentsPage = () => {
  return (
    <div className="">
      <UserBookingsTable />
    </div>
  )
}

export default SubUserAppointmentsPage
