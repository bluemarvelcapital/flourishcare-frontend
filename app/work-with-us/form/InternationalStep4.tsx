"use client"
import { Button } from "@/components/Button"
import { UploadOutlined } from "@ant-design/icons"
import {
  DatePicker,
  Form,
  Input,
  Radio,
  Space,
  Upload,
  Button as AntButton,
} from "antd"
import React, { FC } from "react"

export const InternationalStep4: FC<{ next: () => void; back: () => void }> = ({
  next,
  back,
}) => {
  return (
    <div className="py-10 px-6 bg-white transition-all">
      <section>
        <h3 className="text-2xl font-semibold my-4">Section 6 :- Reference</h3>
        <p className="md:text-lg">(1) Referee:*</p>
        <p className="md:text-lg">
          Please give the names and addresses of your two most recent employers
          (if applicable). If you are unable to do this, please clearly outline
          who your referees are.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
          <Form.Item label="Name of Referee" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item
            label="Referee job title"
            required
            className="font-semibold"
          >
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Email" required className="font-semibold">
            <Input
              className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
              type="email"
            />
          </Form.Item>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
          <Form.Item label="Telephone No" required className="font-semibold">
            <Input
              className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
              type="number"
            />
          </Form.Item>
          <Form.Item label="Company Name" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Address" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
        </div>

        <Form.Item
          label="May we contact your references prior to job offer?"
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
        <p className="md:text-lg">(2) Referee:*</p>
        <p className="md:text-lg">
          Please give the names and addresses of your two most recent employers
          (if applicable). If you are unable to do this, please clearly outline
          who your referees are.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
          <Form.Item label="Name of Referee" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item
            label="Referee job title"
            required
            className="font-semibold"
          >
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Email" required className="font-semibold">
            <Input
              className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
              type="email"
            />
          </Form.Item>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
          <Form.Item label="Telephone No" required className="font-semibold">
            <Input
              className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
              type="number"
            />
          </Form.Item>
          <Form.Item label="Company Name" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Address" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
        </div>

        <Form.Item
          label="May we contact your references prior to job offer?"
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
        <h3 className="text-2xl font-semibold my-4">
          Section 7 :- Emergency Contact/Next of kin
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item label="First Name" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Last Name" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Telephone No" required className="font-semibold">
            <Input
              className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
              type="number"
            />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item label="Email" required className="font-semibold">
            <Input
              className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
              type="email"
            />
          </Form.Item>
          <Form.Item label="Address" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold my-4">
          Section 8 :- Personal Attributes
        </h3>
        <Form.Item
          label="Please give details"
          required
          className="font-semibold"
        >
          <Input.TextArea
            className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
            style={{ minHeight: 192 }}
          />
        </Form.Item>
      </section>

      <section>
        <h3 className="text-2xl font-semibold my-4">
          Section 9 :- Declaration
        </h3>
        <p className="md:text-lg">
          I confirm that the information provided in this application (and
          within my Curriculum Vitae if applicable) is both truthful and
          accurate. I have omitted no facts that could affect my employment. I
          understand that any false misleading statements could place any
          subsequent employment in jeopardy. I understand that any employment
          entered into is subject to documentary evidence of my right to work in
          the UK and satisfactory references. I expressly consent to personal
          data contained within this form being recorded for the purposes of
          assessing suitability for the post and may form the basis of any
          subsequent personnel file.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
          <Form.Item
            label="Signed (Full Name)"
            required
            className="font-semibold"
          >
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Date" required className="font-semibold">
            <DatePicker className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
        </div>
        <div>
          <p className="md:text-lg">
            Flourish Advanced Care Limited undertakes that it will treat any
            personal information that you provide to us, or that we obtain from
            you, in accordance with the requirements of the Data Protection Act
            1998. After initial assessment, Flourish Advanced Care Limited may
            keep your details on file for opportunities that may arise in the
            future. Please tick if you do not wish us to hold your details.
          </p>
          <Form.Item required className="font-semibold mt-3">
            <Radio.Group>
              <Space direction="vertical">
                <Radio value={"yes"}>Yes</Radio>
                <Radio value={"no"}>No</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </div>
        <div>
          <Form.Item label="Upload CV " required className="font-semibold">
            <Upload accept=".pdf, .docx, .doc">
              <AntButton
                icon={<UploadOutlined />}
                size="large"
                className="border-[#00000060] w-full focus:border-success hover:border-success"
              >
                Click to Upload
              </AntButton>
            </Upload>
            <small>
              Accepted file types: pdf, doc, docx, jpg, Max. file size: 5 MB
            </small>
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
