"use client"
import React from "react"
import { Select, List, Col, Row } from "antd"
import { BlogCard } from "@/components/BlogCard"
import { BlogCardI } from "@/interface/blogCard"
import { data } from "./dummyData"
import { useGetBlogPostsQuery } from "@/services/blog.service"
import { PiSpinner } from "react-icons/pi"

const filterOptions = [
    { label: "Most Recent", value: "recent" },
    { label: "Oldest", value: "oldest" },
    { label: "Most Popular", value: "most-popular" },
]

export const Content = () => {
    const { data: blogData, isLoading: blogPostsInfoIsLoading } = useGetBlogPostsQuery(undefined)

    console.log({ blogData })
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
                {
                    blogData?.data.blogPosts
                        ? <>
                            <List
                                grid={{ gutter: [24, 16], column: 3, md: 2, sm: 1, xs: 1 }}
                                dataSource={blogData.data.blogPosts.map(post => ({
                                    title: post.title,
                                    description: post.description,
                                    coverImage: post.cover_image,
                                    previewImage: post.preview_image,
                                    image: post.cover_image,
                                    tag: post.tags[0],
                                    content: post.content,
                                    href: `/blog/${post.id}`,
                                    createdAt: post.createdAt,
                                    updatedAt: post.updatedAt,
                                    id: post.id,
                                    status: post.status
                                }))}
                                pagination={{ pageSize: 9 }}
                                renderItem={(item: BlogCardI) => {
                                    return (
                                        <List.Item>
                                            <BlogCard {...item} />
                                        </List.Item>
                                    )
                                }}
                            />
                        </>
                        : <>
                            <PiSpinner className="animate-spin text-[#1E1E1E] text-5xl mx-auto" />
                        </>
                }

                {/* If no blog posts show no blog posts currently */}
                <div className="flex justify-center items-center h-[300px]">
                    {
                        blogPostsInfoIsLoading && <PiSpinner className="animate-spin text-[#1E1E1E] text-5xl mx-auto" />
                    }

                    {
                        !blogPostsInfoIsLoading && !blogData?.data.blogPosts.length && <p className="text-[#1E1E1E] text-2xl">No blog posts currently</p>
                    }

                </div>
            </div>
        </div>
    )
}
