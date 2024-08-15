import { Avatar } from "antd"
import React from "react"

interface props {
  heading: string
  body: string
  background: string
}

export const MissionCard: React.FC<props> = ({ background, ...props }) => {
  return (
    <div
      className="py-6 px-[20px] rounded-[30px] flex flex-col  items-center gap-[8px] text-center text-white"
      style={{ background }}
    >
      <Avatar src="/worldcare.svg" size={"large"} />
      <h3 className="md:text-[25px] text-[20px] font-bold">{props.heading}</h3>
      <p className="md:text-[20px]">{props.body}</p>
    </div>
  )
}
