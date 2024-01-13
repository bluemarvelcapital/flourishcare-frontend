import React from "react"
import { Hero } from "./Hero"
import { Content } from "./Content"

export const metadata = {
  title: "Flourish Care - About Us",
}

const AboutUs = () => {
  return (
    <div>
      <Hero />
      <div className="mx-auto max-w-[40rem] prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
        <Content />
      </div>
    </div>
  )
}

export default AboutUs
