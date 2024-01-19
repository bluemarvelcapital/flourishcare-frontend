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
import { Formik } from "formik"
import { Nstep3 } from "@/validations/nationalCandidateForm/Nstep3.validations"
import { useNationalFormData } from "@/hooks/useNationalFormData"

interface HealthFormProps {
  next: () => void
  setAttachments: React.Dispatch<React.SetStateAction<any[]>>
}

export const EmployeeForm: React.FC<HealthFormProps> = ({
  next,
  setAttachments,
}) => {
  const [hasOtherName, setHasOtherName] = React.useState<"yes" | "no" | "">("")
  const { formData, setFormData } = useNationalFormData()
  return (
    <div className="py-10 px-6 bg-white transition-all">
      <Formik
        initialValues={formData}
        validate={Nstep3}
        onSubmit={(values, { setSubmitting }) => {
          setFormData((prev) => ({ ...prev, ...values }))
          next()
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setValues,
          isValid,

          /* and other goodies */
        }) => (
          <Form layout="vertical" onFinish={handleSubmit}>
            <h3 className="text-ll font-semibold mb-4">
              Employer: Flourish Advanced Care Limited
            </h3>
            <Form.Item
              label="PAYE Reference:"
              required
              className="font-semibold"
            >
              <Input
                className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.paye_reference}
                name="paye_reference"
              />
              <p>
                <small>(for official use)</small>
              </p>
              <span className="text-error">
                {errors.paye_reference &&
                  touched.paye_reference &&
                  errors.paye_reference}
              </span>
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
                  onChange={(value) => setValues({ ...values, title: value })}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <span className="text-error">
                  {errors.title && touched.title && errors.title}
                </span>
              </Form.Item>
              <Form.Item label="First Name" required className="font-semibold">
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  name="first_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                />
                <span className="text-error">
                  {errors.first_name && touched.first_name && errors.first_name}
                </span>
              </Form.Item>
              <Form.Item label="Last Name" required className="font-semibold">
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  name="last_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                />
                <span className="text-error">
                  {errors.last_name && touched.last_name && errors.last_name}
                </span>
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Form.Item label="Address" required className="font-semibold">
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
                <span className="text-error">
                  {errors.address && touched.address && errors.address}
                </span>{" "}
              </Form.Item>
              <Form.Item
                label="Street Address"
                required
                className="font-semibold"
              >
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  name="street_address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.street_address}
                />
                <span className="text-error">
                  {errors.street_address &&
                    touched.street_address &&
                    errors.street_address}
                </span>
              </Form.Item>
              <Form.Item
                label="Zip/Postal Code"
                required
                className="font-semibold"
              >
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  name="zip_code"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.zip_code}
                />
                <span className="text-error">
                  {errors.zip_code && touched.zip_code && errors.zip_code}
                </span>
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Form.Item label="City" required className="font-semibold">
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                />
                <span className="text-error">
                  {errors.city && touched.city && errors.city}
                </span>
              </Form.Item>
              <Form.Item
                label="Mobile Telephone Number"
                required
                className="font-semibold"
              >
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  type="number"
                  name="mobile_phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mobile_phone}
                />
                <span className="text-error">
                  {errors.mobile_phone &&
                    touched.mobile_phone &&
                    errors.mobile_phone}
                </span>
              </Form.Item>
              <Form.Item label="Email" required className="font-semibold">
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <span className="text-error">
                  {errors.email && touched.email && errors.email}
                </span>
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Form.Item label="Sex" required className="font-semibold">
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  name="sex"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.sex}
                />
                <span className="text-error">
                  {errors.sex && touched.sex && errors.sex}
                </span>
              </Form.Item>
              <Form.Item
                label="Date of Birth"
                required
                className="font-semibold "
              >
                <DatePicker
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  name="dob"
                  onChange={(value) =>
                    setValues({ ...values, dob: value as any })
                  }
                  onBlur={handleBlur}
                  // value={values.dob as any}
                />
                <span className="text-error">
                  {errors.dob && touched.dob && errors.dob}
                </span>
              </Form.Item>
              <Form.Item
                label="National Insurance Number (NI)"
                required
                className="font-semibold"
              >
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  type="number"
                  name="national_insurance_number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.national_insurance_number}
                />
                <span className="text-error">
                  {errors.national_insurance_number &&
                    touched.national_insurance_number &&
                    errors.national_insurance_number}
                </span>
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Form.Item
                label="Payroll Number"
                required
                className="font-semibold"
              >
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.payroll_number}
                  name="payroll_number"
                />
                <p>(for official use) </p>
                <span className="text-error">
                  {errors.payroll_number &&
                    touched.payroll_number &&
                    errors.payroll_number}
                </span>
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
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.emergency_contact_name}
                  name="emergency_contact_name"
                />

                <span className="text-error">
                  {errors.emergency_contact_name &&
                    touched.emergency_contact_name &&
                    errors.emergency_contact_name}
                </span>
              </Form.Item>
              <Form.Item
                label="Relationship to you"
                required
                className="font-semibold "
              >
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  value={values.emergency_contact_relationship}
                  name="emergency_contact_relationship"
                />

                <span className="text-error">
                  {errors.emergency_contact_relationship &&
                    touched.emergency_contact_relationship &&
                    errors.emergency_contact_relationship}
                </span>
              </Form.Item>
              <Form.Item
                label="Telephone Number"
                required
                className="font-semibold"
              >
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="number"
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  value={values.emergency_contact_phone}
                  name="emergency_contact_phone"
                />

                <span className="text-error">
                  {errors.emergency_contact_phone &&
                    touched.emergency_contact_phone &&
                    errors.emergency_contact_phone}
                </span>
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Form.Item
                label="Name of Bank"
                required
                className="font-semibold "
              >
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  value={values.bank_name}
                  name="bank_name"
                />

                <span className="text-error">
                  {errors.bank_name && touched.bank_name && errors.bank_name}
                </span>
              </Form.Item>
              <Form.Item
                label="Account Holders Name"
                required
                className="font-semibold "
              >
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  value={values.bank_account_name}
                  name="bank_account_name"
                />

                <span className="text-error">
                  {errors.bank_account_name &&
                    touched.bank_account_name &&
                    errors.bank_account_name}
                </span>
              </Form.Item>
              <Form.Item
                label="Account Number"
                required
                className="font-semibold"
              >
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="number"
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  value={values.bank_account_number}
                  name="bank_account_number"
                />

                <span className="text-error">
                  {errors.bank_account_number &&
                    touched.bank_account_number &&
                    errors.bank_account_number}
                </span>
              </Form.Item>
            </div>

            <div>
              <Form.Item label="Sort Code" required className="font-semibold">
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="number"
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  value={values.sort_code}
                  name="sort_code"
                />

                <span className="text-error">
                  {errors.sort_code && touched.sort_code && errors.sort_code}
                </span>
              </Form.Item>
            </div>

            <Divider className="my-[2rem]" />

            <div>
              <h3 className="text-2xl font-semibold my-4">
                Select one of the following three statements:
              </h3>
              <Form.Item required className="font-semibold">
                <Radio.Group
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.job_status}
                  name="job_status"
                >
                  <Space direction="vertical">
                    <Radio value={"select_1"}>
                      This is my first job since last 6 April and I have not
                      been receiving taxable Jobseeker’s Allowance, Employment
                      and Support Allowance, taxable Incapacity Benefit, State
                      or Occupational Pension.
                    </Radio>
                    <Radio value={"select_2"}>
                      This is now my only job but since last 6 April I have had
                      another job, or received taxable Jobseeker’s Allowance,
                      Employment and Support Allowance, taxable Incapacity
                      Benefit. I do not receive a State or Occupational Pension.
                    </Radio>
                    <Radio value={"select_3"}>
                      As well as my new job, I have another job or receive a
                      State or Occupational Pension.
                    </Radio>
                  </Space>
                </Radio.Group>
                <p className="text-error">
                  {errors.job_status && touched.job_status && errors.job_status}
                </p>
              </Form.Item>
            </div>

            <div>
              <h3 className="text-2xl font-semibold my-4">
                Student Loans I make:
              </h3>
              <Form.Item required className="font-semibold">
                <Radio.Group
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.student_loan}
                  name="student_loan"
                >
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
                <p className="text-error">
                  {errors.student_loan &&
                    touched.student_loan &&
                    errors.student_loan}
                </p>
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Form.Item
                label="Employment start date"
                required
                className="font-semibold "
              >
                <DatePicker
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  onChange={(value) =>
                    setValues({
                      ...values,
                      employment_start_date: value as any,
                    })
                  }
                  onBlur={handleBlur}
                  // value={values.employment_start_date as any}
                />
                <span className="text-error">
                  {errors.employment_start_date &&
                    touched.employment_start_date &&
                    errors.employment_start_date}
                </span>
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
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  value={values.sign_full_name}
                  name="sign_full_name"
                />

                <span className="text-error">
                  {errors.sign_full_name &&
                    touched.sign_full_name &&
                    errors.sign_full_name}
                </span>
              </Form.Item>
              <Form.Item label="Date" required className="font-semibold ">
                <DatePicker
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  onChange={(value) =>
                    setValues({ ...values, sign_date: value as any })
                  }
                  onBlur={handleBlur}
                  // value={values.sign_date as any}
                />
                <span className="text-error">
                  {errors.sign_date && touched.sign_date && errors.sign_date}
                </span>
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
        )}
      </Formik>
    </div>
  )
}
