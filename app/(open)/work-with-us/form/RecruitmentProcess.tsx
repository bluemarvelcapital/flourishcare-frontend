import React from "react"
import { NationalFormSteps } from "./NationalFormSteps"
import { CandidateForm } from "./CandidateForm"

export const RecruitmentProcess = () => {
  return (
    <div className="md:py-[5rem] py-[3rem]">
      <h2 className="text-center text-xl md:text-[48px] text-bold">
        Our Registration Process For Recruitment
      </h2>
      <CandidateForm />
    </div>
  )
}
