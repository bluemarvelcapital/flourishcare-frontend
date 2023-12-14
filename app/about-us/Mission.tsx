"use client"
import React, { FC } from "react"
import { Tab } from "@/components/Tab"
import Fade from "react-reveal/Fade"

const MissionTabContent: FC<{ content: string[] }> = ({ content }) => {
  return (
    <Fade cascade top>
      <div className="bg-white px-[30px] py-[60px] md:rounded-tl-[80px] md:rounded-br-[80px] flex flex-col md:gap-[40px] gap-[20px]  md:h-[27rem]">
        {content.map((item, index) => (
          <div
            key={index}
            className="flex md:gap-[49px] gap-[20px] justify-start items-start"
          >
            <div className="min-w-[29px] h-[8px] rounded-[11px] bg-[#82B04D]"></div>
            <p className="text-[#000] text-[16px] md:text-[22px]">{item}</p>
          </div>
        ))}
      </div>
    </Fade>
  )
}

const tabItems = [
  {
    title: "Our Mission",
    content: (
      <MissionTabContent
        content={[
          `To adopt the safest recruitment guidelines and procedures with commitment
and compassion to care`,
          `To match and assess the needs of the individuals
concerned with caregiver’s experiences
for greater outcome of service delivery.`,
          `To offer care, compassion, good communication
skills, competencies, commitments and
collaborate to support families , patients in their 
comfort homes, in the communities such as care
homes and respite homes.`,
        ]}
      />
    ),
  },
  {
    title: "Our Aim",
    content: (
      <MissionTabContent
        content={[
          `Work in line and with consideration to policies in place for an effective and efficient result outcome`,
          `Promoting independence of patient with respect while maintaining dignity`,
          `Achieving excellent care services`,
        ]}
      />
    ),
  },
  {
    title: "Our Commitment",
    content: (
      <MissionTabContent
        content={[
          `Flourish advanced care limited is committed to promoting and safeguarding of adults and referring their care needs where necessary where positive decisions will be met to maintain the activities of patients daily living.`,
        ]}
      />
    ),
  },
]

export const Mission = () => {
  return (
    <div className="md:p-[60px] p-[20px] ">
      <Tab items={tabItems} />
    </div>
  )
}
