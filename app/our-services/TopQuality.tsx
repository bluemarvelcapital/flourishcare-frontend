"use client"
import { Modal } from "antd"
import Image from "next/image"
import { title } from "process"
import React, { useState } from "react"
import Fade from "react-reveal/Fade"

const services = [
  {
    title: "Home Care - Domiciliary",
    description: "Addressing daily living needs with respect and dignity.",
    image: "/img6.svg",
  },
  {
    title: "Companionship Care",
    description: "Keeping your loved ones socially engaged and active.",
    image: "/img7.svg",
  },
  {
    title: "Respite Care",
    description: `Respite care provided to clients at home and in the supported living accommodation who requires temporal care and support.`,
    image: "/img8.svg",
  },
  {
    title: "Dementia Care",
    description:
      "Specialist support tailored to the unique challenges of living with",
    image: "/img9.svg",
  },
  {
    title: "Live-in Care",
    description:
      "Continuous support to maintain a safe and independent lifestyle at home.",
    image: "/img10.svg",
  },
  {
    title: "Supported Living Accommodation",
    description: `Flourish provides support to those with mental health conditions to become more independent and achieve their goals in a safe and comfortable living environment. This could be for long term, short term, and respite support care. Our supported living models ensures that that the quality of support provided is consistently high.`,
    image: "/img11.svg",
  },
]

export const TopQuality = () => {
  const [showMore, setShowMore] = useState(false)
  const [index, setIndex] = useState(0)
  return (
    <div className="md:p-[60px] p-[20px] container_xl md:w-[80%] md:mx-auto">
      <h3 className="md:text-[41px] text-[24px] text-center text-primary font-bold md:mb-[70px] mb-[30px]">
        Top quality Care services
      </h3>
      <Fade cascade right>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md-grid-cols-1 md:gap-[24px] gap-[14px] container mx-auto">
          {services.map((service, index) => (
            <div className="col-span-1 flex flex-col" key={index}>
              <div className="relative w-full h-[255px]">
                <Image
                  src={service.image}
                  alt={`${service.title} Image`}
                  fill
                  className="md:rounded-t-[12px]"
                  objectFit="cover"
                />
              </div>

              <div className=" p-[20px] border-[1px] border-[#D3D3D3] ">
                <h3 className="lg:text-[20px] text-[18px] text-primary mb-[10px]">
                  {service.title}
                </h3>
                <p className="text-[16px]">
                  {service.description.length > 80 ? (
                    <>
                      {service.description.slice(0, 80)}...{" "}
                      <span
                        className="text-primary underline cursor-pointer text-sm"
                        onClick={() => {
                          setIndex(index)
                          setShowMore(true)
                        }}
                      >
                        Read more
                      </span>
                    </>
                  ) : (
                    service.description
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
      <Modal footer={false} open={showMore} onCancel={() => setShowMore(false)}>
        <div className="mt-10 shadow-sm flex flex-col">
          <div className="relative w-full h-[255px]">
            <Image
              src={services[index].image}
              alt={`${services[index].title} Image`}
              fill
              className="md:rounded-t-[12px]"
              objectFit="cover"
            />
          </div>

          <div className=" p-[20px] border-[1px] border-[#D3D3D3] ">
            <h3 className="lg:text-[20px] text-[18px] text-primary mb-[10px]">
              {services[index].title}
            </h3>
            <p className="text-[16px]">{services[index].description}</p>
          </div>
        </div>
      </Modal>
    </div>
  )
}
