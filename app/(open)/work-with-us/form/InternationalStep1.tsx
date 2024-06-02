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
import { Formik } from "formik"
import { useInternationalFormData } from "@/hooks/useInternationalFormData"
import { step1Validation } from "@/validations/internationalCandidateForm/step1.validation"

export const InternationalStep1: FC<{
  next: () => void
  setAttachments: React.Dispatch<React.SetStateAction<any[]>>
}> = ({ next, setAttachments }) => {
  const [hasOtherName, setHasOtherName] = React.useState<"yes" | "no" | "">("")
  const { formData, setFormData } = useInternationalFormData()

  return (
    <Formik
      initialValues={formData}
      validate={step1Validation}
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
          <div className="py-10 px-6 bg-white transition-all">
            <Form.Item
              label="If you obtained this position, would you continue in any other employment OR take on any other employment? "
              required
              className="font-semibold"
            >
              <Radio.Group
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.take_on_other_employement}
                name="take_on_other_employement"
              >
                <Space direction="vertical">
                  <Radio value={"yes"}>Yes</Radio>
                  <Radio value={"no"}>No</Radio>
                </Space>
              </Radio.Group>
              <p className="text-error">
                {errors.take_on_other_employement &&
                  touched.take_on_other_employement &&
                  errors.take_on_other_employement}
              </p>
            </Form.Item>

            <Form.Item
              label="Do we need to make any disability-related adjustments to allow you to take part in the recruitment process? "
              required
              className="font-semibold"
            >
              <Radio.Group
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.need_disability_related_adjustments}
                name="need_disability_related_adjustments"
              >
                <Space direction="vertical">
                  <Radio value={"yes"}>Yes</Radio>
                  <Radio value={"no"}>No</Radio>
                </Space>
              </Radio.Group>
              <p className="text-error">
                {errors.need_disability_related_adjustments &&
                  touched.need_disability_related_adjustments &&
                  errors.need_disability_related_adjustments}
              </p>
            </Form.Item>

            <Form.Item
              label="Do you have any mental health or physical health support requirements to be considered if offered a job?"
              required
              className="font-semibold"
            >
              <Radio.Group
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.health_support_needs}
                name="health_support_needs"
              >
                <Space direction="vertical">
                  <Radio value={"yes"}>Yes</Radio>
                  <Radio value={"no"}>No</Radio>
                </Space>
              </Radio.Group>
              <p className="text-error">
                {errors.health_support_needs &&
                  touched.health_support_needs &&
                  errors.health_support_needs}
              </p>
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
                      onChange={(value) =>
                        setValues({ ...values, title: value })
                      }
                      onBlur={handleBlur}
                      value={values.title}
                    />
                    <span className="text-error">
                      {errors.title && touched.title && errors.title}
                    </span>
                  </Form.Item>
                  <Form.Item
                    label="First Name"
                    required
                    className="font-semibold"
                  >
                    <Input
                      className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                      name="first_name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.first_name}
                    />
                    <span className="text-error">
                      {errors.first_name &&
                        touched.first_name &&
                        errors.first_name}
                    </span>
                  </Form.Item>
                  <Form.Item
                    label="Last Name"
                    required
                    className="font-semibold"
                  >
                    <Input
                      className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                      name="last_name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.last_name}
                    />
                    <span className="text-error">
                      {errors.last_name &&
                        touched.last_name &&
                        errors.last_name}
                    </span>
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
                        value={values.other_names}
                        onChange={handleChange}
                        name="other_names"
                        onBlur={handleBlur}
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
                      name="home_phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.home_phone}
                    />
                    <span className="text-error">
                      {errors.home_phone &&
                        touched.home_phone &&
                        errors.home_phone}
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
                      onChange={(date, dateStr) => {
                        console.log(date, dateStr)
                        setValues((prev) => ({
                          ...prev,
                          dob: dateStr,
                        }))
                      }}
                      onBlur={handleBlur}
                      // value={dayjs(values.dob)}
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
                  <Form.Item
                    label="Do you have a current full driving license:?"
                    required
                    className="font-semibold"
                  >
                    <Radio.Group
                      name="driving_license"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.driving_license}
                    >
                      <Radio value={"yes"}>Yes</Radio>
                      <Radio value={"no"}>No</Radio>
                    </Radio.Group>
                    <p className="text-error">
                      {errors.driving_license &&
                        touched.driving_license &&
                        errors.driving_license}
                    </p>
                  </Form.Item>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <Form.Item
                    label="Country"
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
                        setValues({ ...values, country: value })
                      }
                      onBlur={handleBlur}
                      value={values.country}
                    />
                    <span className="text-error">
                      {errors.country && touched.country && errors.country}
                    </span>
                  </Form.Item>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <Form.Item
                    label="Copy of a valid passport"
                    required
                    className="font-semibold w-full"
                  >
                    <input
                      accept=".pdf, .docx, .doc"
                      type="file"
                      className="p-3 border-[1px] rounded-md"
                      onChange={(e) => {
                        setValues({
                          ...values,
                          passport: e.target.value,
                        })
                        setAttachments((prev) => [
                          ...prev,
                          {
                            filename: "Valid Passport",
                            content: e.target.files![0],
                          },
                        ])
                      }}
                      name="passport"
                      // value={values.passport}
                    />
                    <p className="text-error">
                      {errors.passport && touched.passport && errors.passport}
                    </p>
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
                      onChange={(e) => {
                        setValues({
                          ...values,
                          photo_passport: e.target.value,
                        })
                        setAttachments((prev) => [
                          ...prev,
                          {
                            filename: "Passport Photograph",
                            content: e.target.files![0],
                          },
                        ])
                      }}
                      name="photo_passport"
                      // value={values.photo_passport}
                    />
                    <p className="text-error">
                      {errors.photo_passport &&
                        touched.photo_passport &&
                        errors.photo_passport}
                    </p>
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
                      onChange={(e) => {
                        setValues({
                          ...values,
                          ielts_result: e.target.value,
                        })
                        setAttachments((prev) => [
                          ...prev,
                          {
                            filename: "IELTS Result And Grade",
                            content: e.target.files![0],
                          },
                        ])
                      }}
                      name="ielts_result"
                      // value={values.ielts_result}
                    />
                    <p className="text-error">
                      {errors.ielts_result &&
                        touched.ielts_result &&
                        errors.ielts_result}
                    </p>
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
                      onChange={(e) => {
                        setValues({
                          ...values,
                          proof_of_covid_vaccination: e.target.value,
                        })
                        setAttachments((prev) => [
                          ...prev,
                          {
                            filename: "Proof Of Covid Vaccination",
                            content: e.target.files![0],
                          },
                        ])
                      }}
                      name="proof_of_covid_vaccination"
                      // value={values.proof_of_covid_vaccination}
                    />
                    <p className="text-error">
                      {errors.proof_of_covid_vaccination &&
                        touched.proof_of_covid_vaccination &&
                        errors.proof_of_covid_vaccination}
                    </p>
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
                      onChange={(e) => {
                        setValues({
                          ...values,
                          evidence_of_TB_test_result: e.target.value,
                        })
                        setAttachments((prev) => [
                          ...prev,
                          {
                            filename: "TB Test Result",
                            content: e.target.files![0],
                          },
                        ])
                      }}
                      name="evidence_of_TB_test_result"
                      // value={values.evidence_of_TB_test_result}
                    />
                    <p className="text-error">
                      {errors.evidence_of_TB_test_result &&
                        touched.evidence_of_TB_test_result &&
                        errors.evidence_of_TB_test_result}
                    </p>
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="md:w-[60%] md:mx-auto my-[2rem]">
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
          </div>
        </Form>
      )}
    </Formik>
  )
}
