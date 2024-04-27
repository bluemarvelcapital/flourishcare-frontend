"use client"
import React from "react"
import { Select, List } from "antd"
import { BlogCard } from "@/components/BlogCard"
import { BlogCardI } from "@/interface/blogCard"
import _blogPosts from '../../db/data/posts.json'
import BlogQueryApi from "@/db/query/blog"
const filterOptions = [
    { label: "Most Recent", value: "creatdAt" },
]


export const Content = () => {
    const blogPosts = BlogQueryApi.getAllBlogPosts()

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
                    blogPosts.length > 0
                        ? <>
                            <List
                                grid={{ gutter: [24, 16], column: 3, md: 2, sm: 1, xs: 1 }}
                                dataSource={blogPosts.map(post => ({
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
                            <p className="text-[#1E1E1E] text-2xl">No blog posts currently</p>
                            {/* <PiSpinner className="animate-spin text-[#1E1E1E] text-5xl mx-auto" /> */}
                        </>
                }

            </div>
        </div>
    )
}
