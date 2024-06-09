"use client"
import Link from "next/link"
import Image from "next/image"
import React from "react"
import { BlogI } from "@/interface/blog"
import moment from "moment"
import { BsClockHistory } from "react-icons/bs"

export const BlogCard: React.FC<BlogI> = ({ ...props }) => {
  const { title, description, preview_image, blogTags, id, createdAt } = props
  const colors = [
    { bg: "bg-[#04BD4B1A]", text: "text-[#04BD4B]" },
    { bg: "bg-[#66ACDC1A]", text: "text-[#66ACDC]" },
  ]
  return (
    <Link
      href={`/blog/${id}`}
      className="md:h-[560px] w-full block rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden bg-white"
    >
      <div className="relative w-full h-[284px] overflow-hidden">
        <Image
          src={preview_image}
          alt={title}
          className="w-full h-full object-cover rounded-t-xl"
          fill
        />
      </div>
      <div className="md:px-[24px] md:py-[24px] p-[16px] flex flex-col md:justify-between gap-3">
        <div className="flex items-center gap-2">
          <BsClockHistory />
          <p>{moment(createdAt).format("LL")}</p>
        </div>
        <h1 className="text-[24px] text-gray-700 font-[500]">{title}</h1>
        <p className="text-gray-500">{description}</p>
        <div className="flex items-center flex-wrap gap-1">
          {blogTags.slice(0, 2).map((tag, index) => {
            return (
              <span
                className={`${colors[index].bg} ${colors[index].text} px-3 py-1 rounded-md capitalize inline-block`}
                key={tag.id}
              >
                {tag.name}
              </span>
            )
          })}
        </div>
      </div>
    </Link>
  )
}
