"use client"
import React from "react"
import { Logo } from "../Logo"
import { useForm } from "antd/es/form/Form"
import { Button, Form, Input } from "antd"
import { MdEmail } from "react-icons/md"
import { BiLock } from "react-icons/bi"

export const ResetPasswordForm = () => {
  const [form] = useForm<{ password: string; confirm_password: string }>()
  const onLogin = () => {}

  return (
    <div className="md:min-w-[455px]  mx-auto">
      <div className="flex justify-center items-center flex-col gap-3 mb-7 relative z-10">
        <Logo />
        <h3 className="md:text-2xl text-xl font-semibold text-center">
          Create a new password
        </h3>
      </div>
      <Form form={form} onFinish={onLogin} layout="vertical">
        <Form.Item
          name={"password"}
          label="New Password"
          required
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (value.length < 6) {
                  return Promise.reject(
                    new Error("Password should not be less than 6 characters")
                  )
                }
                if (
                  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/.test(value)
                ) {
                  return Promise.resolve()
                }
                return Promise.reject(
                  new Error(
                    "password should contain atleast one number and one special character"
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
          />
        </Form.Item>
        <Form.Item
          name={"confirm_password"}
          label="Confirm New Password"
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
          />
        </Form.Item>

        <Button
          className="w-full bg-success"
          type="primary"
          size="large"
          htmlType="submit"
        >
          Reset
        </Button>
      </Form>
    </div>
  )
}
