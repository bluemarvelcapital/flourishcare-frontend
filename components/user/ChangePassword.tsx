"use client"
import { useForm } from "antd/es/form/Form"
import React, { useState } from "react"
import { Form, Button, Input, Modal } from "antd"
import { BiLock } from "react-icons/bi"
import { useAuth, useLogout } from "@/hooks/useAuth"
import {
  useForgotPasswordMutation,
  useResetPasswordMutation,
} from "@/services/auth.service"
import { useToastify } from "@/hooks/useToastify"
import { useVerifyOtpEssenstial } from "@/hooks/useVerifyOtpEssenstial"
import { VerifyOtpForm } from "../auth/VerifyOtp"
import { useRouter } from "next/navigation"
import { LoadingOutlined } from "@ant-design/icons"

export const ChangePassword = () => {
  const [form] = useForm()
  const { auth } = useAuth()
  const { logout } = useLogout()
  const [mutateForget, { isLoading }] = useForgotPasswordMutation()
  const { setOtpVerifyEssentials, otpVerifyEssentials } =
    useVerifyOtpEssenstial()
  const [openModal, setOpenModal] = useState(false)
  const { errorToast, successToast } = useToastify()
  const toggleModal = () => setOpenModal(!openModal)
  const [mutate, { isLoading: reseting }] = useResetPasswordMutation()
  const router = useRouter()

  const forgetPassword = async () => {
    try {
      const response = await mutateForget({ email: auth.email }).unwrap()
      successToast(response.message)
      setOtpVerifyEssentials({
        token: response.data.accessToken,
        to_route: "/login",
        message: {
          head: "Password Reset Successful",
          sub: "Use the registered Email and new Password to Login.",
        },
      })
      setOpenModal(true)
    } catch (error: any) {
      errorToast(error?.data?.message || error?.message || "An Error Occured")
    }
  }

  const resetPassword = async (otp: string) => {
    await mutate({
      newPassword: form.getFieldsValue().new_password,
      passwordResetCode: otp,
      accessToken: otpVerifyEssentials.token,
    }).unwrap()
    logout()
  }

  return (
    <>
      <Modal
        open={openModal}
        onCancel={toggleModal}
        footer={null}
        closeIcon={null}
      >
        <VerifyOtpForm action={resetPassword} loading={reseting} />
      </Modal>
      <div className="bg-white rounded-md w-full border-[1px] border-gray-200 transition-all p-[24px] md:py-[32px]">
        <h2 className="md:text-3xl text-lg font-medium mb-1">
          Change Password
        </h2>
        <p className="text-[#ACACAC]">Enter a new password to </p>
        <div className="my-5">
          <Form
            form={form}
            onFinish={forgetPassword}
            layout="vertical"
            disabled={isLoading}
          >
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
                      if (
                        /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/.test(value)
                      ) {
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
              {isLoading ? <LoadingOutlined /> : "Continue"}
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}
