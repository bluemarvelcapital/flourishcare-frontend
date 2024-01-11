"use client"
import React from "react"
import { RecruitmentProcess } from "./RecruitmentProcess"
import { Hero } from "./Hero"

const WorkingWithUs = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="container_xl" id="form">
        <RecruitmentProcess />
      </div>
    </div>
  )
}

export default WorkingWithUs
