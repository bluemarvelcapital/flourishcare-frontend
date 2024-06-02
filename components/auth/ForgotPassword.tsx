"use client"
import React from "react"
import { Logo } from "../Logo"
import { useForm } from "antd/es/form/Form"
import { Button, Form, Input } from "antd"
import { MdEmail } from "react-icons/md"

export const ForgotPasswordForm = () => {
  const [form] = useForm<{ email: string }>()
  const onLogin = () => {}

  return (
    <div className="md:max-w-[455px] md:mt-[-5rem]  mx-auto">
      <div className="flex justify-center items-center flex-col gap-3 mb-7 relative z-10">
        <Logo />
        <h3 className="md:text-2xl text-xl font-semibold text-center">
          Forgot Password
        </h3>
        <p className="text-center -mt-3 text-sm">
          Please provide the email address associated with your account in order
          to initiate the password reset process.
        </p>
      </div>
      <Form form={form} onFinish={onLogin} layout="vertical">
        <Form.Item
          name={"email"}
          label="Email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input
            prefix={<MdEmail />}
            type="email"
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
          Continue
        </Button>
      </Form>
    </div>
  )
}
