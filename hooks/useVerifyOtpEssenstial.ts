import { useSessionStorage } from "usehooks-ts"

export const useVerifyOtpEssenstial = () => {
  const [otpVerifyEssentials, setOtpVerifyEssentials] = useSessionStorage<{
    token: string
    to_route: string
  }>("verify-otp", { token: "", to_route: "" })

  return { otpVerifyEssentials, setOtpVerifyEssentials }
}
