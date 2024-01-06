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

interface HealthFormProps {
  next: () => void
}

export const HealthForm: React.FC<HealthFormProps> = ({ next }) => {
  const [hasOtherName, setHasOtherName] = React.useState<"yes" | "no" | "">("")
  return (
    <div className="py-10 px-6 bg-white transition-all">
      <h3 className="text-2xl font-semibold mb-4">Personal Details</h3>
      <Form layout="vertical" onFinish={next}>
        <Form.Item label="Post Applied For:" required className="font-semibold">
          <Input className="border-[#EBEBEB] p-[0.8rem] w-full focus:border-success hover:border-success" />
        </Form.Item>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item label="Title" required className="font-semibold">
            <Select
              className="border-[#EBEBEB] h-[2rem] w-full focus:border-success hover:border-success"
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
            <Input className="border-[#EBEBEB] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Last Name" required className="font-semibold">
            <Input className="border-[#EBEBEB] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item
            label="Home Telephone Number"
            required
            className="font-semibold"
          >
            <Input
              className="border-[#EBEBEB] p-[0.8rem] w-full focus:border-success hover:border-success"
              type="number"
            />
          </Form.Item>
          <Form.Item
            label="Mobile Telephone Number"
            required
            className="font-semibold"
          >
            <Input
              className="border-[#EBEBEB] p-[0.8rem] w-full focus:border-success hover:border-success"
              type="number"
            />
          </Form.Item>
          <Form.Item label="Email" required className="font-semibold">
            <Input
              className="border-[#EBEBEB] p-[0.8rem] w-full focus:border-success hover:border-success"
              type="email"
            />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item label="Sex" required className="font-semibold">
            <Input className="border-[#EBEBEB] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Date of Birth" required className="font-semibold ">
            <DatePicker className="border-[#EBEBEB] p-[0.8rem] w-full focus:border-success hover:border-success" />
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
              className="border-[#EBEBEB] p-[0.8rem] w-full focus:border-success hover:border-success"
              type="number"
            />
          </Form.Item>
          <Form.Item label="Nationality" required className="font-semibold ">
            <Select
              className="border-[#EBEBEB] h-[2rem] w-full focus:border-success hover:border-success"
              style={{ height: "3.1rem" }}
              size="large"
              placeholder="Select"
              options={countries}
              showSearch
            />
          </Form.Item>
        </div>

        <h3 className="text-2xl font-semibold my-4">
          General Practitioner Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item
            label="General Practitioner"
            required
            className="font-semibold"
          >
            <Input className="border-[#EBEBEB] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Street Address" required className="font-semibold">
            <Input className="border-[#EBEBEB] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Street Address" required className="font-semibold">
            <Input className="border-[#EBEBEB] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item label="City" required className="font-semibold ">
            <Input className="border-[#EBEBEB] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Country" required className="font-semibold ">
            <Select
              className="border-[#EBEBEB] h-[2rem] w-full focus:border-success hover:border-success"
              style={{ height: "3.1rem" }}
              size="large"
              placeholder="Select"
              options={countries}
              showSearch
            />
          </Form.Item>
          <Form.Item label="Zip/Postal Code" required className="font-semibold">
            <Input className="border-[#EBEBEB] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
        </div>

        <div className="md:w-[60%] md:mx-auto my-10">
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
