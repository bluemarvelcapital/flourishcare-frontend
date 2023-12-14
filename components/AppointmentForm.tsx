"use client"
import Image from "next/image"
import React from "react"
import { Input } from "./Input"
import { Button } from "./Button"
import Fade from "react-reveal/Fade"

export const AppointmentForm = () => {
  return (
    <div className="md:mb-[60px] mb-[24px] text-white">
      <div className="relative md:px-[140px] px-[16px] md:py-[80px] py-[20px]">
        <div className="absolute z-[-1] top-0 left-0 w-full md:h-[300px] h-[150px]">
          <Image
            src={"/bluebg.svg"}
            fill
            alt="Blue Background"
            objectFit="cover"
          />
        </div>
        <Fade left>
          <div className="ml">
            <p className=" md:text-[38px] md:leading-[141%]">
              Your Care is Our
            </p>
            <p className="md:text-[38px] md:leading-[141%]">Priority</p>
          </div>
        </Fade>
      </div>

      <Fade right>
        <div className="md:flex md:justify-end md:mt-[-11rem] md:mr-[50px] z-[3000] mr-xl">
          <div className="bg-white md:w-[753px] w-[90%] mx-[auto] md:mx-[inherit] border-[1px] rounded-[4px] border-[#AFB1B0] md:p-[34px] p-[20px] flex flex-col md:gap-[30px] gap-[20px]">
            <Input
              placeholder="Your Name"
              className="w-full border-[1px] border-[#AFB1B0]"
              type="text"
            />
            <Input
              placeholder="Email Address"
              className="w-full border-[1px] border-[#AFB1B0]"
              type="email"
            />
            <Input
              placeholder="Phone Number"
              className="w-full border-[1px] border-[#AFB1B0]"
            />
            <div>
              <Input
                className="w-full border-[1px] border-[#AFB1B0]"
                type="date"
              />
              <p
                className="text-[#4A4A4A] text-primary"
                style={{ fontStyle: "italic" }}
              >
                *Pick a date
              </p>
            </div>
            <Button className="rounded-[4px]">Submit</Button>
          </div>
        </div>
      </Fade>
    </div>
  )
}
