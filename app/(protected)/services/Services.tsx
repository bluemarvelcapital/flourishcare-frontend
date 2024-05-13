"use client"
import { services } from "@/constants/service_data"
import { Input, List, Modal, Rate } from "antd"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { IoMdSearch } from "react-icons/io"
import Fade from "react-reveal/Fade"

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
