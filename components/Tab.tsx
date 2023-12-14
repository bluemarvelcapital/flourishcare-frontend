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
    <div className="flex md:justify-between flex-col gap-[30px] md:flex-row w-full md:items-center">
      <Fade top cascade>
        <div className="flex md:gap-[80px] md:items-start md:flex-col flex-row">
          {titles.map((title, index) => (
            <h2
              key={index}
              onClick={() => setActiveTab(index)}
              className={`cursor-pointer md:text-[55px] md:leading-[55px] text-primary px-[10px] ${
                activeTab === index
                  ? "opacity-1 md:border-l-[6px] md:border-b-[0px] border-l-[0px] border-b-[6px] border-[#82B04D]"
                  : "opacity-[0.5]"
              }`}
            >
              {title}
            </h2>
          ))}
        </div>
      </Fade>

      <div className="md:w-[50%]">
        {contents.map((content, index) => (
          <div
            key={index}
            className={`${
              activeTab === index ? "block" : "hidden"
            } md:text-[22px] text-[#4F4F4F`}
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  )
}
