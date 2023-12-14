import React from "react"
// import { Hero } from "./Hero"
import { Hero } from "@/components/Hero"
import { ServiceCovered } from "./ServiceCovered"
import type { Metadata } from "next"
import { WhyChooseUs } from "./WhyChooseUs"
import { AppointmentForm } from "@/components/AppointmentForm"
import { FAQS } from "./FAQS"
import { Newsletter } from "./Newsletter"
import { text } from "stream/consumers"

export const metadata: Metadata = {
  title: "Flourish Care",
  description: "Flourish Advanced Care",
}

const Home = () => {
  const hero_props = {
    heading: "the future of professional healthcare",
    text: `Dedicated to providing the highest level of domiciliary care to
            residential, nursing homes, and dementia care for older people in
            the comfort of their homes throughout the UK.`,
    btn_link: "/contact-us",
    btn_text: "Contact Us",
    image: "/hero-img1.jpg",
  }
  return (
    <div>
      <Hero {...hero_props} />
      <ServiceCovered />
      <div className="container_xl">
        <WhyChooseUs />
      </div>
      <AppointmentForm />
      <FAQS />
      <Newsletter />
    </div>
  )
}

export default Home
