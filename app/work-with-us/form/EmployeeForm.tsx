"use client"
import {
  Button as AntButton,
  DatePicker,
  Divider,
  Form,
  Input,
  Radio,
  Select,
  Space,
} from "antd"
import React from "react"

import { Button } from "@/components/Button"

interface HealthFormProps {
  next: () => void
}

const initialValues = {
  title: "",
  first_name: "",
  last_name: "",
  mobile_phone: "",
  email: "",
  sex: "",
  dob: "",
  national_insurance_number: "",
  nationality: "",
  address: "",
  street_address: "",
  city: "",
  country: "",
  zip_code: "",
  paye_reference: "",
  payroll_number: "",
  emergency_contact_name: "",
  emergency_contact_relationship: "",
  emergency_contact_phone: "",
  bank_name: "",
  bank_account_number: "",
  bank_account_name: "",
  sort_code: "",
  job_status: "",
  student_loan: "",
  employment_start_date: "",
  sign_full_name: "",
  sign_date: "",
}

export const EmployeeForm: React.FC<HealthFormProps> = ({ next }) => {
  const [hasOtherName, setHasOtherName] = React.useState<"yes" | "no" | "">("")
  return (
    <div className="py-10 px-6 bg-white transition-all">
      <Form layout="vertical">
        <h3 className="text-ll font-semibold mb-4">
          Employer: Flourish Advanced Care Limited
        </h3>
        <Form.Item label="PAYE Reference:" required className="font-semibold">
          <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          <p>
            <small>(for official use)</small>
          </p>
        </Form.Item>
        <h3 className="text-2xl font-semibold mb-4">Employee Details</h3>
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
          <Form.Item label="Address" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Street Address" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Zip/Postal Code" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item label="City" required className="font-semibold">
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
            label="National Insurance Number (NI)"
            required
            className="font-semibold"
          >
            <Input
              className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
              type="number"
            />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item label="Payroll Number" required className="font-semibold">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
            <p>(for official use) </p>
          </Form.Item>
        </div>

        <h3 className="text-2xl font-semibold my-4">
          Contact Information(In case of emergency)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item
            label="Name of person to contact"
            required
            className="font-semibold "
          >
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item
            label="Relationship to you"
            required
            className="font-semibold "
          >
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item
            label="Telephone Number"
            required
            className="font-semibold"
          >
            <Input
              type="number"
              className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
            />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item label="Name of Bank" required className="font-semibold ">
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item
            label="Account Holders Name"
            required
            className="font-semibold "
          >
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Account Number" required className="font-semibold">
            <Input
              type="number"
              className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
            />
          </Form.Item>
        </div>

        <div>
          <Form.Item label="Sort Code" required className="font-semibold">
            <Input
              type="number"
              className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
            />
          </Form.Item>
        </div>

        <Divider className="my-[2rem]" />

        <div>
          <h3 className="text-2xl font-semibold my-4">
            Select one of the following three statements:
          </h3>
          <Form.Item required className="font-semibold">
            <Radio.Group>
              <Space direction="vertical">
                <Radio value={"select_1"}>
                  This is my first job since last 6 April and I have not been
                  receiving taxable Jobseeker’s Allowance, Employment and
                  Support Allowance, taxable Incapacity Benefit, State or
                  Occupational Pension.
                </Radio>
                <Radio value={"select_2"}>
                  This is now my only job but since last 6 April I have had
                  another job, or received taxable Jobseeker’s Allowance,
                  Employment and Support Allowance, taxable Incapacity Benefit.
                  I do not receive a State or Occupational Pension.
                </Radio>
                <Radio value={"select_3"}>
                  As well as my new job, I have another job or receive a State
                  or Occupational Pension.
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </div>

        <div>
          <h3 className="text-2xl font-semibold my-4">Student Loans I make:</h3>
          <Form.Item required className="font-semibold">
            <Radio.Group>
              <Space direction="vertical">
                <Radio value={"loan_1"}>
                  Type 1 Student Loan repayments through payroll
                </Radio>
                <Radio value={"loan_2"}>
                  Type 2 Student Loan repayments through payroll
                </Radio>
                <Radio value={"loan_3"}>
                  PostGrad Loan repayments through payroll
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item
            label="Employment start date"
            required
            className="font-semibold "
          >
            <DatePicker className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
        </div>

        <Divider className="my-[1rem]" />

        <h3 className="text-2xl font-semibold my-4">Declaration</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Form.Item
            label="Sign (Full Name)"
            required
            className="font-semibold"
          >
            <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
          <Form.Item label="Date" required className="font-semibold ">
            <DatePicker className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
          </Form.Item>
        </div>

        <div className="md:w-[60%] md:mx-auto my-10">
          <Button
            onClick={next}
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
