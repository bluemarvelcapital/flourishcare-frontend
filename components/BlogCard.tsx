"use client"
import { BlogCardI } from "@/interface/blogCard"
import Link from "next/link"
import Image from "next/image"
import React from "react"
import { IoIosDocument } from "react-icons/io"

export const BlogCard: React.FC<BlogCardI> = ({ ...props }) => {
  const { title, description, image, tag, href } = props
  return (
    <Link
      href={href}
      className="md:h-[530px] w-full block rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden bg-white"
    >
      <div className="relative w-full h-[284px] overflow-hidden">
        <Image
          src={image}
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

        <h1 className="text-[24px] text-gray-700 font-[500]">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </Link>
  )
}
