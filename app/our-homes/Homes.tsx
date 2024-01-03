"use client"
import { Divider } from "antd"
import Image from "next/image"
import React from "react"
import Fade from "react-reveal/Fade"

const houses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

export const Homes = () => {
  return (
    <div className="mb-[3rem]">
      <h2 className="py-[2rem]">
        <Divider orientation="left">
          <h2 className="text-success text-[28px] font-semibold">Houses</h2>
        </Divider>
      </h2>
      <div className="grid md:grid-cols-3 xxl:grid-cols-4 gap-[40px]">
        {houses.map((house) => (
          <Fade key={house} cascade right>
            <div className="relative w-full h-[372px]" key={house}>
              <Image
                src={`/house${house}.svg`}
                alt="House"
                fill
                objectFit="cover"
              />
            </div>
          </Fade>
        ))}
      </div>
    </div>
  )
}
