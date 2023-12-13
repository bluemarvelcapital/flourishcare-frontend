import React from "react"
import { Hero } from "./Hero"
import { AppointmentForm } from "@/components/AppointmentForm"
import { TopQuality } from "./TopQuality"

export const metadata = {
  title: "Flourish Care - Our Services",
  description: "Flourish Advanced Care",
}

const Services = () => {
  return (
    <div>
      <Hero />
      <TopQuality />
      <AppointmentForm />
    </div>
  )
}

export default Services
