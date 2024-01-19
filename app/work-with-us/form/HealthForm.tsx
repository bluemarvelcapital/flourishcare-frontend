"use client"
import { DatePicker, Form, Input, Radio, Select } from "antd"
import React from "react"
import { countries } from "@/constants/countries"
import { UploadOutlined } from "@ant-design/icons"
import { Button } from "@/components/Button"
import { Formik } from "formik"
import { Nstep2 } from "@/validations/nationalCandidateForm/Nstep2.validation"
import { Nstep2I } from "@/interface/nationalCandidateForm"
import { useNationalFormData } from "@/hooks/useNationalFormData"

interface HealthFormProps {
  next: () => void
  setAttachments: React.Dispatch<React.SetStateAction<any[]>>
}

export const HealthForm: React.FC<HealthFormProps> = ({
  next,
  setAttachments,
}) => {
  const [hasOtherName, setHasOtherName] = React.useState<"yes" | "no" | "">("")
  const { formData, setFormData } = useNationalFormData()

  return (
    <div className="py-10 px-6 bg-white transition-all">
      <h3 className="text-2xl font-semibold mb-4">Personal Details</h3>
      <Formik
        initialValues={formData}
        validate={Nstep2}
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
            <Form.Item
              label="Post Applied For:"
              required
              className="font-semibold"
            >
              <Input
                className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.post_applied}
                name="post_applied"
              />
              <span className="text-error">
                {errors.post_applied &&
                  touched.post_applied &&
                  errors.post_applied}
              </span>
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
              <Form.Item
                label="Home Telephone Number"
                required
                className="font-semibold"
              >
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  type="number"
                  name="home_phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.home_phone}
                />
                <span className="text-error">
                  {errors.home_phone && touched.home_phone && errors.home_phone}
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
                label="Are you aged 18 years or over?"
                required
                className="font-semibold"
              >
                <Radio.Group
                  name="over_18"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.over_18}
                >
                  <Radio value={"yes"}>Yes</Radio>
                  <Radio value={"no"}>No</Radio>
                </Radio.Group>
                <p className="text-error">
                  {errors.over_18 && touched.over_18 && errors.over_18}
                </p>
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
                  onChange={(value) =>
                    setValues({ ...values, nationality: value })
                  }
                  onBlur={handleBlur}
                  value={values.nationality}
                />
                <span className="text-error">
                  {errors.nationality &&
                    touched.nationality &&
                    errors.nationality}
                </span>
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
                <Input
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  name="general_pactitioner"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.general_pactitioner}
                />
                <span className="text-error">
                  {errors.general_pactitioner &&
                    touched.general_pactitioner &&
                    errors.general_pactitioner}
                </span>
              </Form.Item>
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
                </span>
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Form.Item label="City" required className="font-semibold ">
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
              <Form.Item label="Country" required className="font-semibold ">
                <Select
                  className="border-[#00000060] h-[2rem] w-full focus:border-success hover:border-success"
                  style={{ height: "3.1rem" }}
                  size="large"
                  placeholder="Select"
                  options={countries}
                  showSearch
                  onChange={(value) => setValues({ ...values, country: value })}
                  onBlur={handleBlur}
                  value={values.country}
                />
                <span className="text-error">
                  {errors.country && touched.country && errors.country}
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

            <div className="md:w-[60%] md:mx-auto my-10">
              <Button
                className={`w-full rounded-[100px] text-xl ${
                  !isValid && "cursor-not-allowed"
                }`}
                style={{
                  borderRadius: "100px",
                  background: !isValid ? "gray" : "",
                }}
                type="submit"
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
