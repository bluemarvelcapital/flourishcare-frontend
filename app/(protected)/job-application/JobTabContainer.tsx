"use client"
import React from "react"
import { Tabs } from "antd"
import type { TabsProps } from "antd"
import { Jobs } from "./Jobs"

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "View Jobs",
    children: <Jobs />,
  },
  {
    key: "2",
    label: "Application History",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Job Status",
    children: "Content of Tab Pane 3",
  },
]
export const JobTabContainer = () => {
  return (
    <div className="p-[24px] md:p-[56px] bg-white rounded-[10px] md:mb-[2rem] mb-[1rem]">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  )
}
