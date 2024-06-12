"use client"
import { Button, Form, Input } from "antd"
import { useForm } from "antd/es/form/Form"
import React from "react"

export const SupportForm = () => {
  const [form] = useForm()
  return (
    <div className="bg-white rounded-md w-full border-[1px] border-gray-200 transition-all p-[24px] md:py-[32px]">
      <h2 className="md:text-3xl text-lg font-medium mb-1">Help & Support</h2>
      <p className="text-[#ACACAC]">
        Reach out to us and get a feedback within 24hours.
      </p>
      <div className="mt-5">
        <Form form={form} layout="vertical">
          <div className="grid grid-cols-2 gap-5">
            <Form.Item name={"name"} label="Name" rules={[{ required: true }]}>
              <Input className="w-full" size="large" placeholder="Enter name" />
            </Form.Item>
            <Form.Item
              name={"email"}
              label="Email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input
                className="w-full"
                size="large"
                placeholder="Enter email address"
              />
            </Form.Item>
          </div>

          <Form.Item
            name={"message"}
            label="Message"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              className="w-full"
              size="large"
              placeholder="Enter your message"
              style={{ minHeight: "216px" }}
            />
          </Form.Item>
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
