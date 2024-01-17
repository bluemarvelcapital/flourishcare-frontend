"use client"
import { Button } from "@/components/Button"
import { DatePicker, Form, Input, Radio, Space } from "antd"
import React, { FC } from "react"

export const InternationalStep3: FC<{ next: () => void; back: () => void }> = ({
  next,
  back,
}) => {
  return (
    <Form layout="vertical">
      <div className="py-10 px-6 bg-white transition-all">
        <section>
          <h3 className="text-2xl font-semibold my-4">
            Section 5 :- Employment Record
          </h3>
          <p className="md:text-lg">
            Please list chronologically, starting with current or last employer
            Note: Please click on the + sign to add more employment history
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
            <Form.Item
              label="Name of Employer"
              required
              className="font-semibold"
            >
              <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
            </Form.Item>
            <Form.Item
              label="Employer Address"
              required
              className="font-semibold"
            >
              <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
            </Form.Item>
            <Form.Item
              label="Length of Employment"
              required
              className="font-semibold"
            >
              <Input
                className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                type="number"
              />
            </Form.Item>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
            <Form.Item label="Salary" required className="font-semibold">
              <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
            </Form.Item>
            <Form.Item label="Date From" required className="font-semibold">
              <DatePicker className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
            </Form.Item>
            <Form.Item label="Date To" required className="font-semibold">
              <DatePicker className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
            </Form.Item>
          </div>

          <Form.Item
            label="Main Duties and responsibilities"
            required
            className="font-semibold"
          >
            <Input.TextArea
              className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
              style={{ minHeight: 192 }}
            />
          </Form.Item>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
            <Form.Item
              label="If currently employed how many weeks notice are you required to give?"
              required
              className="font-semibold"
            >
              <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
            </Form.Item>
          </div>

          <Form.Item
            label="Reason for leaving or seeking new employment"
            required
            className="font-semibold"
          >
            <Input.TextArea
              className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
              style={{ minHeight: 192 }}
            />
          </Form.Item>
        </section>

        <div className="md:w-[80%] md:mx-auto my-[2rem] grid md:grid-cols-2 grid-cols-1 gap-5">
          <Button
            className="w-full rounded-[100px] text-base text-xl bg-gray-100 border-[1px] border-success"
            style={{ borderRadius: "100px" }}
            onClick={back}
          >
            Back
          </Button>
          <Button
            className="w-full rounded-[100px] text-xl"
            style={{ borderRadius: "100px" }}
            onClick={next}
          >
            Next
          </Button>
        </div>
      </div>
    </Form>
  )
}
