"use client"
import React, { FC } from "react"
import Fade from "react-reveal/Fade"

interface Props {
  items: { title: string; content: React.ReactNode }[]
}

export const Tab: FC<Props> = ({ items }) => {
  const [activeTab, setActiveTab] = React.useState(0)
  const titles = items?.map(({ title }) => title)
  const contents = items?.map(({ content }) => content)
  return (
    <div className="flex lg:justify-between flex-col gap-[30px] lg:flex-row w-full lg:items-center">
      <div className="flex lg:gap-[80px] lg:items-start lg:flex-col flex-row">
        {titles.map((title, index) => (
          <h2
            key={index}
            onClick={() => setActiveTab(index)}
            className={`cursor-pointer md:text-[20px] lg:text-[55px] lg:leading-[55px] text-primary px-[10px] lg:hover:border-l-[6px] hover:border-[#82B04D] hover:opacity-[1] transition-all ${
              activeTab === index
                ? "opacity-[1] lg:border-l-[6px] lg:border-b-[0px] border-l-[0px] border-b-[6px] border-[#82B04D]"
                : "opacity-[0.5]"
            }`}
          >
            <Fade top cascade>
              {title}
            </Fade>
          </h2>
        ))}
      </div>

      <div className="lg:w-[50%]">
        {contents.map((content, index) => (
          <div
            key={index}
            className={`${
              activeTab === index ? "block" : "hidden"
            } lg:text-[22px] text-[#4F4F4F]`}
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  )
}
