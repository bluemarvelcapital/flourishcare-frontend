"use client"
import {
  Button as AntButton,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Upload,
} from "antd"
import React from "react"
import { countries } from "@/constants/countries"
import { UploadOutlined } from "@ant-design/icons"
import { Button } from "@/components/Button"

interface RegistrationFormProps {
  next: () => void
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ next }) => {
  const [hasOtherName, setHasOtherName] = React.useState<"yes" | "no" | "">("")
  return (
    <div className="py-10 px-6 bg-white transition-all">
      <h3 className="text-2xl font-semibold mb-4">Personal Details</h3>
      <Form layout="vertical" onFinish={next}>
        <Form.Item label="Post Applied For:" required className="font-semibold">
          <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
        </Form.Item>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item label="Title" required className="font-semibold">
            <Select
              className="border-[#00000060] h-[2rem] w-full focus:border-success hover:border-success"
              style={{ height: "3.1rem" }}
              size="large"
              placeholder="Select"
              options={[
                { value: "Mr", label: "Mr" },
                { value: "Mrs", label: "Mrs" },
                { value: "Miss", label: "Miss" },
                { value: "Ms", label: "Ms" },
              ]}
            />
          </Form.Item>
          <Form.Item label="First Name" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Last Name" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item
            label="Have you ever been known by any other names?"
            className="font-semibold"
          >
            <Radio.Group
              onChange={(e) => setHasOtherName(e.target.value)}
              value={hasOtherName}
            >
              <Radio value={"yes"}>Yes</Radio>
              <Radio value={"no"}>No</Radio>
            </Radio.Group>
          </Form.Item>
          {hasOtherName === "yes" && (
            <Form.Item
              label="Enter Other Names"
              className="font-semibold md:col-span-2"
            >
              <Input
                className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                type="number"
              />
            </Form.Item>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item
            label="Home Telephone Number"
            required
            className="font-semibold"
          >
            <Input
              className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
              type="number"
            />
          </Form.Item>
          <Form.Item
            label="Mobile Telephone Number"
            required
            className="font-semibold"
          >
            <Input
              className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
              type="number"
            />
          </Form.Item>
          <Form.Item label="Email" required className="font-semibold">
            <Input
              className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
              type="email"
            />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item label="Sex" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Date of Birth" required className="font-semibold ">
            <DatePicker className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item
            label="Are you aged 18 years or over?"
            required
            className="font-semibold"
          >
            <Radio.Group>
              <Radio value={"yes"}>Yes</Radio>
              <Radio value={"no"}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item
            label="National Insurance Number (NI)"
            required
            className="font-semibold"
          >
            <Input
              className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
              type="number"
            />
          </Form.Item>
          <Form.Item label="Nationality" required className="font-semibold ">
            <Select
              className="border-[#00000060] h-[2rem] w-full focus:border-success hover:border-success"
              style={{ height: "3.1rem" }}
              size="large"
              placeholder="Select"
              options={countries}
              showSearch
            />
          </Form.Item>
          <Form.Item
            label="Are you eligible to work in the UK?"
            required
            className="font-semibold"
          >
            <Radio.Group>
              <Radio value={"yes"}>Yes</Radio>
              <Radio value={"no"}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Form.Item
            label="Right To Work (RTW) in the UK – Acceptable proof"
            required
            className="font-semibold"
          >
            <Radio.Group>
              <Space direction="vertical" className="font-normal">
                <Radio value={"british_passport"}>British Passport</Radio>
                <Radio value={"eu_passport"}>
                  EU Passport / EU ID Card with proof of settlement
                </Radio>
                <Radio value={"others"}>
                  NON-UK & EU Passports should be accompanied with a BRP Card
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Disclosure and Barring Service (DBS) Certified?"
            required
            className="font-semibold"
          >
            <Radio.Group>
              <Radio value={"yes"}>Yes</Radio>
              <Radio value={"no"}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </div>

        <div className="flex md:flex-row flex-col gap-8 justify-between items-center">
          <Form.Item
            label="Do you have a current full driving license?"
            required
            className="font-semibold"
          >
            <Radio.Group>
              <Radio value={"yes"}>Yes</Radio>
              <Radio value={"no"}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Do you have your own transport?"
            required
            className="font-semibold"
          >
            <Radio.Group>
              <Radio value={"yes"}>Yes</Radio>
              <Radio value={"no"}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item label="Street Address" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="City" required className="font-semibold ">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Country" required className="font-semibold ">
            <Select
              className="border-[#00000060] h-[2rem] w-full focus:border-success hover:border-success"
              style={{ height: "3.1rem" }}
              size="large"
              placeholder="Select"
              options={countries}
              showSearch
            />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item label="Zip/Postal Code" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#EB270B] mt-[3rem]">
            Proof of Address:
          </h3>
          <p className="md:text-lg">
            Please upload 2 (two) items stating your full name and current home
            address- Accepted Documents – A utility bill (gas, electric,
            satellite television, – Landline phone bill) issued within the last
            three months – Local authority council tax bill for the current
            council tax year – Bank, Building Society statement (last three
            months) – Original mortgage statement from a recognised lender
            issued for the last full year – HMRC correspondence within the
            current financial year (e.g. P45 / P60, self-assessment letter, tax
            demand, etc.)
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 my-10 gap-8">
          <Form.Item
            label="Proof of address 1"
            required
            className="font-semibold"
          >
            <Upload accept=".pdf, .docx, .doc">
              <AntButton
                icon={<UploadOutlined />}
                size="large"
                className="border-[#00000060] w-full focus:border-success hover:border-success"
              >
                Click to Upload
              </AntButton>
            </Upload>
          </Form.Item>
          <Form.Item
            label="Proof of address 2"
            required
            className="font-semibold"
          >
            <Upload accept=".pdf, .docx, .doc">
              <AntButton
                icon={<UploadOutlined />}
                size="large"
                className="border-[#00000060] w-full focus:border-success hover:border-success"
              >
                Click to Upload
              </AntButton>
            </Upload>
          </Form.Item>
        </div>

        <div className="md:w-[60%] md:mx-auto">
          <Button
            type="submit"
            className="w-full rounded-[100px] text-xl"
            style={{ borderRadius: "100px" }}
          >
            Next
          </Button>
        </div>
      </Form>
    </div>
  )
}
