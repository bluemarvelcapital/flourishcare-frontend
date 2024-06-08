"use client"
import { Loader } from "@/components/Loader"
import { services } from "@/constants/service_data"
import { ServiceI } from "@/interface/service"
import { useGetServicesQuery } from "@/services/services.service"
import { Input, List, Modal, Rate } from "antd"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { IoMdSearch } from "react-icons/io"
import Fade from "react-reveal/Fade"

export const OurServices = () => {
  const { data, isLoading } = useGetServicesQuery({})

  const [servicesState, setServicesState] = useState<ServiceI[]>([])
  const onSearch = (e: any) => {
    const value = e.target.value
    const result = data?.filter((service) => {
      return service.name.toLowerCase().includes(value.toLowerCase())
    })
    setServicesState(result as ServiceI[])
  }
  useEffect(() => {
    if (data) {
      setServicesState(data)
    }
  }, [data])
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
      {isLoading ? (
        <Loader name="services" />
      ) : (
        <>
          <List
            dataSource={servicesState.slice().reverse() || []}
            grid={{ gutter: [22, 10], md: 2, sm: 2, xs: 1, column: 3 }}
            pagination={{ pageSize: 6, size: "small", align: "center" }}
            renderItem={(service, index) => (
              <List.Item>
                <Link
                  href={`/services/${service.id}`}
                  className="flex flex-col min-h-[410px] shadow-md rounded-xl"
                  key={index}
                >
                  <div className="relative w-full h-[255px]">
                    <Image
                      src={service.previewImage}
                      alt={`${service.name} Image`}
                      fill
                      className="rounded-t-[12px]"
                      objectFit="cover"
                    />
                  </div>

                  <div className=" p-[20px]">
                    <h3 className="lg:text-[20px] text-[18px] text-primary mb-[10px]">
                      {service.name}
                    </h3>
                    <p className="text-[14px]">
                      {service.description?.length > 80 ? (
                        <>
                          {service.description?.slice(0, 80)}...{" "}
                          <span className="text-primary underline cursor-pointer text-sm">
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
                      {/* <span>2 Reviews</span> */}
                    </div>
                    <div>
                      <p className="mt-3 text-md">
                        {Intl.NumberFormat("en-US", {
                          currency: service.currency,
                          style: "currency",
                        }).format(service.price)}
                      </p>
                    </div>
                  </div>
                </Link>
              </List.Item>
            )}
          />
        </>
      )}
    </div>
  )
}
