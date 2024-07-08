"use client"
import { Button, Form, Input, Modal } from "antd"
import { useForm } from "antd/es/form/Form"
import React, { useState } from "react"
import { IoMdCloseCircle } from "react-icons/io"
import { UploadImage } from "../UploadImage"

export const AddSubUser = () => {
  const [open, setOpen] = useState(false)
  const toggleModal = () => setOpen(!open)
  const [form] = useForm()
  return (
    <div>
      <Modal
        open={open}
        onCancel={toggleModal}
        closeIcon={<IoMdCloseCircle className="text-xl text-success" />}
        footer={null}
        classNames={{ content: "md:min-w-[773px]" }}
      >
        <div>
          <div className="mb-7">
            <h3 className="text-lg font-medium">Personal Details</h3>
            <p className="text-gray-400">
              Input personal details below to create a new sub-user profile.
            </p>
          </div>
          <div>
            <Form layout="vertical" form={form}>
              <div className="grid md:gap-7 md:grid-cols-2">
                <Form.Item
                  name={"firstname"}
                  label="First Name"
                  rules={[{ required: true }]}
                >
                  <Input
                    size="large"
                    className="w-full"
                    placeholder="First Name"
                  />
                </Form.Item>
                <Form.Item
                  name={"lastname"}
                  label="Last Name"
                  rules={[{ required: true }]}
                >
                  <Input
                    size="large"
                    className="w-full"
                    placeholder="Last Name"
                  />
                </Form.Item>
              </div>
              <div className="grid md:gap-7 md:grid-cols-2">
                <Form.Item
                  name={"age"}
                  label="Age"
                  rules={[{ required: true }]}
                >
                  <Input size="large" className="w-full" type="number" />
                </Form.Item>
                <Form.Item
                  name={"gender"}
                  label="Gender"
                  rules={[{ required: true }]}
                >
                  <Input size="large" className="w-full" />
                </Form.Item>
              </div>
              <Form.Item
                name={"email"}
                label="Email"
                rules={[{ required: true, type: "email" }]}
              >
                <Input size="large" className="w-full" type="number" />
              </Form.Item>
              <Form.Item
                name={"address"}
                label="Address/Location"
                rules={[{ required: true }]}
              >
                <Input size="large" className="w-full" type="number" />
              </Form.Item>
              <Form.Item
                name={"profile_image"}
                label="Upload a picture"
                rules={[{ required: true }]}
              >
                <UploadImage form={form} input_name="profile_image" />
              </Form.Item>
              <Button
                className="h-full w-full bg-success"
                size="large"
                type="primary"
                htmlType="submit"
              >
                Create Profile
              </Button>
            </Form>
          </div>
        </div>
      </Modal>
      <Button
        onClick={toggleModal}
        className="h-full w-full bg-success"
        size="large"
        type="primary"
      >
        + Add New
      </Button>
    </div>
  )
}
