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
  Checkbox,
} from "antd"
import React, { FC } from "react"

export const InternationalStep5: FC<{
  submit: () => null
  back: () => void
}> = ({ submit, back }) => {
  return (
    <Form layout="vertical">
      <div className="py-10 px-6 bg-white transition-all">
        <section>
          <div>
            <h3 className="text-2xl font-semibold my-4">
              Section 10 :- Recruitment Monitoring Form
            </h3>
            <p className="md:text-lg">
              This sheet will be separated from your application form upon
              receipt and does not form part of the selection process. It will
              be retained by Human Resources purely for monitoring purposes.
            </p>
          </div>

          <div className="my-10">
            <h3 className="text-2xl font-semibold my-4">
              Application for the post of:
            </h3>
            <p className="md:text-lg">
              To help us ensure that our Equal Opportunities Policy is fully and
              fairly implemented please COMPLETE THIS SECTION OF THE APPLICATION
              FORM.
            </p>
          </div>

          <div className="my-10">
            <h3 className="text-2xl font-semibold my-4">
              What is your Ethnic Group?
            </h3>
            <p className="md:text-lg">
              Choose ONE section from A to E, and then tick the appropriate box
              to indicate your cultural background.
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 justify-items-between">
            <div>
              <p className="md:text-lg font-semibold">A: White</p>
              <Form.Item className="font-semibold mt-3">
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value={"white_uk"}>White UK</Radio>
                    <Radio value={"irish"}>Irish</Radio>
                    <Radio value={"non-uk"}>White -non-UK</Radio>
                    <Radio value={"any_white"}>
                      Any other white background
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </div>
            <div>
              <p className="md:text-lg font-semibold">
                B: Black or Black British
              </p>
              <Form.Item className="font-semibold mt-3">
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value={"black_caribbean"}>Black Caribbean</Radio>
                    <Radio value={"black_african"}>Black African</Radio>
                    <Radio value={"aby_black"}>
                      Any other Black background
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </div>
            <div>
              <p className="md:text-lg font-semibold">C: Mixed</p>
              <Form.Item className="font-semibold mt-3">
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value={"white_black_caribbean"}>
                      White & Black Caribbean
                    </Radio>
                    <Radio value={"white_black_african"}>
                      White & Black Black
                    </Radio>
                    <Radio value={"white_asian"}>White & Asian</Radio>
                    <Radio value={"any_mixed"}>
                      Any other mixed background
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </div>

            <div>
              <p className="md:text-lg font-semibold">
                D: Chinese or other ethnic group
              </p>
              <Form.Item className="font-semibold mt-3">
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value={"chinese"}>Chinese</Radio>
                    <Radio value={"vietnamese"}>Vietnamese</Radio>
                    <Radio value={"any_ethnic"}>
                      Any other ethnic background
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </div>

            <div>
              <p className="md:text-lg font-semibold">
                E: Asian or Asian British
              </p>
              <Form.Item className="font-semibold mt-3">
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value={"indian"}>Indian</Radio>
                    <Radio value={"pakistani"}>Pakistani</Radio>
                    <Radio value={"bangladeshi"}>Bangladeshi</Radio>
                    <Radio value={"any_asian"}>
                      Any other Asian background
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </div>

            <div>
              <p className="md:text-lg font-semibold">
                F: I do not wish to provide this information
              </p>
              <Form.Item className="font-semibold mt-3">
                <Checkbox />
              </Form.Item>
            </div>

            <Form.Item label="Gender" required className="font-semibold">
              <Input className="border-[#00000060] p-[0.8rem] w-full focus:border-success hover:border-success" />
            </Form.Item>

            <div>
              <p className="md:text-lg font-semibold">Age Group</p>
              <Form.Item className="font-semibold mt-3">
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value={"16"}>16 - 25</Radio>
                    <Radio value={"26"}>26 - 35</Radio>
                    <Radio value={"36"}>36 - 45</Radio>
                    <Radio value={"46"}>46 - 55</Radio>
                    <Radio value={"56"}>56 - 65</Radio>
                    <Radio value={"66"}>66 - 70</Radio>
                    <Radio value={"70"}>Over 70</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>

          <div className="my-10">
            <h3 className="text-2xl font-semibold my-4">
              Asylum and Immigration Act 1996:
            </h3>
            <p className="md:text-lg">
              It is now a requirement that before any offer of employment can be
              made, all candidates are to provide confirmation of their
              eligibility to work in the UK. Please bring one of the following
              original documents with you if invited to interview: a passport or
              an immigration and nationality directorate application
              registration card which evidence the right to work in the UK or a
              UK residence permit issued to an EEA national which confirms right
              of entry to or residence in the UK.
            </p>
          </div>

          <div className="md:w-[80%] md:mx-auto my-[2rem] grid md:grid-cols-2 grid-cols-1 gap-5">
            <Button
              className="w-full rounded-[100px] text-base text-xl bg-gray-100 border-[1px] border-success"
              style={{ borderRadius: "100px" }}
              onClick={back}
            >
              Back
            </Button>
            <Button
              type="submit"
              className="w-full rounded-[100px] text-xl"
              style={{ borderRadius: "100px" }}
              onClick={submit}
            >
              Submit Form
            </Button>
          </div>
        </section>
      </div>
    </Form>
  )
}
