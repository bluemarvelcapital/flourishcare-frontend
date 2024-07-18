"use client"
import React from "react"
import Image from "next/image"
import { Button } from "@/components/Button"
import Link from "next/link"
import Fade from "react-reveal/Fade"
import { Avatar } from "antd"

export const Hero = () => {
  return (
    <div className="relative w-full md:h-[55vh] h-[40vh] hero-h font-myriad-pro flex justify-center items-center flex-col">
      <div>
        <div className="absolute w-full h-full top-0 left-0 z-[0] ">
          <Image
            src={"/blog.jpg"}
            alt="Flourish Care Hero"
            fill={true}
            objectFit="cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#0000009d] z-[0]"></div>

        <Fade left>
          <div className="text-center md:w-[100%] w-[95%] mx-[auto] md:py-[154px] md:px-[64px] py-[1.5rem] px-[16px]">
            <h1 className="lg:text-[94px] md:text-[40px] text-[24px] text-white font-[800]">
              Blog
            </h1>
          </div>
        </Fade>
      </div>
    </div>
  )
}
