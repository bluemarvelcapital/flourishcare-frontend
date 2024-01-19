import { render } from "@react-email/render"
import nodemailer from "nodemailer"
import { Email } from "@/components/Email"
import { useState } from "react"

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    user: "frank",
    // pass: `Asfhshfkshfsk"3&s`,
  },
})

// const emailHtml = render(<Email />)

// const options = {
//   from: "osaretinfrank.developer@gmail.com",
//   to: "osaretin.frank10@gmail.com",
//   subject: "hello world",
//   html: emailHtml,
// }

export const useSendEmail = (to: string) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const sendEmail = async () => {
    setLoading(true)
    // await transporter.sendMail(options)
    setLoading(false)
    setSuccess(true)
  }

  return { sendEmail, loading, success }
}
