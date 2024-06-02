"use client"
import React, { useState } from "react"
import { Logo } from "../Logo"
import { useForm } from "antd/es/form/Form"
import { Button, Divider, Form, Input, Modal, Select } from "antd"
import { SignUpRequestI } from "@/interface/auth"
import { BiLock, BiUser } from "react-icons/bi"
import { MdEmail } from "react-icons/md"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc"
import { useSignupMutation } from "@/services/auth.service"
import { SuccessModalAlt } from "../SuccessModalAlt"
import { useToastify } from "@/hooks/useToastify"
import { LoadingOutlined } from "@ant-design/icons"
import { useGetRolesQuery } from "@/services/role.service"

export const SignUpForm = () => {
  const [form] = useForm<SignUpRequestI>()
  const { data: roles, isLoading: gettingRoles } = useGetRolesQuery(null)
  const [openModal, setOpenModal] = useState(false)
  const { errorToast, successToast } = useToastify()
  const [signup, { isLoading }] = useSignupMutation()
  const onSignUp = async () => {
    try {
      const response = await signup(form.getFieldsValue()).unwrap()
      // successToast("Sign up successfull")
      form.resetFields()
      setOpenModal(true)
    } catch (error: any) {
      errorToast(error?.data?.message || error?.message || "An Error Occured")
    }
  }

  return (
    <>
      <SuccessModalAlt
        open={openModal}
        setOpen={setOpenModal}
        link="/login"
        text="Continue to Login"
        minWidth="450px"
        content={
          <>
            <div className="text-center">
              <h3 className="text-lg text-center">Sign Up Successful</h3>
              <p className="text-zinc-400">
                Use the registered Email and Password to Login.
              </p>
            </div>
          </>
        }
      />
      <div className="md:min-w-[455px] min-w-[90%] mx-auto">
        <div className="flex justify-center items-center flex-col gap-3 mb-7 relative z-10">
          <Logo />
          <h3 className="md:text-2xl text-xl font-semibold text-center">
            Create an account
          </h3>
        </div>
        <Form
          form={form}
          onFinish={onSignUp}
          layout="vertical"
          disabled={isLoading}
        >
          <Form.Item
            name={"fullname"}
            label="Full Name"
            rules={[{ required: true }]}
          >
            <Input prefix={<BiUser />} size="large" className="w-full" />
          </Form.Item>
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
          <Form.Item name={"roleId"} label="Role" rules={[{ required: true }]}>
            {gettingRoles ? (
              <div>
                <LoadingOutlined /> <span>Getting roles...</span>
              </div>
            ) : (
              <Select
                suffixIcon={<BiUser />}
                size="large"
                className="w-full"
                options={roles
                  ?.filter((role) => !role.name.includes("ADMIN"))
                  .map((role) => ({
                    value: role.id,
                    label: role.name.replaceAll("_", " "),
                  }))}
              />
            )}
          </Form.Item>
          <Form.Item
            name={"password"}
            label="Password"
            required
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (value.length < 6) {
                    return Promise.reject(
                      new Error("Password should not be less than 6 characters")
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
            />
          </Form.Item>
          <Form.Item
            name={"confirm_password"}
            label="Confirm Password"
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
            disabled={isLoading || gettingRoles}
          >
            {isLoading ? <LoadingOutlined /> : "Sign Up"}
          </Button>
        </Form>
        <div className="text-center mt-3">
          <p className="text-primary">
            Already have an account?{" "}
            <Link href={"/login"} className="underline text-success">
              Log In
            </Link>
          </p>
        </div>
        <Divider>Or</Divider>
        <Button
          size="large"
          className="w-full flex gap-2 justify-center items-center"
        >
          <FcGoogle className="text-lg" />
          <span>Continue with Google</span>
        </Button>
      </div>
    </>
  )
}
