import React from "react"
import { JobCard } from "@/components/JobCard"

export const Jobs = () => {
  return (
    <div className="md:p-[24px] py-[16px]">
      <div className="mb-[1.5rem]">
        <h3 className="md:text-[24px] font-[600]">Browse Job</h3>
        <p className="text-[#7B798A]">
          Apply to become an employee with Flourish Advanced Care.
        </p>
      </div>

      <div className="flex flex-col gap-7">
        <JobCard
          title="Home Care Assistant"
          experience="4-10 years"
          extra_info="8 hours ago"
          currency="GBP"
          payRange="40000-60000"
          tags={["employee", "full time", "health worker"]}
        />
        <JobCard
          title="Home Care Assistant"
          experience="4-10 years"
          extra_info="8 hours ago"
          currency="GBP"
          payRange="40000-60000"
          tags={["employee", "full time", "health worker"]}
        />
      </div>
    </div>
  )
}
