import React from "react"
import { notFound } from "next/navigation"
import { API_URL } from "@/constants/config"
import axios from "axios"
import { BlogI } from "@/interface/blog"
import { Container } from "@/components/Container"
import Image from "next/image"
import { BsClockHistory } from "react-icons/bs"
import moment from "moment"
import { GoBack } from "@/components/GoBack"

export const getStaticParams = async () => {
  const response = await axios.get(API_URL + "/blog")
  const blogs: BlogI[] = response.data.data.blogPosts
  return blogs.map((blog) => {
    return {
      id: blog.id,
    }
  })
}

export async function generateMetadata({
  params,
}: {
  params: { blog_id: string }
}) {
  const { blog_id } = params
  // params contains the blog `blog_id`.
  // If the route is like /blogs/1, then params.blog_id is 1
  const res = await axios.get(API_URL + `/blog/info/?blogPostId=${blog_id}`)
  const blog: BlogI = res.data.data.blogPost
  if (!blog) {
    return {
      title: "404",
    }
  }
  // Pass blog data to the page via props
  return {
    title: blog.title,
    description: blog.description,
  }
}

// This also gets called at build time
async function fetchBlogPost(id: string) {
  // params contains the blog `id`.
  // If the route is like /blogs/1, then params.id is 1
  const res = await axios.get(API_URL + `/blog/info/?blogPostId=${id}`)
  const blogPost: BlogI = res.data.data.blogPost

  // Pass blog data to the page via props
  return blogPost
}

const BlogPage = async ({ params }: { params: { blog_id: string } }) => {
  const { blog_id } = params
  const blogPost = await fetchBlogPost(blog_id)
  const colors = [
    { bg: "bg-[#04BD4B1A]", text: "text-[#04BD4B]" },
    { bg: "bg-[#66ACDC1A]", text: "text-[#66ACDC]" },
  ]
  return (
    <div className="max-w-[1680px] mx-auto">
      <div>
        <div className="py-[2rem] md:py-[3rem] lg:py-[4rem] px-10">
          <GoBack />
          <div>
            <div className="relative w-full md:h-[590px] h-[350px] mb-10">
              <Image
                src={blogPost.cover_image}
                alt={blogPost.description}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center flex-wrap gap-1">
                {blogPost.blogTags.slice(0, 2).map((tag, index) => {
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
              <div>
                <div className="flex items-center gap-2 text-sm">
                  <BsClockHistory />
                  <p>{moment(blogPost.createdAt).format("LL")}</p>
                </div>
                <h1 className="text-[24px] text-gray-700 font-[500]">
                  {blogPost.title}
                </h1>
                <p className="text-gray-500">{blogPost.description}</p>
              </div>
            </div>
            <div className="px-6 py-10 leading-7">
              <p
                dangerouslySetInnerHTML={{ __html: `${blogPost.content}` }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
