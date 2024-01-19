import { NextRequest, NextResponse } from "next/server"
import { Email } from "@/components/Email"
import nodemailer from "nodemailer"
import { render } from "@react-email/render"
import { message } from "antd"

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

  try {
    const body = (await request.json()) as Record<string, string>
    const parseData = Object.entries(body).map(([key, value]) => {
      const datumShape = [key.replaceAll("_", " "), String(value)] as [
        string,
        string
      ]
      return datumShape
    })
    const emailHtml = render(
      Email(parseData, `${body.first_name} ${body.last_name}`, body.region)
    )
    const options = {
      from: "osaretinfrank.developer@gmail.com",
      to: "osaretin.frank10@gmail.com",
      subject: "Job Application Notification - Flourish Advanced Care",
      html: emailHtml,
    }
    await transporter.sendMail(options)
    const response = {
      status: "success",
      head: "Application sent Successfully",
      parseData,
      message: "Your details has been recieved, we will get back to you soon.",
    }

    return NextResponse.json(response)
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      head: "Application not sent",
      message: "Your details has not been recieved, please try again.",
      status: "error",
    })
  }
}
