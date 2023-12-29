import React from "react"
import { Hero } from "./Hero"
import { AppointmentForm } from "@/components/AppointmentForm"
import { Mission } from "./Mission"
import { CoreValues } from "./CoreValues"

export const metadata = {
  title: "Flourish Care - About Us",
}

const AboutUs = () => {
  return (
    <div>
      <Hero />
      <div className="container_xl md:w-[80%] md:mx-auto">
        <Mission />
      </div>
      <CoreValues />
      <AppointmentForm />
    </div>
  )
}

export default AboutUs
