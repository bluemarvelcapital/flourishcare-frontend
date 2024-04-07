import { PageTitle } from "@/components/PageTitle"
import React from "react"
import { JobTabContainer } from "./JobTabContainer"
import "./job-app.css"

const page = () => {
  return (
    <div className="mx-auto md:w-[90%] lg:w-[85%] py-[2rem] md:py-[3rem] lg:py-[6rem] px-[1.5rem]">
      <PageTitle title="Job applications" />
      <JobTabContainer />
    </div>
  )
}

export default page
