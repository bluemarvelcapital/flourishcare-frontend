"use client"
import { MissionCard } from "@/components/MissionCard"
import React from "react"
import Fade from "react-reveal/Fade"

const statements = [
  {
    heading: "Mission",
    body: "To provide safe, personalized care and enrich the lives of our clients and their families",
    background: "#66ACDC",
  },
  {
    heading: "Aim",
    body: "Kindness, respect, and a commitment to building genuine relationships with those we care for",
    background: "#04BD4B",
  },
  {
    heading: "Commitment",
    body: "We are committed to promoting and safeguarding of adults and referring their care needs where necessary ",
    background: "#66ACDC",
  },
]

export const Mission = () => {
  return (
    <div className="lg:p-[60px] p-[20px]">
      <h3 className="text-base text-center md:text-[35px] text-[25px] font-bold mb-[2.5rem]">
        Mission, Aim and Commitment
      </h3>
      <Fade right>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[20px]">
          {statements.map((statement) => (
            <MissionCard key={statement.heading} {...statement} />
          ))}
        </div>
      </Fade>
    </div>
  )
}
