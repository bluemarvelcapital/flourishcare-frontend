import { NextRequest, NextResponse } from "next/server"
import { Email } from "@/components/Email"
import nodemailer from "nodemailer"
import { render } from "@react-email/render"

export const dynamic = "force-dynamic" // defaults to auto
export async function POST(request: NextRequest) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "osaretinfrank.developer@gmail.com",
      pass: `qhwvkzhpxlyinfsz`,
    },
  })

  const emailHtml = render(Email({ url: "osaretinfrank.developer@gmail.com" }))

  const options = {
    from: "osaretinfrank.developer@gmail.com",
    to: "osaretin.frank10@gmail.com",
    subject: "hello world",
    html: emailHtml,
  }

  try {
    await transporter.sendMail(options)
    const body = await request.json()
    const response = { messgae: "Email sent", body: body.email }

    return NextResponse.json(response)
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      message: "Email not sent",
    })
  }
}
