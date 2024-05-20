"use client"
import React from "react"
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

export const BookingForm = () => {
  return (
    <div className="max-w-[565px] mx-auto">
      <h2 className="text-[1.3rem] md:text-[2rem] capitalize font-[500]">
        Book Appointment
      </h2>
      <p className="text-[1rem] md:text-[1.3rem] text-[#ACACAC] mt-1 mb-6">
        Fill in patient&apos;s information
      </p>
      <div>
        <Form layout="vertical">
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
          <Button size="large" className="w-full bg-success" type="primary">
            Continue
          </Button>
        </Form>
      </div>
    </div>
  )
}
