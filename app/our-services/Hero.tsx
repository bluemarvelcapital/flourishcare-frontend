"use client"
import React from "react"
import Image from "next/image"
import { Button } from "@/components/Button"
import Link from "next/link"
import Fade from "react-reveal/Fade"
import { Avatar } from "antd"

export const Hero = () => {
  return (
    <div className="relative w-full md:h-[95vh] h-[40vh] hero-h">
      <div className="absolute w-full h-full top-0 left-0 z-[-2] ">
        <Image
          src={"/home-hero3.svg"}
          alt="Flourish Care Hero"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#0000009d] z-[-1]"></div>

      <Fade left>
        <div className="text-center md:w-[70%] w-[90%] mx-[auto] md:py-[154px] md:px-[64px] py-[1.5rem] px-[16px]">
          <h1 className="md:text-[65px] text-[28px] text-white font-[800]">
            Our Services
          </h1>
          <h1 className="md:text-[55px] text-[28px] text-white font-[800]">
            Caring for the Whole Person
          </h1>
          <p className="md:text-[26px] md:leading-[141%] text-white mt-[1rem] md:w-[80%] mx-[auto]">
            We offer a range of in-home care services that ensure your loved
            ones receive the care they need in the environment they love
          </p>

          <Link href="/contact-us">
            <Button className="md:my-[52px] my-3">Contact Us</Button>
          </Link>
          <div className="flex items-center gap-[20px] justify-center text-white">
            <Avatar src="/avatar.svg" className="w-[63px] h-[63px]" />
            <div>
              <p className="text-start md:text-[19px]">Call Helen:</p>
              <p className="text-start md:text-[19px]">(+44)00000000</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}
