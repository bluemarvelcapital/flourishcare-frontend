"use client"
import React, { useState } from "react"
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  TimePicker,
} from "antd"
import Link from "next/link"
import { SuccessModalAlt } from "@/components/SuccessModalAlt"

export const BookingForm = () => {
  const [open, setOpen] = useState(false)
  const handleSubmit = async () => {
    setOpen(!open)
  }
  return (
    <div className="max-w-[565px] mx-auto">
      <h2 className="text-[1.3rem] md:text-[2rem] capitalize font-[500]">
        Book Appointment
      </h2>
      <p className="text-[1rem] md:text-[1.3rem] text-[#ACACAC] mt-1 mb-6">
        Fill in patient&apos;s information
      </p>
      <div>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Select Patient">
            <Select className="w-full" size="large" />
          </Form.Item>
          <div className="grid grid-cols-2 gap-3 items-start w-full">
            <Form.Item label="Date of Birth">
              <Input className="w-[100%]" size="large" />
            </Form.Item>
            <Form.Item label="Gender">
              <Input className="w-[100%]" size="large" />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-3 items-start w-full">
            <Form.Item label="Appointment Date">
              <DatePicker className="w-[100%]" size="large" placeholder="" />
            </Form.Item>
            <Form.Item label="Appointment Time">
              <TimePicker className="w-[100%]" size="large" placeholder="" />
            </Form.Item>
          </div>
          <Form.Item label="Address/Location">
            <Input className="w-[100%]" size="large" />
          </Form.Item>
          <Form.Item label="Duration">
            <Select className="w-full" size="large" />
          </Form.Item>
          <Form.Item label="Special Requests/Instructions:">
            <Input.TextArea
              className="w-full"
              size="large"
              style={{ minHeight: 128 }}
            />
          </Form.Item>
          <Form.Item>
            <Checkbox />{" "}
            <span>
              You agree to our friendly{" "}
              <Link
                href={"/privacy-policy"}
                className="text-success underline hover:text-success"
              >
                privacy policy.
              </Link>
            </span>
          </Form.Item>
          <Button
            size="large"
            className="w-full bg-success"
            type="primary"
            htmlType="submit"
          >
            Continue
          </Button>
        </Form>
      </div>
      <SuccessModalAlt
        open={open}
        link={`/appointment/${1}`}
        text="View Appointment"
        setOpen={setOpen}
        content={
          <div>
            <div className="text-center my-3 mb-10">
              <h3 className="text-[17px] font-[500] mb-1">
                Booking Successful
              </h3>
              <p>
                Your booking has been successfully submitted, click on the
                button below to view your appointment.
              </p>
            </div>
            <div className="mb-5">
              <div className="flex justify-between items-center">
                <p>Patient Name</p>
                <p>Akanbi Taiwo Mayowa</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Appointment Date</p>
                <p>July 6th, 2024</p>
              </div>
            </div>
          </div>
        }
      />
    </div>
  )
}
