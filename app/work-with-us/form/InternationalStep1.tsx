"use client"
import { Button } from "@/components/Button"
import { countries } from "@/constants/countries"
import { UploadOutlined } from "@ant-design/icons"
import {
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Upload,
  Button as AntButton,
} from "antd"
import React, { FC } from "react"

export const InternationalStep1: FC<{ next: () => void }> = ({ next }) => {
  const [hasOtherName, setHasOtherName] = React.useState<"yes" | "no" | "">("")

  return (
    <Form layout="vertical">
      <div className="py-10 px-6 bg-white transition-all">
        <Form.Item
          label="If you obtained this position, would you continue in any other employment OR take on any other employment? "
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
          label="Do we need to make any disability-related adjustments to allow you to take part in the recruitment process? "
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
          label="Do you have any mental health or physical health support requirements to be considered if offered a job?"
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
        <div>
          <h3 className="text-2xl font-semibold my-4">
            Section 1:- Personal Details
          </h3>
          <div>
            <Form.Item
              label="Post Applied For:"
              required
              className="font-semibold"
            >
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
              <Form.Item
                label="Date of Birth"
                required
                className="font-semibold "
              >
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
                label="Nationality"
                required
                className="font-semibold "
              >
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
                label="Do you have a current full driving license:?"
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
                label="Street Address"
                required
                className="font-semibold"
              >
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
              <Form.Item
                label="Zip/Postal Code"
                required
                className="font-semibold"
              >
                <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Form.Item
                label="Copy of a valid passport"
                required
                className="font-semibold w-full"
              >
                <input
                  accept=".pdf, .docx, .doc"
                  type="file"
                  className="p-3 border-[1px] rounded-md"
                  name="proof_of_address2"
                  // value={values.proof_of_address2}
                />
              </Form.Item>

              <Form.Item
                label="Passport size picture of yourself for ID purpose"
                required
                className="font-semibold w-full"
              >
                <input
                  accept=".pdf, .docx, .doc"
                  type="file"
                  className="p-3 border-[1px] rounded-md"
                  name="proof_of_address2"
                  // value={values.proof_of_address2}
                />
              </Form.Item>

              <Form.Item
                label="Evidence of passed IELTS/ English Test"
                required
                className="font-semibold w-full"
              >
                <input
                  accept=".pdf, .docx, .doc"
                  type="file"
                  className="p-3 border-[1px] rounded-md"
                  name="proof_of_address2"
                  // value={values.proof_of_address2}
                />
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Form.Item
                label="Proof of COVID vaccinations"
                required
                className="font-semibold w-full"
              >
                <input
                  accept=".pdf, .docx, .doc"
                  type="file"
                  className="p-3 border-[1px] rounded-md"
                  name="proof_of_address2"
                  // value={values.proof_of_address2}
                />
              </Form.Item>

              <Form.Item
                label="Evidence of TB test result"
                required
                className="font-semibold w-full"
              >
                <input
                  accept=".pdf, .docx, .doc"
                  type="file"
                  className="p-3 border-[1px] rounded-md"
                  name="proof_of_address2"
                  // value={values.proof_of_address2}
                />
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="md:w-[60%] md:mx-auto my-[2rem]">
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
