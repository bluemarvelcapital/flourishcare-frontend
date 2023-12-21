"use client"
import React from "react"
import Image from "next/image"
import { Button } from "@/components/Button"
import Link from "next/link"
import Fade from "react-reveal/Fade"
import { Avatar } from "antd"

export const Hero = () => {
  return (
    <div className="relative w-full md:h-[95vh] h-[50vh] hero-h font-myriad-pro">
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
        <div className="text-center md:w-[80%] w-[90%] mx-[auto] md:py-[154px] md:px-[64px] py-[1.5rem] px-[16px]">
          <h1 className="md:text-[96px] text-[28px] text-white font-[800]">
            Professional Homecare
          </h1>
          <p className="md:text-[32px] md:leading-[141%] text-white mt-[1rem] md:w-[70%] mx-[auto]">
            Dedicated to providing the highest level of domiciliary care to
            residential, nursing homes, and dementia care for older people in
            the comfort of their homes throughout the UK.{" "}
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
