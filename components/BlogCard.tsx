"use client"
import { BlogCardI } from "@/interface/blogCard"
import Link from "next/link"
import Image from "next/image"
import React from "react"
import { IoIosDocument } from "react-icons/io"
import { useDispatch } from "react-redux"
import { setPostToShow } from "@/context/blog.slice"

export const BlogCard: React.FC<BlogCardI> = ({ ...props }) => {
    const { title, description, image, tag, href, content } = props
    const dispatch = useDispatch()

    return (
        <Link
            onClick={() => {
                dispatch(setPostToShow({
                    title,
                    description,
                    cover_image: props.coverImage,
                    category: 'Health',
                    createdAt: props.createdAt,
                    id: props.id,
                    preview_image: props.previewImage,
                    status: props.status as any,
                    tags: [props.tag],
                    updatedAt: props.updatedAt,
                    content
                }))
            }}
            href={href}
            className="md:h-[530px] w-full block rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden bg-white"
        >
            <div className="relative w-full h-[284px] overflow-hidden">
                <Image
                    src={props.previewImage}
                    alt={title}
                    className="w-full h-full object-cover rounded-t-xl"
                    fill
                />
            </div>
            <div className="md:px-[40px] md:py-[38px] p-[24px] flex flex-col gap-3">
                <div className="flex items-center gap-2 text-success">
                    <div className="h-[24px] w-[24px] bg-success rounded-full inline-flex items-center justify-center">
                        <IoIosDocument className="text-white text-[20px]" />
                    </div>
                    <span className="text-[14px] uppercase">{tag}</span>
                </div>

                <h2 className="text-[20px] text-gray-700 font-[500]">{title}</h2>
                <p className="text-gray-500">{description.length > 30 ? description.slice(30) + ' ...' : description}</p>
            </div>
        </Link>
    )
}
