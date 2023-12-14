"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import Fade from "react-reveal/Fade"

export const ServiceCovered = () => {
  return (
    <div className="mt-[24px] md:mt-[50px] bg-primary15 py-[40px] md:px-[28px] px-[18px]">
      <h3 className="text-[24px] md:text-[32px] text-center font-bold">
        Services Covered
      </h3>

      <Fade left cascade>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-[28px] gap-[18px] mt-[1.5rem] container_xl">
          <Link href="/our-services">
            <div className="w-full">
              <div className="relative w-full md:h-[300px] h-[200px]">
                <Image
                  src={"/img1.svg"}
                  fill
                  alt="Service Rendered"
                  objectFit="cover"
                  className="rounded-[5px]"
                />
              </div>
              <p className="text-center md:text-[32px] mt-[20px]">
                Live in Care
              </p>
            </div>
          </Link>
          <Link href="/our-services">
            <div className="w-full">
              <div className="relative w-full md:h-[300px] h-[200px]">
                <Image
                  src={"/img2.svg"}
                  fill
                  alt="Service Rendered"
                  objectFit="cover"
                  className="rounded-[5px]"
                />
              </div>
              <p className="text-center md:text-[32px] mt-[20px]">
                Nursing Care
              </p>
            </div>
          </Link>
          <Link href="/our-services">
            <div className="w-full">
              <div className="relative w-full md:h-[300px] h-[200px]">
                <Image
                  src={"/img3.svg"}
                  fill
                  alt="Service Rendered"
                  objectFit="cover"
                  className="rounded-[5px]"
                />
              </div>
              <p className="text-center md:text-[32px] mt-[20px]">
                Companionship
              </p>
            </div>
          </Link>
          <Link href="/our-services">
            <div className="w-full">
              <div className="relative w-full md:h-[300px] h-[200px]">
                <Image
                  src={"/img4.svg"}
                  fill
                  alt="Service Rendered"
                  objectFit="cover"
                  className="rounded-[5px]"
                />
              </div>
              <p className="text-center md:text-[32px] mt-[20px]">
                Housekeeping
              </p>
            </div>
          </Link>
        </div>
      </Fade>
    </div>
  )
}
