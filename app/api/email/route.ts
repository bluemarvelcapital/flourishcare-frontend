import { NextRequest, NextResponse } from "next/server"
import { Email } from "@/components/Email"
import nodemailer from "nodemailer"
import { render } from "@react-email/render"
import multer from "multer"

const upload = multer({
  storage: multer.memoryStorage(),
})

export const dynamic = "force-dynamic" // defaults to auto
export async function POST(request: NextRequest) {
  upload.array("attachments")
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
    const { body, attachments } = (await request.json()) as {
      body: Record<string, string>
      attachments: any[]
    }
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
      // attachments,
    }
    await transporter.sendMail(options)
    const response = {
      status: "success",
      head: "Application sent Successfully",
      parseData,
      message: "Your details has been recieved, we will get back to you soon.",
      attachments: JSON.stringify(attachments),
      // attachments
    }

    return NextResponse.json(response)
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      head: "Application not sent",
      message: error.message,
      status: "error",
    })
  }
}
