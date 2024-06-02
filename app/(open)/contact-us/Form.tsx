"use client"
import { Button } from "@/components/Button"
import { Checkbox, Form, Input, Select } from "antd"
import TextArea from "antd/es/input/TextArea"
import Link from "next/link"
import React, { useState } from "react"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import Fade from "react-reveal/Fade"
import axios from "axios"
import { toast } from "react-toastify"
import { API_URL } from "@/constants/config"
import { Formik } from "formik"

interface ContactFormDetails {
  firstname: string
  lastname: string
  email: string
  nature: string
  message: string
  phoneNumber: string
}

export const ContactForm = () => {
  async function submitContactForm(props: ContactFormDetails) {
    try {
      const response = await axios.post(`${API_URL}/contactreq/new`, props)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
  const [form, setForm] = useState<ContactFormDetails>({
    firstname: "",
    lastname: "",
    email: "",
    nature: "General Enquiries",
    message: "",
    phoneNumber: "",
  })

  const updateForm = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="md:px-[32px]">
      <div>
        <h2 className="md:text-[32px] text-[24px] mb-[20px] font-[600]">
          Get in Touch
        </h2>
        <p className="text-base">
          Our friendly staff are available to answer your calls
        </p>
        <p className="text-base mb-[40px]">
          and emails with the information you need.
        </p>
      </div>
      <div>
        <Fade top cascade>
          <Form className="flex flex-col gap-[24px]">
            <div className="flex gap-[25px]">
              <div>
                <label htmlFor="firstname">First name</label>
                <Input
                  placeholder="First name"
                  className="w-full py-[10px]"
                  id="firstname"
                  required={true}
                  value={form.firstname}
                  onChange={(e) => updateForm("firstname", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="lastname">Last name</label>
                <Input
                  value={form.lastname}
                  placeholder="Last name"
                  className="w-full py-[10px]"
                  id="lastname"
                  required={true}
                  onChange={(e) => updateForm("lastname", e.target.value)}
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
                required={true}
                value={form.email}
                onChange={(e) => updateForm("email", e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <PhoneInput
                placeholder="Enter phone number"
                onChange={(value) => updateForm("phoneNumber", value as string)}
                value={form.phoneNumber}
                required={true}
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
                onChange={(value) => updateForm("nature", value as string)}
              />
            </div>

            <div>
              <label htmlFor="Message">Message</label>
              <TextArea
                placeholder="you@company.com"
                className="w-full py-[10px]"
                id="Message"
                required={true}
                onChange={(e) => updateForm("message", e.target.value)}
              />
            </div>

            <div>
              <Checkbox />{" "}
              <span className="text-[#667085] pl-[12px]">
                You agree to our friendly{" "}
                <Link className="text-primary" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </span>
            </div>
            <Button
              className="mt-[8px]"
              onClick={async () => {
                submitContactForm(form)
                  .then((res) => {
                    setIsLoading(false)
                    setForm({
                      firstname: "",
                      lastname: "",
                      email: "",
                      nature: "General Enquiries",
                      message: "",
                      phoneNumber: "",
                    })
                    toast.success("Message sent successfully")
                  })
                  .catch((err) => {
                    toast.error("Message failed to send")
                  })
                setIsLoading(true)
              }}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </Form>
        </Fade>
      </div>
    </div>
  )
}
