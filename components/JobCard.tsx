"use client"
import React from "react"
import { BiSolidBriefcase } from "react-icons/bi"

interface props {
  title: string
  experience: string
  payRange: string
  currency: string
  tags: string[]
  extra_info: string
}

const to_currency = (currency: string, pay: string | number) => {
  const value = Intl.NumberFormat("en-NG", {
    currency,
    style: "currency",
  }).format(Number(pay))
  return value
}
export const JobCard: React.FC<props> = ({ ...props }) => {
  const { title, experience, payRange, currency, tags, extra_info } = props
  const [lower, higher] = payRange.split("-")
  const [lowerPay, higherPay] = [
    to_currency(currency, lower),
    to_currency(currency, higher),
  ]
  return (
    <div className="p-[16px] md:p-[32px] rounded-[10px] border-[1px] border-[#BFCBE4] flex flex-col gap-[10px]">
      <div className="flex justify-between items-center">
        <p className="md:text-[18px] text-[14px] font-[500]">{title}</p>
        <p className="text-[#98999A] md:text-[16px] text-sm">{extra_info}</p>
      </div>
      <div>
        <div className="text-[#98999A] md:text-[16px] text-sm flex justify-between items-center">
          <div className="inline-flex gap-3 items-center">
            <div className="inline-flex gap-2 items-center">
              <BiSolidBriefcase />
              <p>{experience}</p>
            </div>
            <div className="inline-flex gap-2 items-center">
              <p>
                {lowerPay} - {higherPay}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center text-sm gap-2 text-primary mt-2 capitalize">
        {tags.map((tag, index) => {
          return (
            <div
              key={index}
              className="bg-primary/10 py-[2px] px-4 rounded-full"
            >
              {tag}
            </div>
          )
        })}
      </div>
    </div>
  )
}
