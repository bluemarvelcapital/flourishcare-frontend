import React from "react"
import { Hero } from "./Hero"
import { Content } from "./Content"

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
