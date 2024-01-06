"use client"
import React from "react"
import { Hero } from "./Hero"
import { RecruitmentProcess } from "./RecruitmentProcess"

const WorkingWithUs = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="container_xl">
        <RecruitmentProcess />
      </div>
    </div>
  )
}

export default WorkingWithUs
