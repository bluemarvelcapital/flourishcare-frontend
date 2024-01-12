import React from "react"
import { Hero } from "./Hero"
// import { Hero } from "@/components/Hero"
import { ServiceCovered } from "./ServiceCovered"
import type { Metadata } from "next"
import { WhyChooseUs } from "./WhyChooseUs"
import { AppointmentForm } from "@/components/AppointmentForm"
import { FAQS } from "./FAQS"
import { Newsletter } from "./Newsletter"
import { text } from "stream/consumers"
import { LicensedBy } from "./LicensedBy"
import { Reviews } from "./Reviews"

export const metadata: Metadata = {
  title: "Flourish Care",
}

const Home = () => {
  return (
    <div>
      {/* <Hero {...hero_props} /> */}
      <Hero />
      <LicensedBy />
      <ServiceCovered />
      <div className="container_xl">
        <WhyChooseUs />
        <Reviews />
      </div>
      <AppointmentForm />
      {/* <FAQS /> */}
      {/* <Newsletter /> */}
    </div>
  )
}

export default Home
