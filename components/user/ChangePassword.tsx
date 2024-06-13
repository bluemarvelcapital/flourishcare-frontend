"use client"
import { useForm } from "antd/es/form/Form"
import React from "react"
import { Form, Button, Input } from "antd"
import { BiLock } from "react-icons/bi"

export const ChangePassword = () => {
  const [form] = useForm()
  return (
    <div className="bg-white rounded-md w-full border-[1px] border-gray-200 transition-all p-[24px] md:py-[32px]">
      <h2 className="md:text-3xl text-lg font-medium mb-1">Change Password</h2>
      <p className="text-[#ACACAC]">Enter a new password to </p>
      <div className="my-5">
        <Form form={form} layout="vertical">
          <div className="grid md:grid-cols-2 gap-5">
            <Form.Item
              name={"password"}
              label="New Password"
              required
              rules={[
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (value.length < 6) {
                      return Promise.reject(
                        new Error(
                          "Password should not be less than 6 characters"
                        )
                      )
                    }
                    if (/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/.test(value)) {
                      return Promise.resolve()
                    }
                    return Promise.reject(
                      new Error(
                        "password should contain atleast one number, uppercase and lowercase"
                      )
                    )
                  },
                }),
              ]}
            >
              <Input.Password
                required
                prefix={<BiLock />}
                type="password"
                size="large"
                className="w-full"
                placeholder="Enter password"
              />
            </Form.Item>
            <Form.Item
              name={"new_password"}
              label="Re-Enter New Password"
              rules={[
                {
                  required: true,
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(
                      new Error("The password you entered do not match!")
                    )
                  },
                }),
              ]}
              dependencies={["password"]}
            >
              <Input.Password
                prefix={<BiLock />}
                type="password"
                size="large"
                className="w-full"
                placeholder="Re-enter New Password"
              />
            </Form.Item>
          </div>

          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className="bg-success w-full"
          >
            Continue
          </Button>
        </Form>
      </div>
    </div>
  )
}
