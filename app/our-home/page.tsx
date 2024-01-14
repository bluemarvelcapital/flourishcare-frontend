import React from "react"
import { Hero } from "./Hero"
import { Homes } from "./Homes"

export const metadata = {
  title: "Flourish Care - Our Home",
}

const OurHomes = () => {
  return (
    <div>
      <Hero />
      <div className="container_xl md:w-[80%] md:mx-auto">
        <Homes />
      </div>
    </div>
  )
}

export default OurHomes
