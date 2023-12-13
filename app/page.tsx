import React from "react"
import { Hero } from "./Hero"
import { ServiceCovered } from "./ServiceCovered"
import type { Metadata } from "next"
import { WhyChooseUs } from "./WhyChooseUs"
import { AppointmentForm } from "@/components/AppointmentForm"
import { FAQS } from "./FAQS"
import { Newsletter } from "./Newsletter"

export const metadata: Metadata = {
  title: "Flourish Care",
  description: "Flourish Advanced Care",
}

const Home = () => {
  return (
    <div>
      <Hero />
      <ServiceCovered />
      <div className="md:w-[80%] md:mx-auto">
        <WhyChooseUs />
      </div>
      <AppointmentForm />
      <FAQS />
      <Newsletter />
    </div>
  )
}

export default Home
