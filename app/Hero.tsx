"use client"
import React from "react"
import Image from "next/image"
import { Button } from "@/components/Button"
import Link from "next/link"
import Fade from "react-reveal/Fade"
import { Avatar } from "antd"

export const Hero = () => {
  return (
    <div className="relative w-full md:h-[95vh] h-[60vh] hero-h font-myriad-pro flex justify-center items-center flex-col">
      <div>
        <div className="absolute w-full h-full top-0 left-0 z-[-2] ">
          <Image
            src={"/home-hero.svg"}
            alt="Flourish Care Hero"
            fill={true}
            objectFit="cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#0000009d] z-[-1]"></div>

        <Fade left>
          <div className="text-center md:w-[85%] w-[95%] mx-[auto] md:py-[154px] md:px-[64px] py-[1.5rem] px-[16px]">
            <h1 className="md:text-[50px] text-[24px] text-white font-[800]">
              Welcome to Flourished Advanced
            </h1>
            <h1 className="md:text-[40px] text-[18px] text-white font-[800]">
              Compassionate In-Home Elderly Care
            </h1>
            <p className="md:text-[20px] md:leading-[141%] text-white mt-[1rem] md:w-[80%] mx-[auto]">
              At Flourished Advanced Care, we understand the value of
              independence and comfort for your loved ones. Our team is
              dedicated to providing exceptional domiciliary care that respects
              the personal choices and routines of those we serve. With a
              commitment to enhancing life&apos;s moments through quality care,
              we are here for you and your family every step of the way.
            </p>

            <Link href="/contact-us">
              <Button className="md:my-[52px] my-3">Contact Us</Button>
            </Link>
            {/* <div className="flex items-center gap-[20px] justify-center text-white">
              <Avatar src="/avatar.svg" className="w-[63px] h-[63px]" />
              <div>
                <p className="text-start md:text-[19px]">Call Helen:</p>
                <p className="text-start md:text-[19px]">(+44)00000000</p>
              </div>
            </div> */}
          </div>
        </Fade>
      </div>
    </div>
  )
}
