import React from "react"
import { Hero } from "./Hero"
import { AppointmentForm } from "@/components/AppointmentForm"
import { Mission } from "./Mission"
import { CoreValues } from "./CoreValues"

export const metadata = {
  title: "Flourish Care - About Us",
  description: "Flourish Advanced Care",
}

const AboutUs = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <CoreValues />
      <AppointmentForm />
    </div>
  )
}

export default AboutUs
