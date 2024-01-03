"use client"
import Image from "next/image"
import React, { useState } from "react"
import { Input } from "./Input"
import { Button } from "./Button"
import Fade from "react-reveal/Fade"
import { TextArea } from "./TextArea"
import axios from "axios"
import jsonp from "jsonp"
import { toast } from "react-toastify"
import { MAILCHIMP_FORM_URL, CALENDLY_SCHEDULE_URL } from "@/constants/config"
import { SuccessModal } from "./SuccessModal"
import { InlineWidget } from "react-calendly"
import { Modal } from "antd"
import { CloseCircleFilled } from "@ant-design/icons"

export const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  })
  const [open, setOpen] = useState(false)
  const [openCalendly, setOpenCalendly] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    // Assuming you are using the 'axios' library for HTTP requests
    // Make sure to install it by running: npm install axios
    try {
      console.log(formData)
      const { email, name, phone, date, message } = formData
      jsonp(
        `${MAILCHIMP_FORM_URL}&EMAIL=${email}&NAME=${name}&PHONE=${phone}&DATE=${date}&MESSAGE=${message}`,
        { param: "c" },
        (_: any, data: any) => {
          // toast.success("Submitted Successfully")

          // window.location.href = CALENDLY_SCHEDULE_URL
          setOpen(true)
        }
      )
    } catch (error: any) {
      console.log(error)
      toast.error("An error occurred while submitting the form")
    }
  }
  return (
    <div className="md:mb-[60px] mb-[24px] text-white">
      <div className="relative md:px-[140px] px-[16px] md:py-[80px] py-[20px]">
        <div className="absolute z-[-1] top-0 left-0 w-full md:h-[300px] h-[150px]">
          <Image
            src={"/bluebg.svg"}
            fill
            alt="Blue Background"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:mt-[-5rem] z-[3000] gap-[30px]">
        <Fade left>
          <div className="">
            <p className="text-center md:text-[38px] md:leading-[141%]">
              Your Care is Our Priority
            </p>
          </div>
        </Fade>
        <Fade right>
          <form onSubmit={handleSubmit}>
            <div className="bg-white md:w-[753px] w-[85vw] mx-[auto] md:mx-[inherit] border-[1px] rounded-[4px] border-[#AFB1B0] md:p-[34px] p-[20px] flex flex-col md:gap-[30px] gap-[20px]">
              <Input
                name="name"
                placeholder="Your Name"
                className="w-full border-[1px] border-[#AFB1B0]"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                name="email"
                placeholder="Email Address"
                className="w-full border-[1px] border-[#AFB1B0]"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                name="phone"
                placeholder="Phone Number"
                className="w-full border-[1px] border-[#AFB1B0]"
                value={formData.phone}
                onChange={handleChange}
              />
              <div>
                <Input
                  name="date"
                  className="w-full border-[1px] border-[#AFB1B0]"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                <p
                  className="text-[#4A4A4A] text-primary"
                  style={{ fontStyle: "italic" }}
                >
                  *Pick a date
                </p>
              </div>
              <TextArea
                name="message"
                placeholder="Your Message "
                className="w-full border-[1px] border-[#AFB1B0]]"
                value={formData.message}
                onChange={handleChange}
              />
              <Button className="rounded-[4px]">Submit</Button>
            </div>
          </form>
        </Fade>
      </div>
      <SuccessModal
        open={open}
        setOpen={setOpen}
        link={CALENDLY_SCHEDULE_URL}
        text="Submitted Successfully"
        onOk={() => setOpenCalendly(true)}
      />

      {/* Calendly Modal */}
      <Modal
        open={openCalendly}
        onCancel={() => setOpenCalendly(false)}
        closeIcon={
          <CloseCircleFilled className="text-black md:text-black text-[1.5rem]" />
        }
        className="md:min-w-[70rem]"
        classNames={{
          content: "p-0",
          body: "p-0",
        }}
        styles={{
          content: {
            boxShadow: "none",
            background: "transparent",
          },
        }}
        footer={false}
      >
        <div className="">
          <InlineWidget
            url={CALENDLY_SCHEDULE_URL}
            styles={{ height: "45rem" }}
          />
        </div>
      </Modal>
    </div>
  )
}
