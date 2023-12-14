"use client"
import React from "react"
import Image from "next/image"
import { Button } from "@/components/Button"
import Link from "next/link"
import Fade from "react-reveal/Fade"

export const Hero = () => {
  return (
    <div className="relative w-full md:h-[670px] h-[60vh]">
      <div className="absolute w-full h-full top-0 left-0 z-[-2]">
        <Image
          src={"/about-hero.svg"}
          alt="Flourish Care Hero"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000080] z-[-1]"></div>

      <Fade left>
        <div className="md:w-[670px] md:py-[104px] md:px-[64px] py-[1.5rem] px-[16px] ml xl:w-[900px]">
          <p className="text-white md:text-[22px]">
            <span className="text-[#82B04D]">
              Flourish Advanced Care Limited
            </span>
            provides domiciliary care to community members in their homes. We
            provide dignified, respectful, and compassionate personal care to
            service users to achieve the best results for our customers. We will
            focus on providing dignified and gratifying care based on the
            individual&apos;s needs and routines. We&apos;ll make care plans
            with service users in charge and involved (or their appointed
            representative if applicable). After getting to know the person, we
            will jointly create a care plan that includes their likes and
            dislikes, routines, preferred carers, and more.The individual&apos;s
            daily routines will be monitored to limit and/or manage changes
            within each period of care. We&apos;ll protect the person&apos;s
            dignity and worth.
          </p>
        </div>
      </Fade>
    </div>
  )
}
