"use client"
import { Button } from "@/components/Button"
import { Checkbox, Form, Input, Select } from "antd"
import TextArea from "antd/es/input/TextArea"
import React, { useState } from "react"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"

export const ContactForm = () => {
  const [phone, setPhone] = useState<any>()
  return (
    <div className="md:px-[32px]">
      <div>
        <h2 className="md:text-[32px] text-[24px] mb-[20px] font-[600]">
          Get in Touch
        </h2>
        <p className="text-base mb-[40px]">
          Our friendly team would love to hear from you.
        </p>
      </div>
      <div>
        <Form className="flex flex-col gap-[24px]">
          <div className="flex gap-[25px]">
            <div>
              <label htmlFor="firstname">First name</label>
              <Input
                placeholder="First name"
                className="w-full py-[10px]"
                id="firstname"
              />
            </div>
            <div>
              <label htmlFor="lastname">Last name</label>
              <Input
                placeholder="Last name"
                className="w-full py-[10px]"
                id="lastname"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              placeholder="you@company.com"
              className="w-full py-[10px]"
              id="email"
              type="email"
            />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <PhoneInput
              placeholder="Enter phone number"
              onChange={setPhone}
              value={phone}
              className="w-full rounded-[6px] p-[10px] bg-[#fff] border-[1px] border-[#e5e5e5]"
            />
          </div>
          <div>
            <label htmlFor="enquiry">Nature of Enquiry</label>
            <Select
              className="w-full h-[44px]"
              id="enquiry"
              options={[
                { label: "Care Service", value: "Care Service" },
                {
                  label: "Recruitment Services",
                  value: "Recruitment Services",
                },
                { label: "General Enquiries", value: "General Enquiries" },
              ]}
            />
          </div>

          <div>
            <label htmlFor="Message">Message</label>
            <TextArea
              placeholder="you@company.com"
              className="w-full py-[10px]"
              id="Message"
            />
          </div>

          <div>
            <Checkbox />{" "}
            <span className="text-[#667085] pl-[12px]">
              You agree to our friendly privacy policy.
            </span>
          </div>
          <Button className="mt-[8px]">Send Message</Button>
        </Form>
      </div>
    </div>
  )
}
