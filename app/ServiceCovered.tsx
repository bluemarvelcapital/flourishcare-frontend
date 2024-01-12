"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import Fade from "react-reveal/Fade"

export const ServiceCovered = () => {
  return (
    <div className="mt-[24px] md:mt-[50px] bg-light py-[40px] md:px-[28px] px-[18px]">
      <h3 className="text-[24px] md:text-[34px] text-center font-bold mb-[24px]">
        Our Services
      </h3>

      <Fade left cascade>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-[28px] gap-[18px] mt-[1.5rem] container_xl">
          <Link
            href="/our-services"
            className="hover:mt-[-0.8rem] transition-all "
          >
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
              <p className="text-center md:text-[20px] mt-[20px]">
                Live in Care
              </p>
            </div>
          </Link>
          <Link
            href="/our-services"
            className="hover:mt-[-0.8rem] transition-all "
          >
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
              <p className="text-center md:text-[20px] mt-[20px]">
                Respite Care
              </p>
            </div>
          </Link>
          <Link
            href="/our-services"
            className="hover:mt-[-0.8rem] transition-all "
          >
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
              <p className="text-center md:text-[20px] mt-[20px]">
                Companionship Care
              </p>
            </div>
          </Link>
          <Link
            href="/our-services"
            className="hover:mt-[-0.8rem] transition-all "
          >
            <div className="w-full">
              <div className="relative w-full md:h-[300px] h-[200px]">
                <Image
                  src={"/housekeeping.jpg"}
                  fill
                  alt="Service Rendered"
                  objectFit="cover"
                  className="rounded-[5px]"
                />
              </div>
              <p className="text-center md:text-[20px] mt-[20px]">
                Housekeeping care
              </p>
            </div>
          </Link>
        </div>
      </Fade>
    </div>
  )
}
