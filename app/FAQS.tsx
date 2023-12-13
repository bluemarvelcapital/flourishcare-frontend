import React from "react"
import { Accordion } from "@/components/Accordion"
import Image from "next/image"
import { Button } from "@/components/Button"
import Link from "next/link"

const accordionItems = [
  {
    title: "What services does flourish advanced care provide?",
    content: (
      <p className="text-[#0B0E0C80]">
        Flourish Advanced Care offers a range of services such as senior care,
        childcare, medical assistance,
      </p>
    ),
  },
  {
    title: "How can I request home care services?",
    content: <p className="text-[#0B0E0C80]"></p>,
  },
  {
    title: "Are your caregivers trained and certified?",
    content: <p className="text-[#0B0E0C80]"></p>,
  },
  {
    title: "Can I choose my caregiver?",
    content: <p className="text-[#0B0E0C80]"></p>,
  },
  {
    title: "What are your service hours?",
    content: <p className="text-[#0B0E0C80]"></p>,
  },
  {
    title: "How can I pay for home care services?",
    content: <p className="text-[#0B0E0C80]"></p>,
  },
]

export const FAQS = () => {
  return (
    <div className="md:py-[3rem] bg-white">
      <div className="md:w-[60%] w-[90%] mx-auto py-[32px]">
        <div className="text-center">
          <h3 className="md:text-[32px] text-[24px] font-[600]">
            Frequently asked questions
          </h3>
          <p className="md:text-[20px]">
            Everything you need to know about Flourish Advanced Care
          </p>
        </div>

        <div className="mt-[50px]">
          <Accordion items={accordionItems} />
        </div>
      </div>
      <div className="bg-baseLight p-[32px] flex flex-col justify-center items-center gap-[24px] md:w-[85%] w-[90%] mx-auto mb-[3rem] rounded-[16px]">
        <Image
          src={"/avatar_group.svg"}
          alt="Avatar Group"
          width={120}
          height={56}
        />
        <p className="text-[20px] font-[600]">Still have questions?</p>
        <p>
          Can’t find the answer you’re looking for? Please get in touch with us
        </p>
        <Link href={"/contact-us"}>
          <Button className="rounded-[8px]">Get in Touch</Button>
        </Link>
      </div>
    </div>
  )
}
