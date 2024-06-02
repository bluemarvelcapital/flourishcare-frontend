"use client"
import { Button } from "@/components/Button"
import { useNationalFormData } from "@/hooks/useNationalFormData"
import { Nstep4 } from "@/validations/nationalCandidateForm/Nstep4.validation"
import { LoadingOutlined } from "@ant-design/icons"
import { DatePicker, Form, Input, Result, Modal } from "antd"
import { Formik } from "formik"
import React from "react"

export const NonDisclosureForm: React.FC<{
  setAttachments: React.Dispatch<React.SetStateAction<any[]>>
  attachments: any[]
}> = ({ setAttachments, attachments }) => {
  const { formData, setFormData } = useNationalFormData()
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [head, setHead] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [status, setStatus] = React.useState("")

  return (
    <div className="py-10 px-6 bg-white transition-all">
      <h3 className="text-2xl font-semibold mb-4">Non-Disclosure Form</h3>
      <p className="mb-5">
        During the course of my engagement with Client (referred to as the
        ‘Client’), I may learn of confidential information relating to the
        Client. Confidential information includes matters not generally known
        outside the Client, and includes various developments, inventions,
        improvements, methods, etc., relating to products, services marketed or
        used by the Client (e.g. relating to sales, costs, profits,
        organisation, customer lists, pricing methods, etc.). I agree not to
        disclose any confidential information to others or to make use of it
        either during or after my engagement by the Client, whether or not such
        information is produced by my own efforts, except as expressly permitted
        in writing by the Client. Also, I may learn of apparatus, methods, ways
        of business, etc., which in themselves are generally known but whose use
        by the Client is not generally known, and I agree not to disclose to
        others such use, either during or after my engagements. All inventions,
        discoveries, developments and improvements (hereafter referred to as
        ‘Inventions’) made or conceived during the course of my engagement with
        the Client, whether the same are patentable or not, shall become and
        remain the sole and exclusive property of the Client. I agree to notify
        immediately the Client in writing of such Inventions, and hereby
        transfer all rights title and interest in and to any such Inventions to
        the Client. I hereby assign to the Client all rights title and interest
        in and to all copyrights on all writings, documents, reports, computer
        programs and other works made or written by me during the course of my
        engagement with the Client. My obligations under this Agreement shall
        survive the termination of my engagement with the Client regardless of
        the manner of such termination, and shall be binding upon my heirs,
        executors and administrators.
      </p>
      <Formik
        initialValues={formData}
        validate={Nstep4}
        onSubmit={async (values, { setSubmitting }) => {
          setFormData((prev) => ({ ...prev, ...values }))

          const parseData = Object.entries(values).map(([key, value]) => {
            const datumShape = [key.replaceAll("_", " "), String(value)] as [
              string,
              string
            ]
            return datumShape
          })
          const withoutPaths = parseData.filter((item) => {
            if (!item[1].includes("fakepath")) {
              return true
            }
          })
          const questions = withoutPaths.map((item) => item[0]).join(":::")
          const answers = withoutPaths.map((item) => item[1]).join(":::")
          console.log(questions, answers)

          try {
            setLoading(true)
            const formdata = new FormData()
            formdata.append("type", "national")
            formdata.append("questions", questions)
            formdata.append("answers", answers)
            for (let value of attachments) {
              formdata.append("attachments", value.content, value.filename)
            }

            const res = await fetch(
              "https://bluemarvel-mail-server.onrender.com/job-application/new",
              {
                method: "POST",
                body: formdata,
                redirect: "follow",
              }
            )
            const response = await res.json()
            console.log(response)

            setMessage(
              response.message ||
                "Your details has been recieved, we will get back to you soon."
            )
            setHead(
              response.status === "success"
                ? "Application sent Successfully"
                : "Application not sent"
            )
            setStatus(response.status)
            setLoading(false)
            setOpen(true)
          } catch (error: any) {
            setMessage(error.message)
            setHead("Application not sent")
            setStatus("error")
            setLoading(false)
            setOpen(true)
            console.log(error)
          }
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
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Form.Item label="Signed" required className="font-semibold">
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    value={values.sign_full_name}
                    name="sign_full_name"
                    onChange={handleChange}
                  />

                  <span className="text-error">
                    {errors.sign_full_name &&
                      touched.sign_full_name &&
                      errors.sign_full_name}
                  </span>
                </Form.Item>
                <Form.Item label="Name" required className="font-semibold">
                  <Input
                    className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success"
                    value={values.sign_full_name}
                    name="sign_full_name"
                    onBlur={handleBlur}
                  />

                  <p>
                    <small>Printed Name as the signature.</small>
                  </p>
                  <span className="text-error">
                    {errors.sign_full_name &&
                      touched.sign_full_name &&
                      errors.sign_full_name}
                  </span>
                </Form.Item>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Form.Item label="Date" required className="font-semibold">
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
              <div className="md:w-[60%] md:mx-auto my-5">
                <Button
                  type="submit"
                  className={`w-full rounded-[100px] text-xl ${
                    !isValid && "cursor-not-allowed"
                  }`}
                  style={{
                    borderRadius: "100px",
                    background: !isValid ? "gray" : "",
                  }}
                  disabled={loading}
                >
                  {loading ? <LoadingOutlined /> : "Submit Form"}
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <Modal open={open} onCancel={() => setOpen(false)} footer={false}>
        <Result
          status={status as any}
          title={head}
          subTitle={message}
          extra={[
            <Button
              onClick={() => setOpen(false)}
              key="click"
              className={status === "error" ? "bg-error" : "bg-success"}
            >
              {status === "error" ? "Retry" : "Okay"}
            </Button>,
          ]}
        />
      </Modal>
    </div>
  )
}
