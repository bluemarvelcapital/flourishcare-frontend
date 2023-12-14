"use client"
import React from "react"
import { Button } from "./Button"
import Link from "next/link"
import Image from "next/image"
import Zoom from "react-reveal/Zoom"
import RubberBand from "react-reveal/RubberBand"

export const Hero: React.FC<{
  heading: string
  btn_text?: string
  btn_link?: string
  text: string
  image: string
}> = ({ heading, text, image, btn_text, btn_link }) => {
  return (
    <div className="relative md:h-[85vh] w-full glass pb-[2rem] md:pb-[0]">
      <div className="md:w-[70%] w-[90%] mx-auto pt md:pt-[2rem] pt-[2rem] text-[#2C2C34] relative">
        <h2 className="capitalize md:text-[4.5rem] text-[1.5rem] font-[500] mb-[1rem] text-center">
          <Zoom top>{heading}</Zoom>
        </h2>
        <p className="md:text-[1.5rem] md:w-[70%] md:mx-auto mb-[1.5rem] text-center">
          <Zoom top>{text}</Zoom>
        </p>
        <div className="text-center">
          {btn_link && btn_text && (
            <Link href={btn_link as string}>
              <Zoom top>
                <Button>{btn_text}</Button>
              </Zoom>
            </Link>
          )}
        </div>
        <Zoom top>
          <div className="relative w-full md:h-[50vh] mt-[2rem] hidden md:block">
            <Image
              src={image}
              alt="Hero Image"
              objectFit="cover"
              fill
              className="rounded-[12px]"
            />
          </div>
        </Zoom>
      </div>
      <img
        src="/gif2.gif"
        className="h-[7rem] w-[7rem] z-[-1] absolute bottom-[2rem] right-[2rem]"
      />
      <img
        src="/bg.jpg"
        className="absolute h-full w-full z-[-3] top-[0] right-[0]"
      />
    </div>
  )
}
