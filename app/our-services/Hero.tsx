"use client"
import React from "react"
import Image from "next/image"
import { Button } from "@/components/Button"
import Link from "next/link"
import Fade from "react-reveal/Fade"

export const Hero = () => {
  return (
    <div className="relative w-full md:h-[670px] h-[30vh] hero-h">
      <div className="absolute w-full h-full top-0 left-0 z-[-2]">
        <Image
          src={"/services-hero.svg"}
          alt="Flourish Care Hero"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000026] z-[-1]"></div>

      <Fade left>
        <div className="md:w-[870px] md:py-[154px] md:px-[64px] py-[1.5rem] px-[16px] ml">
          <h1 className="md:text-[64px] text-[28px] text-primary">
            Our Services
          </h1>
          <p className="md:text-[22px] md:leading-[141%] text-base mt-[1rem] text-white">
            Our specialised services ensure that all of our clients receive
            attention and assistance suited to their individual requirements.
            Services of Care with a Difference
          </p>
        </div>
      </Fade>
    </div>
  )
}
