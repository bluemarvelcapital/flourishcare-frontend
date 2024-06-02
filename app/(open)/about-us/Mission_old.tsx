"use client"
import React, { FC } from "react"
import { Tab } from "@/components/Tab"
import Fade from "react-reveal/Fade"

const MissionTabContent: FC<{ content: string[] }> = ({ content }) => {
  return (
    <Fade cascade top>
      <div className="bg-white px-[30px] py-[60px] md:rounded-tl-[80px] md:rounded-br-[80px] flex flex-col md:gap-[40px] gap-[20px]  lg:min-h-[30rem]">
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
          `To provide safe, personalized care and enrich the lives of our clients and 
their families.`,
        ]}
      />
    ),
  },
  {
    title: "Our Values",
    content: (
      <MissionTabContent
        content={[
          `Kindness, respect, and a commitment to building genuine relationships with 
those we care for`,
        ]}
      />
    ),
  },
  {
    title: "Our Commitment",
    content: (
      <MissionTabContent
        content={[
          `Your Care is Our Priority: Ensuring that every moment counts and every client feels at 
home with our services`,
        ]}
      />
    ),
  },
]

export const Mission = () => {
  return (
    <div className="lg:p-[60px] p-[20px] ">
      <Tab items={tabItems} />
    </div>
  )
}
