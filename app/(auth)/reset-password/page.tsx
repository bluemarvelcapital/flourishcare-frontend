import React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm"

export const metadata: Metadata = {
  title: "Reset Password | Flourish Advanced Care",
  description:
    "Flourish Advanced Care is rooted in the mission to deliver care with integrity and compassion. Our team is carefully selected and trained to match the needs of our clients with the utmost respect and professionalism.",
}

const ForgotPasswordPage = () => {
  const bgImage =
    "https://images.unsplash.com/photo-1540778339538-067eae485e9f?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <div className="grid md:grid-cols-2 h-screen w-screen relative">
      <div className="w-full h-full relative md:block hidden">
        <Image
          alt=""
          src={bgImage}
          fill
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full p-7 flex justify-center items-center relative">
        <ResetPasswordForm />
      </div>

      <div className="w-full h-full absolute -z-10 top-0 left-0 md:hidden block opacity-10">
        <Image
          alt=""
          src={bgImage}
          fill
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default ForgotPasswordPage
