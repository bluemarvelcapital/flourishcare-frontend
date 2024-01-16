"use client"
import { Button } from "@/components/Button"
import { DatePicker, Form, Input, Radio, Space } from "antd"
import React, { FC } from "react"

export const InternationalStep2: FC<{ next: () => void; back: () => void }> = ({
  next,
  back,
}) => {
  return (
    <div className="py-10 px-6 bg-white transition-all">
      <section>
        <h3 className="text-2xl font-semibold my-4">
          Section 2 :- Rehabilitation of Offenders Act
        </h3>
        <Form.Item
          label="Have you ever been convicted of a criminal offence?"
          required
          className="font-semibold"
        >
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={"yes"}>Yes</Radio>
              <Radio value={"no"}>No</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Have you any prosecutions pending?"
          required
          className="font-semibold"
        >
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={"yes"}>Yes</Radio>
              <Radio value={"no"}>No</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
      </section>

      <section>
        <h3 className="text-2xl font-semibold my-4">Section 3:- Health</h3>
        <Form.Item
          label="Are you registered disabled?"
          required
          className="font-semibold"
        >
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={"yes"}>Yes</Radio>
              <Radio value={"no"}>No</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
      </section>

      <section>
        <h3 className="text-2xl font-semibold my-4">Section 4:- Education</h3>
        <p className="md:text-lg">
          Please list your qualifications in reverse order, starting with the
          most recent first. Also, include any training that you have received
          which did not lead to a qualification but which you feel is relevant
          to the post. If short-listed for an interview, please be prepared to
          bring original copies of any certificates relating to post-school
          qualifications or vocational qualifications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
          <Form.Item label="Date Obtained" required className="font-semibold">
            <DatePicker className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item
            label="Place of study & address"
            required
            className="font-semibold"
          >
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item
            label="Examinations taken & grades*"
            required
            className="font-semibold"
          >
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
        </div>

        <p className="text-lg font-semibold">Other Qualifications:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
          <Form.Item label="Date Obtained" required className="font-semibold">
            <DatePicker className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item
            label="Place of study & address"
            required
            className="font-semibold"
          >
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item
            label="Examinations taken & grades"
            required
            className="font-semibold"
          >
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
        </div>
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
  )
}
