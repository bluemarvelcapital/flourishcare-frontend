"use client"
import { Button } from "@/components/Button"
import { DatePicker, Form, Input, Radio, Space } from "antd"
import React, { FC } from "react"
import { Formik } from "formik"
import { useInternationalFormData } from "@/hooks/useInternationalFormData"
import { step2Validation } from "@/validations/internationalCandidateForm/step2.validation"

export const InternationalStep2: FC<{
  next: () => void
  back: () => void
  setAttachments: React.Dispatch<React.SetStateAction<any[]>>
}> = ({ next, back, setAttachments }) => {
  const { formData, setFormData } = useInternationalFormData()
  return (
    <Formik
      initialValues={formData}
      validate={step2Validation}
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
            <section>
              <h3 className="text-2xl font-semibold my-4">
                Section 2 :- Rehabilitation of Offenders Act
              </h3>
              <Form.Item
                label="Have you ever been convicted of a criminal offence?"
                required
                className="font-semibold"
              >
                <Radio.Group
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ever_convicted_of_a_criminal_offence}
                  name="ever_convicted_of_a_criminal_offence"
                >
                  <Space direction="vertical">
                    <Radio value={"yes"}>Yes</Radio>
                    <Radio value={"no"}>No</Radio>
                  </Space>
                </Radio.Group>
                <p className="text-error">
                  {errors.ever_convicted_of_a_criminal_offence &&
                    touched.ever_convicted_of_a_criminal_offence &&
                    errors.ever_convicted_of_a_criminal_offence}
                </p>
              </Form.Item>

              <Form.Item
                label="Have you any prosecutions pending?"
                required
                className="font-semibold"
              >
                <Radio.Group
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pending_prosecutions}
                  name="pending_prosecutions"
                >
                  <Space direction="vertical">
                    <Radio value={"yes"}>Yes</Radio>
                    <Radio value={"no"}>No</Radio>
                  </Space>
                </Radio.Group>
                <p className="text-error">
                  {errors.pending_prosecutions &&
                    touched.pending_prosecutions &&
                    errors.pending_prosecutions}
                </p>
              </Form.Item>
            </section>

            <section>
              <h3 className="text-2xl font-semibold my-4">
                Section 3:- Health
              </h3>
              <Form.Item
                label="Are you registered disabled?"
                required
                className="font-semibold"
              >
                <Radio.Group
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.registered_disabled}
                  name="registered_disabled"
                >
                  <Space direction="vertical">
                    <Radio value={"yes"}>Yes</Radio>
                    <Radio value={"no"}>No</Radio>
                  </Space>
                </Radio.Group>
                <p className="text-error">
                  {errors.registered_disabled &&
                    touched.registered_disabled &&
                    errors.registered_disabled}
                </p>
              </Form.Item>
            </section>

            <section>
              <h3 className="text-2xl font-semibold my-4">
                Section 4:- Education
              </h3>
              <p className="md:text-lg">
                Please list your qualifications in reverse order, starting with
                the most recent first. Also, include any training that you have
                received which did not lead to a qualification but which you
                feel is relevant to the post. If short-listed for an interview,
                please be prepared to bring original copies of any certificates
                relating to post-school qualifications or vocational
                qualifications.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
                <Form.Item
                  label="Date Obtained"
                  required
                  className="font-semibold"
                >
                  <DatePicker
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={(date, dateStr) => {
                      console.log(date, dateStr)
                      setValues((prev) => ({
                        ...prev,
                        education_date_obtained: dateStr,
                      }))
                    }}
                    onBlur={handleBlur}
                    name="education_date_obtained"
                    // value={dayjs(values.education_date_obtained)}
                  />
                  <span className="text-error">
                    {errors.education_date_obtained &&
                      touched.education_date_obtained &&
                      errors.education_date_obtained}
                  </span>
                </Form.Item>
                <Form.Item
                  label="Place of study & address"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.education_place_of_study}
                    name="education_place_of_study"
                  />
                  <span className="text-error">
                    {errors.education_place_of_study &&
                      touched.education_place_of_study &&
                      errors.education_place_of_study}
                  </span>
                </Form.Item>
                <Form.Item
                  label="Examinations taken & grades*"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.education_grade}
                    name="education_grade"
                  />
                  <span className="text-error">
                    {errors.education_grade &&
                      touched.education_grade &&
                      errors.education_grade}
                  </span>
                </Form.Item>
              </div>

              <p className="text-lg font-semibold">Other Qualifications:</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
                <Form.Item
                  label="Date Obtained"
                  required
                  className="font-semibold"
                >
                  <DatePicker
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={(date, dateStr) => {
                      console.log(date, dateStr)
                      setValues((prev) => ({
                        ...prev,
                        other_qualification_date_obtained: dateStr,
                      }))
                    }}
                    onBlur={handleBlur}
                    name="other_qualification_date_obtained"
                    // value={dayjs(values.other_qualification_date_obtained)}
                  />
                  <span className="text-error">
                    {errors.other_qualification_date_obtained &&
                      touched.other_qualification_date_obtained &&
                      errors.other_qualification_date_obtained}
                  </span>
                </Form.Item>
                <Form.Item
                  label="Place of study & address"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.other_qualification_place_of_study}
                    name="other_qualification_place_of_study"
                  />
                  <span className="text-error">
                    {errors.other_qualification_place_of_study &&
                      touched.other_qualification_place_of_study &&
                      errors.other_qualification_place_of_study}
                  </span>
                </Form.Item>
                <Form.Item
                  label="Examinations taken & grades"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.other_qualification_grade}
                    name="other_qualification_grade"
                  />
                  <span className="text-error">
                    {errors.other_qualification_grade &&
                      touched.other_qualification_grade &&
                      errors.other_qualification_grade}
                  </span>
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
