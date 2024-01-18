"use client"
import { Button } from "@/components/Button"
import { DatePicker, Form, Input, Radio, Space } from "antd"
import React, { FC } from "react"
import { Formik } from "formik"
import { useInternationalFormData } from "@/hooks/useInternationalFormData"
import { step3Validation } from "@/validations/internationalCandidateForm/step3.validation"

export const InternationalStep3: FC<{ next: () => void; back: () => void }> = ({
  next,
  back,
}) => {
  const { formData, setFormData } = useInternationalFormData()

  return (
    <Formik
      initialValues={formData}
      validate={step3Validation}
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
                Section 5 :- Employment Record
              </h3>
              {/* <p className="md:text-lg">
            Please list chronologically, starting with current or last employer
            Note: Please click on the + sign to add more employment history
          </p> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
                <Form.Item
                  label="Name of Employer"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.previous_name_of_employer}
                    name="previous_name_of_employer"
                  />
                  <span className="text-error">
                    {errors.previous_name_of_employer &&
                      touched.previous_name_of_employer &&
                      errors.previous_name_of_employer}
                  </span>
                </Form.Item>
                <Form.Item
                  label="Employer Address"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.previous_employer_address}
                    name="previous_employer_address"
                  />
                  <span className="text-error">
                    {errors.previous_employer_address &&
                      touched.previous_employer_address &&
                      errors.previous_employer_address}
                  </span>
                </Form.Item>
                <Form.Item
                  label="Length of Employment"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.previous_employment_length}
                    name="previous_employment_length"
                  />
                  <span className="text-error">
                    {errors.previous_employment_length &&
                      touched.previous_employment_length &&
                      errors.previous_employment_length}
                  </span>
                </Form.Item>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
                <Form.Item label="Salary" required className="font-semibold">
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.previous_employment_salary}
                    name="previous_employment_salary"
                  />
                  <span className="text-error">
                    {errors.previous_employment_salary &&
                      touched.previous_employment_salary &&
                      errors.previous_employment_salary}
                  </span>
                </Form.Item>
                <Form.Item label="Date From" required className="font-semibold">
                  <DatePicker
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={(date, dateStr) => {
                      console.log(date, dateStr)
                      setValues((prev) => ({
                        ...prev,
                        previous_employement_start_date: dateStr,
                      }))
                    }}
                    onBlur={handleBlur}
                    name="previous_employement_start_date"
                    // value={dayjs(values.previous_employement_start_date)}
                  />
                  <span className="text-error">
                    {errors.previous_employement_start_date &&
                      touched.previous_employement_start_date &&
                      errors.previous_employement_start_date}
                  </span>
                </Form.Item>
                <Form.Item label="Date To" required className="font-semibold">
                  <DatePicker
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={(date, dateStr) => {
                      console.log(date, dateStr)
                      setValues((prev) => ({
                        ...prev,
                        previous_employement_end_date: dateStr,
                      }))
                    }}
                    onBlur={handleBlur}
                    name="previous_employement_end_date"
                    // value={dayjs(values.previous_employement_end_date)}
                  />
                  <span className="text-error">
                    {errors.previous_employement_end_date &&
                      touched.previous_employement_end_date &&
                      errors.previous_employement_end_date}
                  </span>
                </Form.Item>
              </div>

              <Form.Item
                label="Main Duties and responsibilities"
                required
                className="font-semibold"
              >
                <Input.TextArea
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  style={{ minHeight: 192 }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.previous_employment_duties}
                  name="previous_employment_duties"
                />
                <span className="text-error">
                  {errors.previous_employment_duties &&
                    touched.previous_employment_duties &&
                    errors.previous_employment_duties}
                </span>
              </Form.Item>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
                <Form.Item
                  label="If currently employed how many weeks notice are you required to give?"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.previous_employment_required_weeks_notice}
                    name="previous_employment_required_weeks_notice"
                  />
                  <span className="text-error">
                    {errors.previous_employment_required_weeks_notice &&
                      touched.previous_employment_required_weeks_notice &&
                      errors.previous_employment_required_weeks_notice}
                  </span>
                </Form.Item>
              </div>

              <Form.Item
                label="Reason for leaving or seeking new employment"
                required
                className="font-semibold"
              >
                <Input.TextArea
                  className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                  style={{ minHeight: 192 }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.previous_employment_reason_for_leaving}
                  name="previous_employment_reason_for_leaving"
                />
                <span className="text-error">
                  {errors.previous_employment_reason_for_leaving &&
                    touched.previous_employment_reason_for_leaving &&
                    errors.previous_employment_reason_for_leaving}
                </span>
              </Form.Item>
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
