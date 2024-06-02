"use client"
import React from "react"
import { NationalFormSteps } from "./NationalFormSteps"
import { InternationFormSteps } from "./InternationFormSteps"
import { Divider, Form } from "antd"

const tabs = [
  {
    text: "National Candidates Registration Form",
    content: <NationalFormSteps />,
  },
  {
    text: "International Candidates Registration Form",
    content: <InternationFormSteps />,
  },
]

export const CandidateForm = () => {
  const [activeTab, setActiveTab] = React.useState(0)
  return (
    <div>
      <div className="md:p-10 p-5 flex md:gap-[2rem] gap-[1rem] justify-center transition-all">
        {tabs.map((tab, index) => {
          const active = activeTab === index
          return (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex gap-4 items-start md:h-[157px] lg:h-[110px] cursor-pointer 
            border-[1px] rounded-[10px] p-[1rem] hover:border-success hover:text-white hover:bg-success 
            flex flex-col justify-center items-center ${
              active
                ? "bg-success text-white border-success"
                : "text-base border-base"
            }`}
            >
              <h3 className="md:text-xl font-normal md:w-[90%] text-center">
                {tab.text}
              </h3>
            </div>
          )
        })}
      </div>
      <Divider />
      <div className="md:px-10">{tabs[activeTab].content}</div>
    </div>
  )
}
