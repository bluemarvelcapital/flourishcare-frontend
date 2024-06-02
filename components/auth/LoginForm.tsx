"use client"
import React from "react"
import { Logo } from "../Logo"
import { useForm } from "antd/es/form/Form"
import { Button, Divider, Form, Input } from "antd"
import { LoginRequestI } from "@/interface/auth"
import { BiLock } from "react-icons/bi"
import { MdEmail } from "react-icons/md"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc"

export const LoginForm = () => {
  const [form] = useForm<LoginRequestI>()
  const onLogin = () => {}

  return (
    <div className="md:min-w-[455px] min-w-[90%] mx-auto">
      <div className="flex justify-center items-center flex-col gap-3 mb-7 relative z-10">
        <Logo />
        <h3 className="md:text-2xl text-xl font-semibold text-center">
          Welcome Back | LogIn
        </h3>
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
        <Form.Item
          name={"password"}
          label="Password"
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
        <div className="text-end -mt-[1rem] mb-7 relative z-20">
          <Link href={"/forgot-password"} className="text-end text-success">
            Forgot Password?
          </Link>
        </div>
        <Button
          className="w-full bg-success"
          type="primary"
          size="large"
          htmlType="submit"
        >
          Log In
        </Button>
      </Form>
      <div className="text-center mt-3">
        <p className="text-primary">
          Don&apos;t have an account?{" "}
          <Link href={"/signup"} className="underline text-success">
            Create an account
          </Link>
        </p>
      </div>
      <Divider>Or</Divider>
      <Button
        size="large"
        className="w-full flex gap-2 justify-center items-center "
      >
        <FcGoogle className="text-lg" />
        <span>Continue with Google</span>
      </Button>
    </div>
  )
}
