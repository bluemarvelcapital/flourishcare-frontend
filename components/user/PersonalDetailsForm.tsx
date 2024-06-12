"use client"
import { Button, Form, Input } from "antd"
import { useForm } from "antd/es/form/Form"
import React from "react"

export const PersonalDetailsForm = () => {
  const [form] = useForm()
  return (
    <div className="bg-white rounded-md w-full border-[1px] border-gray-200 transition-all p-[24px] md:py-[32px]">
      <h2 className="md:text-3xl text-lg font-semibold mb-1">
        Personal Details
      </h2>
      <p className="text-[#ACACAC]">Edit your personal details below</p>
      <div className="mt-5">
        <Form form={form} layout="vertical">
          <div className="grid grid-cols-2 gap-5">
            <Form.Item
              name={"firstname"}
              label="First Name"
              rules={[{ required: true }]}
            >
              <Input className="w-full" size="large" placeholder="First name" />
            </Form.Item>
            <Form.Item
              name={"lastname"}
              label="Last Name"
              rules={[{ required: true }]}
            >
              <Input className="w-full" size="large" placeholder="Last name" />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Form.Item name={"age"} label="Age" rules={[{ required: true }]}>
              <Input className="w-full" size="large" />
            </Form.Item>
            <Form.Item name={"gender"} label="Gender">
              <Input className="w-full" size="large" />
            </Form.Item>
          </div>
          <Form.Item
            name={"phonenumber"}
            label="Phone number"
            rules={[{ required: true }]}
          >
            <Input className="w-full" size="large" />
          </Form.Item>
          <Form.Item
            name={"address"}
            label="Address/Location"
            rules={[{ required: true }]}
          >
            <Input className="w-full" size="large" />
          </Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className="bg-success w-full"
          >
            Save
          </Button>
        </Form>
      </div>
    </div>
  )
}
