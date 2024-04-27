'use client'
import React from "react"
import { Hero } from "../Hero"
import { usePathname } from "next/navigation"
import { useGetBlogPostByIdQuery, useGetBlogPostsQuery } from "@/services/blog.service"
import { data } from "../dummyData"
import { IoIosDocument } from "react-icons/io"
import Image from "next/image"
import Markdown from 'markdown-parser-react';
import ReactHtmlParser from 'react-html-parser';
import { useSelector } from "react-redux"
import { RootState } from "@/context/store"
import { PiSpinner } from "react-icons/pi"
import { BlogCard } from "@/components/BlogCard"
import { BlogCardI } from "@/interface/blogCard"
import { List, Select } from "antd"
import DomPurify from 'dompurify';
import { JSDOM } from 'jsdom'


const RelatedPosts = ({ currentPostId }: { currentPostId?: string }) => {
    // TODO: Fetch related posts similar to the current post
    currentPostId
    const { data: blogData, isLoading: blogPostsInfoIsLoading } = useGetBlogPostsQuery(undefined)

    return (
        <div className="md:px-[2rem] px-[1.5rem]">
            <div className="py-5 pt-9 flex justify-between items-center">
                <h2 className="md:text-[32px] text-[24px] font-[500] mb-[20px]">
                    Related Posts
                </h2>
            </div>
            <div className="mb-6">
                {
                    blogData?.data.blogPosts
                        ? <>
                            <List
                                grid={{ gutter: [24, 16], column: 3, md: 2, sm: 1, xs: 1 }}
                                dataSource={blogData.data.blogPosts.slice(2).map(post => ({
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
                                pagination={{ pageSize: 3 }}
                                renderItem={(item: BlogCardI) => {
                                    return (
                                        <List.Item>
                                            <BlogCard {...item} />
                                        </List.Item>
                                    )
                                }}
                            />
                        </>
                        : blogPostsInfoIsLoading
                            ? <div className="flex justify-center items-center h-[400px]">
                                <PiSpinner className="text-[40px] text-primary" />
                            </div>
                            : <div className="flex justify-center items-center h-[400px]">
                                <h2 className="text-[24px] text-gray-500">No blog post found</h2>
                            </div>
                }

            </div>
        </div>
    )
}

const BlogPostPage = () => {
    const pathname = usePathname()
    const blogPostId = pathname.split("/").pop()
    const { postToShow } = useSelector((state: RootState) => state.blog)

    console.log({ postToShow })
    return (
        <div>
            <Hero />
            {
                postToShow && <div className="container_xl w-full md:w-[75%] md:mx-auto" style={{
                    marginTop: '5rem', marginBottom: '5rem', maxWidth: '1200px'
                }}>
                    <div className="md:px-[2rem] px-[1.5rem] relative wf-full" style={{
                        alignItems: 'center',
                    }}>
                        <div className="relative w-full h-[584px] rounded-t-xxl overflow-hidden" style={{ margin: '0 auto' }}>
                            <Image
                                src={postToShow.cover_image} alt={postToShow.title}
                                fill
                                className="w-full h-[584px] object-cover rounded-t-xxl" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                        </div>

                        <div className="md:px-[40px] md:py-[38px] flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-success">
                                <div className="h-[24px] w-[24px] bg-success rounded-full inline-flex items-center justify-center">
                                    <IoIosDocument className="text-white text-[20px]" />
                                </div>
                                <span className="text-[14px] uppercase">{postToShow.tags[0] ?? 'Health care'}</span>
                            </div>

                            <h1 className="text-[24px] text-gray-700 font-[500]">{postToShow.title}</h1>
                            <p className="text-gray-500">{postToShow.description}</p>
                        </div>

                        {/* Display the content of the blog post */}
                        <div className="md:px-[40px] md:py-[38px] p-[24px]" dangerouslySetInnerHTML={{ __html: DomPurify.sanitize(postToShow.content) }}>
                        </div>
                    </div>

                    <RelatedPosts />
                </div>
            }
        </div>
    )
}

export default BlogPostPage
