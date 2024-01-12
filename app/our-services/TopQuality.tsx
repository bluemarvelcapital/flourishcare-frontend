"use client"
import Image from "next/image"
import React from "react"
import Fade from "react-reveal/Fade"

export const TopQuality = () => {
  return (
    <div className="md:p-[60px] p-[20px] container_xl md:w-[80%] md:mx-auto">
      <h3 className="md:text-[51px] text-[24px] text-center text-primary font-bold md:mb-[110px] mb-[30px]">
        Top quality Care services
      </h3>
      <Fade cascade right>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md-grid-cols-1 md:gap-[32px] gap-[16px] container mx-auto">
          <div className="col-span-1 flex flex-col">
            <div className="relative w-full h-[255px]">
              <Image
                src={"/img6.svg"}
                alt="Image"
                fill
                className="md:rounded-t-[12px]"
                objectFit="cover"
              />
            </div>

            <div className=" p-[24px] border-[1px] border-[#D3D3D3] md:h-[220px] lg:h-[220px]">
              <h3 className="lg:text-[32px] text-[20px] text-primary mb-[20px]">
                Home Care - Domiciliary
              </h3>
              <p>Addressing daily living needs with respect and dignity.</p>
            </div>
          </div>

          <div className="col-span-1 flex flex-col">
            <div className="relative w-full h-[255px]">
              <Image
                src={"/img7.svg"}
                alt="Image"
                fill
                className="md:rounded-t-[12px]"
                objectFit="cover"
              />
            </div>

            <div className=" p-[24px] border-[1px] border-[#D3D3D3] md:h-[220px] lg:h-[220px]">
              <h3 className="lg:text-[32px] text-[20px] text-primary mb-[20px]">
                Companionship Care
              </h3>
              <p>Keeping your loved ones socially engaged and active.</p>
            </div>
          </div>

          <div className="col-span-1 flex flex-col">
            <div className="relative w-full h-[255px]">
              <Image
                src={"/img8.svg"}
                alt="Image"
                fill
                className="md:rounded-t-[12px]"
                objectFit="cover"
              />
            </div>

            <div className=" p-[24px] border-[1px] border-[#D3D3D3] md:h-[220px] lg:h-[220px]">
              <h3 className="lg:text-[32px] text-[20px] text-primary mb-[20px]">
                Respite Care
              </h3>
              <p>
                Respite care provided to clients at home and in the supported
                living accommodation who requires temporal care and support.
              </p>
            </div>
          </div>

          <div className="col-span-1 flex flex-col">
            <div className="relative w-full h-[255px]">
              <Image
                src={"/img9.svg"}
                alt="Image"
                fill
                className="md:rounded-t-[12px]"
                objectFit="cover"
              />
            </div>

            <div className=" p-[24px] border-[1px] border-[#D3D3D3] md:h-[220px] lg:h-[380px]">
              <h3 className="lg:text-[32px] text-[20px] text-primary mb-[20px]">
                Dementia Care
              </h3>
              <p>
                Specialist support tailored to the unique challenges of living
                with
              </p>
            </div>
          </div>

          <div className="col-span-1 flex flex-col">
            <div className="relative w-full h-[255px]">
              <Image
                src={"/img10.svg"}
                alt="Image"
                fill
                className="md:rounded-t-[12px]"
                objectFit="cover"
              />
            </div>

            <div className=" p-[24px] border-[1px] border-[#D3D3D3] md:h-[400px] lg:h-[380px]">
              <h3 className="lg:text-[32px] text-[20px] text-primary mb-[20px]">
                Live-in Care
              </h3>
              <p>
                Continuous support to maintain a safe and independent lifestyle
                at home.
              </p>
            </div>
          </div>

          <div className="col-span-1 flex flex-col">
            <div className="relative w-full h-[255px]">
              <Image
                src={"/img11.svg"}
                alt="Image"
                fill
                className="md:rounded-t-[12px]"
                objectFit="cover"
              />
            </div>

            <div className=" p-[24px] border-[1px] border-[#D3D3D3] md:h-[400px] lg:h-[380px]">
              <h3 className="lg:text-[32px] text-[20px] text-primary mb-[20px]">
                Supported Living Accommodation
              </h3>
              <p>
                Flourish provides support to those with mental health conditions
                to become more independent and achieve their goals in a safe and
                comfortable living environment. This could be for long term,
                short term, and respite support care. Our supported living
                models ensures that that the quality of support provided is
                consistently high.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}
