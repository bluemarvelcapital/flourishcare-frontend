"use client"
import React, { useState } from "react"
import { Logo } from "../Logo"
import { useForm } from "antd/es/form/Form"
import { Button, Form, Input } from "antd"
import OtpInput from "react-otp-input"
import Countdown from "react-countdown"
import { useVerifyOtpEssenstial } from "@/hooks/useVerifyOtpEssenstial"

export const VerifyOtpForm = () => {
  const [form] = useForm()
  const [otp, setOtp] = useState("")
  const onVerify = () => {}
  const disable = otp.length !== 6
  const { otpVerifyEssentials } = useVerifyOtpEssenstial()
  const { to_route, token } = otpVerifyEssentials

  return (
    <div className="md:max-w-[455px] md:mt-[-5rem]  mx-auto">
      <div className="flex justify-center items-center flex-col gap-3 mb-7 relative z-10">
        <Logo />
        <h3 className="md:text-2xl text-xl font-semibold text-center">
          OTP Verification
        </h3>
        <p className="text-center -mt-3 text-sm md:max-w-[300px]">
          Please enter the 6 digits verification code we just sent to your email
        </p>
      </div>
      <Form form={form} onFinish={onVerify} layout="vertical">
        <Form.Item>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<div className="mr-4" />}
            renderInput={(props) => (
              <input
                {...props}
                style={{ width: "60px", height: "60px", outline: "none" }}
                className="border-[1.5px] border-primary text-center rounded-md font-semibold text-lg"
              />
            )}
          />
        </Form.Item>
        <div className="text-center font-semibold mb-7">
          Didn’t get a code? <ResendOtp />
        </div>

        <Button
          className="w-full bg-success"
          type="primary"
          size="large"
          htmlType="submit"
          disabled={disable}
        >
          Continue
        </Button>
      </Form>
    </div>
  )
}

const ResendOtp = () => {
  // Renderer callback with condition
  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
    api: { isStopped, start },
  }: any) => {
    if (isStopped()) {
      return (
        <span onClick={start} className="cursor-pointer text-primary underline">
          Resend
        </span>
      )
    }
    if (completed) {
      // Render a complete state
      return (
        <span onClick={start} className="cursor-pointer text-primary underline">
          Resend
        </span>
      )
    } else {
      // Render a countdown
      return (
        <span className="text-primary">
          Resend In 0{minutes}:{seconds < Number("10") && 0}
          {seconds}
        </span>
      )
    }
  }
  return (
    <Countdown
      autoStart={false}
      date={Date.now() + 60000}
      renderer={renderer}
    />
  )
}
