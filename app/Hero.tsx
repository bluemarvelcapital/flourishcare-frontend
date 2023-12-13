import React from "react"
import Image from "next/image"
import { Button } from "@/components/Button"
import Link from "next/link"

export const Hero = () => {
  return (
    <div className="relative w-full md:h-[670px] h-[30vh]">
      <div className="absolute w-full h-full top-0 left-0 z-[-2]">
        <Image
          src={"/home-hero.svg"}
          alt="Flourish Care Hero"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#1B1B1B26] z-[-1]"></div>

      <div className="md:w-[870px] xl:w-[950px] md:py-[154px] md:px-[64px] py-[1.5rem] px-[16px]">
        <h1 className="md:text-[64px] text-[28px] text-primary">
          Professional Homecare
        </h1>
        <p className="md:text-[32px] md:leading-[141%] text-base mt-[1rem]">
          Dedicated to providing the highest level of domiciliary care to
          residential, nursing homes, and dementia care for older people in the
          comfort of their homes throughout the UK.
        </p>

        <Link href="/contact-us">
          <Button className="md:mt-9 mt-3">Contact Us</Button>
        </Link>
      </div>
    </div>
  )
}
