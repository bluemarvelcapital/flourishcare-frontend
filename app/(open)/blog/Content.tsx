"use client"
import React, { useEffect, useState } from "react"
import { Select, List, Col, Row } from "antd"
import { BlogCard } from "@/components/BlogCard"
import { useGetBlogPostsQuery } from "@/services/blog.service"
import { BlogI } from "@/interface/blog"

const filterOptions = [
  { label: "Most Recent", value: "recent" },
  { label: "Oldest", value: "oldest" },
  // { label: "Most Popular", value: "most-popular" },
]

export const Content = () => {
  const { data, isLoading } = useGetBlogPostsQuery({})
  const [dataState, setDataState] = useState(data)
  const sort = (value: string) => {
    const newState = data
      ?.slice()
      ?.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
    if (value === "oldest") {
      setDataState(newState)
    }
    if (value === "recent") {
      setDataState(newState?.slice().reverse())
    }
  }
  useEffect(() => {
    if (data) {
      setDataState(data)
    }
  }, [data])
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
          onChange={sort}
        />
      </div>
      <div className="mb-6">
        <List
          grid={{ gutter: [24, 16], column: 3, md: 2, sm: 1, xs: 1 }}
          dataSource={dataState}
          loading={isLoading}
          pagination={{ pageSize: 9 }}
          renderItem={(item: BlogI) => {
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
