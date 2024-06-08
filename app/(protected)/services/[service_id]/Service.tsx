"use client"
import React from "react"
import { services } from "@/constants/service_data"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/Button"

export const Service = () => {
  const { service_id } = useParams()
  const service = services.find(({ index }) => {
    return String(index - 1) === String(service_id)
  })

  return (
    <div className="bg-white p-7 rounded-xl">
      <div className="grid md:grid-cols-2 md:gap-7 lg:gap-10 gap-5 items-center">
        <div className="relative w-full md:min-h-[628px] min-h-[340px]">
          <Image
            src={service?.image as string}
            alt=""
            fill
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
        <div>
          <h2 className="lg:text-[2.5rem] md:text-[2rem] text-xl mb-7">
            {service?.title}
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#6A6B6C] mb-5">
            {service?.description}
          </p>
          <Link href={`/services/${service_id}/book-appointment`}>
            <Button>Book Appointment</Button>
          </Link>
          <div className="mt-7">
            <h3 className="text-xl font-[500]">Service Summary</h3>
            <ul className="list-disc px-6 py-4  text-[#6A6B6C]">
              <li>
                <span className="font-semibold">Service Type: </span>{" "}
                <span>{service?.title}</span>
              </li>
              <li>
                <span className="font-semibold">Duration: </span>{" "}
                <span>2 hours per session</span>
              </li>
              <li>
                <span className="font-semibold">Frequency: </span>{" "}
                <span>3 sessions per week</span>
              </li>
              <li>
                <span className="font-semibold">Additional Features: </span>{" "}
                <ul className="list-disc px-6 py-1  text-[#98999A]">
                  <li>Medication reminders</li>
                  <li>Meal preparation</li>
                  <li>Light housekeeping</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
