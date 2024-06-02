import React from "react"
import { Hero } from "./Hero"
import { Faqs } from "./Faqs"

export const metadata = {
  title: "Flourish Care - FAQs",
}

const AboutUs = () => {
  return (
    <div>
      <Hero />
      <div className="container_xl md:w-[80%] md:mx-auto">
        <Faqs />
      </div>
    </div>
  )
}

export default AboutUs
