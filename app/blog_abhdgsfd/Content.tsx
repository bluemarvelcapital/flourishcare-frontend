"use client"
import React from "react"
import { Select, List, Col, Row } from "antd"
import { BlogCard } from "@/components/BlogCard"
import { BlogCardI } from "@/interface/blogCard"
import { data } from "./dummyData"

const filterOptions = [
  { label: "Most Recent", value: "recent" },
  { label: "Oldest", value: "oldest" },
  { label: "Most Popular", value: "most-popular" },
]

export const Content = () => {
  return (
    <div className="md:px-[2rem] px-[1.5rem]">
      <div className="py-5 pt-9 flex justify-between items-center">
        <h2 className="md:text-[48px] text-[24px] font-[500] mb-[20px]">
          Latest Blogs
        </h2>
        <Select
          defaultValue="recent"
          style={{ width: 150 }}
          className="text-[18px]"
          options={filterOptions}
          placeholder="filter"
        />
      </div>
      <div className="mb-6">
        <List
          grid={{ gutter: [24, 16], column: 3, md: 2, sm: 1, xs: 1 }}
          dataSource={data}
          pagination={{ pageSize: 9 }}
          renderItem={(item: BlogCardI) => {
            return (
              <List.Item>
                <BlogCard {...item} />
              </List.Item>
            )
          }}
        />
      </div>
    </div>
  )
}
