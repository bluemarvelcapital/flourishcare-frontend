"use client"
import React, { useEffect, useState } from "react"
import { Button, Form, Input, Modal } from "antd"
import { useForm } from "antd/es/form/Form"
import { CloseCircleOutlined } from "@ant-design/icons"
import { AntProvider } from "../AntProvider"
import { GuestSignupI } from "@/interface/auth"
import { useGuestSignupMutation } from "@/services/auth.service"
import { useToastify } from "@/hooks/useToastify"
import { SuccessModalAlt } from "../SuccessModalAlt"
import { useAuth, useGuestUser } from "@/hooks/useAuth"

export const GuestSignUp = () => {
  const [open, setOpen] = useState(false)
  const { guestUser, setGuestUser } = useGuestUser()
  const { auth } = useAuth()
  const [openModal, setOpenModal] = useState(false)
  const { errorToast } = useToastify()
  const [form] = useForm<GuestSignupI>()
  const toggleModal = () => {
    setOpen(false)
  }
  const [signup, { isLoading }] = useGuestSignupMutation()
  const onSignUp = async () => {
    try {
      const response = await signup(form.getFieldsValue()).unwrap()
      form.resetFields()
      setGuestUser({
        firstname: response.firstname,
        lastname: response.lastname,
        email: response.email,
        phone: response.phone,
        has_registered: true,
        joined: response.createdAt,
        id: response.id,
      })
      setOpenModal(true)
      setOpen(false)
    } catch (error: any) {
      errorToast(error?.data?.message || error?.message || "An Error Occured")
    }
  }
  useEffect(() => {
    const timeout = setTimeout(() => setOpen(true), 5000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <AntProvider primary_color="#04BD4B">
      <SuccessModalAlt
        open={openModal}
        setOpen={setOpenModal}
        onOk={() => setOpenModal(false)}
        text="Continue"
        minWidth="450px"
        content={
          <>
            <div className="text-center">
              <h3 className="text-lg text-center">
                Successfully signed up as a Guest.
              </h3>
              <p className="text-zinc-400">
                As a guest you get the latest health insights and can book
                appointments with our health practitionals.
              </p>
            </div>
          </>
        }
      />
      {guestUser.has_registered === false && !auth.accessToken && (
        <Modal
          open={open}
          closeIcon={<CloseCircleOutlined className="text-success" />}
          title={null}
          footer={null}
          onCancel={toggleModal}
        >
          <div className="md:px-[1rem] py-[2rem]">
            <div className="mb-5">
              <h2 className="text-center md:text-2xl">
                Stay Informed with the latest health Insights.
              </h2>
              <p className="text-center text-sm mt-3 text-gray-500 max-w-[80%] mx-auto">
                Join as a guest to get the latest health insights and book
                appointments with our health practitionals.
              </p>
            </div>
            <Form
              form={form}
              layout="vertical"
              onFinish={onSignUp}
              disabled={isLoading}
            >
              <div className="grid grid-cols-2 gap-2">
                <Form.Item
                  rules={[{ required: true }]}
                  name="firstname"
                  label="First Name"
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  name="lastname"
                  label="Last Name"
                >
                  <Input size="large" />
                </Form.Item>
              </div>
              <Form.Item
                rules={[{ required: true, type: "email" }]}
                name="email"
                label="Email"
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                rules={[{ required: true }]}
                name="phone"
                label="Phone"
              >
                <Input size="large" />
              </Form.Item>
              <Button
                htmlType="submit"
                className="bg-success w-full"
                type="primary"
                size="large"
                disabled={isLoading}
              >
                {isLoading ? "Joining..." : "Join"}
              </Button>
            </Form>
          </div>
        </Modal>
      )}
    </AntProvider>
  )
}
