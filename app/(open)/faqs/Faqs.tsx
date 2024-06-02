"use client"
import React from "react"
import { Accordion } from "@/components/Accordion"
import Image from "next/image"
import { Button } from "@/components/Button"
import Link from "next/link"
import RubberBand from "react-reveal/RubberBand"
import { RightOutlined } from "@ant-design/icons"

const accordionItems = [
  {
    title: "What services does Flourish Advanced Care produced?",
    content: (
      <ul className="coloured-disc px-5 mb-3">
        <li>Personal care </li>
        <li>Respite care </li>
        <li>Live In Care</li>
        <li>Companion care</li>
        <li>Dementia care</li>
        <li>Housekeeping care</li>
        <li>Nursing care</li>
        <li>End of life care/Palliative care</li>
        <li>Supported living accommodation</li>
      </ul>
    ),
  },
  {
    title: "How can I request home care services?",
    content: (
      <ul className="coloured-disc px-5 mb-3">
        <li>Call us on 07459493383 or 01582283172.</li>
        <li>
          Send us an email to{" "}
          <a
            href="mailto:info@flourishadvancedcare.co.uk"
            className="text-primary"
          >
            info@flourishadvancedcare.co.uk
          </a>
        </li>
        <li>
          <Link href={"/#book-consultation"} className="text-primary">
            <span>Book a Free Consultation</span>{" "}
            <RightOutlined className="underline" />
          </Link>
        </li>
      </ul>
    ),
  },
]

export const Faqs = () => {
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
        <RubberBand>
          <Image
            src={"/avatar_group.svg"}
            alt="Avatar Group"
            width={120}
            height={56}
          />
        </RubberBand>
        <p className="text-[20px] font-[600]">Still have questions?</p>
        <p>
          Can’t find the answer you’re looking for? Please get in touch with us
        </p>
        <RubberBand>
          <Link href={"/contact-us"}>
            <Button className="rounded-[8px]">Get in Touch</Button>
          </Link>
        </RubberBand>
      </div>
    </div>
  )
}
