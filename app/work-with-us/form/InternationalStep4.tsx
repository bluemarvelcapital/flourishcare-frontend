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
import { Formik } from "formik"
import { useInternationalFormData } from "@/hooks/useInternationalFormData"
import { step4Validation } from "@/validations/internationalCandidateForm/step4.validation"

export const InternationalStep4: FC<{ next: () => void; back: () => void }> = ({
  next,
  back,
}) => {
  const { formData, setFormData } = useInternationalFormData()

  return (
    <Formik
      initialValues={formData}
      validate={step4Validation}
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
                Section 6 :- Reference
              </h3>
              <p className="md:text-lg">(1) Referee:*</p>
              <p className="md:text-lg">
                Please give the names and addresses of your two most recent
                employers (if applicable). If you are unable to do this, please
                clearly outline who your referees are.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
                <Form.Item
                  label="Name of Referee"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.referee_name1}
                    name="referee_name1"
                  />
                  <span className="text-error">
                    {errors.referee_name1 &&
                      touched.referee_name1 &&
                      errors.referee_name1}
                  </span>
                </Form.Item>
                <Form.Item
                  label="Referee job title"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.referee_job_title1}
                    name="referee_job_title1"
                  />
                  <span className="text-error">
                    {errors.referee_job_title1 &&
                      touched.referee_job_title1 &&
                      errors.referee_job_title1}
                  </span>
                </Form.Item>
                <Form.Item label="Email" required className="font-semibold">
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.referee_email_1}
                    name="referee_email_1"
                  />
                  <span className="text-error">
                    {errors.referee_email_1 &&
                      touched.referee_email_1 &&
                      errors.referee_email_1}
                  </span>
                </Form.Item>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
                <Form.Item
                  label="Telephone No"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.referee_phone_1}
                    name="referee_phone_1"
                  />
                  <span className="text-error">
                    {errors.referee_phone_1 &&
                      touched.referee_phone_1 &&
                      errors.referee_phone_1}
                  </span>
                </Form.Item>
                <Form.Item
                  label="Company Name"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.referee_company_name1}
                    name="referee_company_name1"
                  />
                  <span className="text-error">
                    {errors.referee_company_name1 &&
                      touched.referee_company_name1 &&
                      errors.referee_company_name1}
                  </span>
                </Form.Item>
                <Form.Item label="Address" required className="font-semibold">
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.referee_address_1}
                    name="referee_address_1"
                  />
                  <span className="text-error">
                    {errors.referee_address_1 &&
                      touched.referee_address_1 &&
                      errors.referee_address_1}
                  </span>
                </Form.Item>
              </div>

              <Form.Item
                label="May we contact your references prior to job offer?"
                required
                className="font-semibold"
              >
                <Radio.Group
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.can_contact_reference1}
                  name="can_contact_reference1"
                >
                  <Space direction="vertical">
                    <Radio value={"yes"}>Yes</Radio>
                    <Radio value={"no"}>No</Radio>
                  </Space>
                </Radio.Group>
                <p className="text-error">
                  {errors.can_contact_reference1 &&
                    touched.can_contact_reference1 &&
                    errors.can_contact_reference1}
                </p>
              </Form.Item>
            </section>

            <section>
              <p className="md:text-lg">(2) Referee:*</p>
              <p className="md:text-lg">
                Please give the names and addresses of your two most recent
                employers (if applicable). If you are unable to do this, please
                clearly outline who your referees are.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
                <Form.Item
                  label="Name of Referee"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.referee_name_2}
                    name="referee_name_2"
                  />
                  <span className="text-error">
                    {errors.referee_name_2 &&
                      touched.referee_name_2 &&
                      errors.referee_name_2}
                  </span>
                </Form.Item>
                <Form.Item
                  label="Referee job title"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.referee_job_title_2}
                    name="referee_job_title_2"
                  />
                  <span className="text-error">
                    {errors.referee_job_title_2 &&
                      touched.referee_job_title_2 &&
                      errors.referee_job_title_2}
                  </span>
                </Form.Item>
                <Form.Item label="Email" required className="font-semibold">
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.referee_email_2}
                    name="referee_email_2"
                  />
                  <span className="text-error">
                    {errors.referee_email_2 &&
                      touched.referee_email_2 &&
                      errors.referee_email_2}
                  </span>
                </Form.Item>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
                <Form.Item
                  label="Telephone No"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.referee_phone_2}
                    name="referee_phone_2"
                  />
                  <span className="text-error">
                    {errors.referee_phone_2 &&
                      touched.referee_phone_2 &&
                      errors.referee_phone_2}
                  </span>
                </Form.Item>
                <Form.Item
                  label="Company Name"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.referee_company_name_2}
                    name="referee_company_name_2"
                  />
                  <span className="text-error">
                    {errors.referee_company_name_2 &&
                      touched.referee_company_name_2 &&
                      errors.referee_company_name_2}
                  </span>
                </Form.Item>
                <Form.Item label="Address" required className="font-semibold">
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.referee_address_2}
                    name="referee_address_2"
                  />
                  <span className="text-error">
                    {errors.referee_address_2 &&
                      touched.referee_address_2 &&
                      errors.referee_address_2}
                  </span>
                </Form.Item>
              </div>

              <Form.Item
                label="May we contact your references prior to job offer?"
                required
                className="font-semibold"
              >
                <Radio.Group
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.can_contact_reference_2}
                  name="can_contact_reference_2"
                >
                  <Space direction="vertical">
                    <Radio value={"yes"}>Yes</Radio>
                    <Radio value={"no"}>No</Radio>
                  </Space>
                </Radio.Group>
                <p className="text-error">
                  {errors.can_contact_reference_2 &&
                    touched.can_contact_reference_2 &&
                    errors.can_contact_reference_2}
                </p>
              </Form.Item>
            </section>

            <section>
              <h3 className="text-2xl font-semibold my-4">
                Section 7 :- Emergency Contact/Next of kin
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Form.Item
                  label="First Name"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.emergency_contact_first_name}
                    name="emergency_contact_first_name"
                  />
                  <span className="text-error">
                    {errors.emergency_contact_first_name &&
                      touched.emergency_contact_first_name &&
                      errors.emergency_contact_first_name}
                  </span>
                </Form.Item>
                <Form.Item label="Last Name" required className="font-semibold">
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.emergency_contact_last_name}
                    name="emergency_contact_last_name"
                  />
                  <span className="text-error">
                    {errors.emergency_contact_last_name &&
                      touched.emergency_contact_last_name &&
                      errors.emergency_contact_last_name}
                  </span>
                </Form.Item>
                <Form.Item
                  label="Telephone No"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                <Form.Item label="Email" required className="font-semibold">
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.emergency_contact_email}
                    name="emergency_contact_email"
                  />
                  <span className="text-error">
                    {errors.emergency_contact_email &&
                      touched.emergency_contact_email &&
                      errors.emergency_contact_email}
                  </span>
                </Form.Item>
                <Form.Item label="Address" required className="font-semibold">
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.emergency_contact_address}
                    name="emergency_contact_address"
                  />
                  <span className="text-error">
                    {errors.emergency_contact_address &&
                      touched.emergency_contact_address &&
                      errors.emergency_contact_address}
                  </span>
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.personal_attributes}
                  name="personal_attributes"
                />
                <span className="text-error">
                  {errors.personal_attributes &&
                    touched.personal_attributes &&
                    errors.personal_attributes}
                </span>
              </Form.Item>
            </section>

            <section>
              <h3 className="text-2xl font-semibold my-4">
                Section 9 :- Declaration
              </h3>
              <p className="md:text-lg">
                I confirm that the information provided in this application (and
                within my Curriculum Vitae if applicable) is both truthful and
                accurate. I have omitted no facts that could affect my
                employment. I understand that any false misleading statements
                could place any subsequent employment in jeopardy. I understand
                that any employment entered into is subject to documentary
                evidence of my right to work in the UK and satisfactory
                references. I expressly consent to personal data contained
                within this form being recorded for the purposes of assessing
                suitability for the post and may form the basis of any
                subsequent personnel file.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
                <Form.Item
                  label="Signed (Full Name)"
                  required
                  className="font-semibold"
                >
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.sign_full_name}
                    name="sign_full_name"
                  />
                  <span className="text-error">
                    {errors.sign_full_name &&
                      touched.sign_full_name &&
                      errors.sign_full_name}
                  </span>
                </Form.Item>
                <Form.Item label="Date" required className="font-semibold">
                  <DatePicker
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    onChange={(date, dateStr) => {
                      console.log(date, dateStr)
                      setValues((prev) => ({
                        ...prev,
                        sign_date: dateStr,
                      }))
                    }}
                    onBlur={handleBlur}
                    name="sign_date"
                    // value={dayjs(values.sign_date)}
                  />
                  <span className="text-error">
                    {errors.sign_date && touched.sign_date && errors.sign_date}
                  </span>
                </Form.Item>
              </div>
              <div>
                <p className="md:text-lg">
                  Flourish Advanced Care Limited undertakes that it will treat
                  any personal information that you provide to us, or that we
                  obtain from you, in accordance with the requirements of the
                  Data Protection Act 1998. After initial assessment, Flourish
                  Advanced Care Limited may keep your details on file for
                  opportunities that may arise in the future. Please tick if you
                  do not wish us to hold your details.
                </p>
                <Form.Item required className="font-semibold mt-3">
                  <Radio.Group
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.can_hold_details}
                    name="can_hold_details"
                  >
                    <Space direction="vertical">
                      <Radio value={"yes"}>Yes</Radio>
                      <Radio value={"no"}>No</Radio>
                    </Space>
                  </Radio.Group>
                  <p className="text-error">
                    {errors.can_hold_details &&
                      touched.can_hold_details &&
                      errors.can_hold_details}
                  </p>
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  label="Upload CV "
                  required
                  className="font-semibold"
                >
                  <input
                    accept=".pdf, .docx, .doc"
                    type="file"
                    className="p-3 border-[1px] rounded-md"
                    onChange={(e) =>
                      setValues({
                        ...values,
                        cv: e.target.value,
                      })
                    }
                    name="cv"
                    // value={values.cv}
                  />

                  <p>
                    <small>
                      Accepted file types: pdf, doc, docx, jpg, Max. file size:
                      5 MB
                    </small>
                  </p>
                  <p className="text-error">
                    {errors.cv && touched.cv && errors.cv}
                  </p>
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
