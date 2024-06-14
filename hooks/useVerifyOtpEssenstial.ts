import { useSessionStorage } from "usehooks-ts"

export const useVerifyOtpEssenstial = () => {
  const [otpVerifyEssentials, setOtpVerifyEssentials] = useSessionStorage<{
    token: string
    to_route: string
    message: { head: string; sub: string }
  }>("verify-otp", { token: "", to_route: "", message: { head: "", sub: "" } })

  return { otpVerifyEssentials, setOtpVerifyEssentials }
}
