"use client"
import { Input, List, Modal, Rate } from "antd"
import Image from "next/image"
import Link from "next/link"
import { title } from "process"
import React, { useState } from "react"
import { BiSolidSearch } from "react-icons/bi"
import { IoMdSearch } from "react-icons/io"
import Fade from "react-reveal/Fade"

const services = [
  {
    index: 1,
    title: "Home Care - Domiciliary",
    description: "Addressing daily living needs with respect and dignity.",
    image: "/img6.svg",
  },
  {
    index: 2,
    title: "Companionship Care",
    description: "Keeping your loved ones socially engaged and active.",
    image: "/img7.svg",
  },
  {
    index: 3,
    title: "Respite Care",
    description: `Respite care provided to clients at home and in the supported living accommodation who requires temporal care and support.`,
    image: "/img8.svg",
  },
  {
    index: 4,
    title: "Dementia Care",
    description:
      "Specialist support tailored to the unique challenges of living with",
    image: "/img9.svg",
  },
  {
    index: 5,
    title: "Live-in Care",
    description:
      "Continuous support to maintain a safe and independent lifestyle at home.",
    image: "/img10.svg",
  },
  {
    index: 6,
    title: "Supported Living Accommodation",
    description: `Flourish provides support to those with mental health conditions to become more independent and achieve their goals in a safe and comfortable living environment. This could be for long term, short term, and respite support care. Our supported living models ensures that that the quality of support provided is consistently high.`,
    image: "/img11.svg",
  },
]

export const OurServices = () => {
  const [showMore, setShowMore] = useState(false)
  const [index, setIndex] = useState(0)
  const [servicesState, setServicesState] = useState(services)
  const onSearch = (e: any) => {
    const value = e.target.value
    const result = services.filter((service) => {
      return service.title.toLowerCase().includes(value.toLowerCase())
    })
    setServicesState(result)
  }
  return (
    <div className="bg-white p-7 rounded-xl">
      <div className="md:my-7 my-5 md:px-5">
        <Input
          prefix={<IoMdSearch className="text-xl" />}
          className="md:w-[350px] w-full placeholder:text-primary text-[14px]"
          size="large"
          placeholder="Search"
          onChange={onSearch}
        />
      </div>
      <Fade cascade right>
        <List
          dataSource={servicesState}
          grid={{ gutter: [22, 10], md: 2, sm: 2, xs: 1, column: 3 }}
          pagination={{ pageSize: 6, size: "small", align: "center" }}
          renderItem={(service, index) => (
            <List.Item>
              <Link
                href={`/services/${index}`}
                className="flex flex-col min-h-[410px] shadow-md rounded-xl"
                key={index}
              >
                <div className="relative w-full h-[255px]">
                  <Image
                    src={service.image}
                    alt={`${service.title} Image`}
                    fill
                    className="rounded-t-[12px]"
                    objectFit="cover"
                  />
                </div>

                <div className=" p-[20px]">
                  <h3 className="lg:text-[20px] text-[18px] text-primary mb-[10px]">
                    {service.title}
                  </h3>
                  <p className="text-[14px]">
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
                  <div className="mt-2 flex gap-3 items-center text-[12px]">
                    <Rate
                      value={5}
                      disabled
                      className="text-[16px] text-[#FBA100]"
                    />
                    <span>2 Reviews</span>
                  </div>
                </div>
              </Link>
            </List.Item>
          )}
        />
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
