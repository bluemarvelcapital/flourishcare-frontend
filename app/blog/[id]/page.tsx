'use client'
import React from "react"
import { Hero } from "../Hero"
import { usePathname } from "next/navigation"
import { useGetBlogPostByIdQuery } from "@/services/blog.service"
import { data } from "../dummyData"
import { IoIosDocument } from "react-icons/io"
import Image from "next/image"
import Markdown from 'markdown-parser-react';
import ReactHtmlParser from 'react-html-parser';
import { useSelector } from "react-redux"
import { RootState } from "@/context/store"

const BlogPostPage = () => {
    const pathname = usePathname()
    const blogPostId = pathname.split("/").pop()
    const { postToShow } = useSelector((state: RootState) => state.blog)

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
                        <div className="relative w-full h-[584px] rounded-t-xxl overflow-hidden bg-gray-200" style={{ margin: '0 auto' }}>
                            <Image
                                src={postToShow.cover_image} alt={postToShow.title}
                                fill
                                className="w-full h-[584px] object-cover rounded-t-xxl" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                        </div>

                        <div className="md:px-[40px] md:py-[38px] p-[24px] flex flex-col gap-3">
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
                        <div className="md:px-[40px] md:py-[38px] p-[24px]">
                            {ReactHtmlParser(postToShow.content)}
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default BlogPostPage
