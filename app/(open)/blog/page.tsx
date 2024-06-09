import React from "react"
import { Hero } from "./Hero"
import { Content } from "./Content"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Flourish Advanced Care",
  keywords: ["Flourish Advanced Care", "Flourish", "Advanced Care", "Blog"],
  publisher: "Flourish Advanced Care",
  openGraph: {
    title: "Blog | Flourish Advanced Caree",
    siteName: "Flourish Advanced care",
    images: [
      {
        url: "/opengraph-image.png",
      },
    ],
  },
}

const BlogPage = () => {
  return (
    <div>
      <Hero />
      <div className="container_xl md:w-[80%] md:mx-auto">
        <Content />
      </div>
    </div>
  )
}

export default BlogPage
