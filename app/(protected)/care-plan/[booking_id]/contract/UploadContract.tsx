"use client"
import { Loader } from "@/components/Loader"
import { useAuth } from "@/hooks/useAuth"
import { useGetAppointmentQuery } from "@/services/appointment.service"
import { useGetBookingQuery } from "@/services/bookings.service"
import {
  CheckCircleFilled,
  CloseCircleFilled,
  DownloadOutlined,
} from "@ant-design/icons"
import { IconButton } from "@mui/material"
import { Button } from "antd"
import moment from "moment"
import Link from "next/link"
import { useParams, useSearchParams } from "next/navigation"
import React, { useState } from "react"
import { BiCloudUpload } from "react-icons/bi"

export const UploadContract = () => {
  const { booking_id } = useParams()

  const appointmentId = useSearchParams().get("appointment_id") as string
  const [file, setFile] = useState<File | null>(null)
  const handleFileChange = (file: File) => {
    setFile(file)
  }
  const {
    auth: { accessToken, firstname, lastname, email },
  } = useAuth()
  const { data: appointment, isLoading: loadingAppointment } =
    useGetAppointmentQuery({
      accessToken,
      appointmentId,
    })
  const { data, isLoading } = useGetBookingQuery({
    accessToken,
    bookingId: booking_id as string,
  })
  const loading = loadingAppointment || isLoading
  return (
    <div>
      {loading ? (
        <Loader name="Details" />
      ) : (
        <>
          {" "}
          <div className="my-3 mb-10">
            <p className="text-baseDark mb-2">
              To proceed, download the contract file, review, sign and upload
              below.
            </p>

            <div className="flex gap-2 items-center">
              <Link
                href={
                  "https://images.unsplash.com/photo-1718963904724-d45712e7c864?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                download={"Pre-Signed_Contract"}
              >
                <IconButton className="bg-success hover:bg-success text-white">
                  <DownloadOutlined />
                </IconButton>
              </Link>
              <span className="text-sm">Download Contract</span>
            </div>
            <div className="mt-7 grid md:grid-cols-3 md:gap-14 gap-10">
              <div>
                <label
                  htmlFor="signed-contract-file"
                  className="cursor-pointer"
                >
                  <input
                    style={{ display: "none" }}
                    accept=".pdf, .doc, .docx"
                    id="signed-contract-file"
                    type="file"
                    onChange={(e) => handleFileChange(e.target.files![0])}
                  />
                  <p className="text-sm">Upload contract</p>
                  <div className="bg-[#fff] border-[1px] border-[#E4E7EC] h-[15rem] w-full rounded-md p-4 flex flex-col items-center gap-2 justify-center">
                    <BiCloudUpload className="text-[25px] text-success" />
                    <div>
                      <p className="font-semibold text-center">
                        <span className="text-success">Click</span> to upload a
                        file{" "}
                      </p>
                      <p className="text-[#6B7280] text-center text-xs">
                        PDF, DOC, DOCX, up to 5MB
                      </p>
                    </div>
                  </div>
                </label>
                {file && (
                  <div className="flex gap-2">
                    <Link
                      href={`${URL.createObjectURL(file)}`}
                      target="_black"
                      className="text-success underline"
                    >
                      {file.name}
                    </Link>
                    <button onClick={() => setFile(null)}>
                      <CloseCircleFilled className="text-red-400" />
                    </button>
                  </div>
                )}
                <Button
                  className="bg-success w-full mt-4"
                  type="primary"
                  size="large"
                >
                  Proceed
                </Button>
              </div>
              <div className="md:col-span-2 bg-[#fff] border-[1px] border-[#E4E7EC] rounded-md md:p-10 p-4">
                <>
                  <CheckCircleFilled className="md:text-[5rem] text-[2.5rem] text-success" />
                  <div className="mt-5">
                    <h3 className="text-xl font-medium">
                      Client&apos;s Personal Details
                    </h3>
                    <p className="text-[#98999A]">
                      Your booking has been successfully submitted, click on the
                      button below to generate a contract.
                    </p>
                    <div className="mt-5 space-y-5">
                      <div className="flex items-center justify-between gap-5">
                        <p className="text-[#6A6B6C]">Full Name</p>
                        <p className="text-[#2A2B2B] font-medium capitalize">{`${firstname} ${lastname}`}</p>
                      </div>
                      <div className="flex items-center justify-between gap-5">
                        <p className="text-[#6A6B6C]">Email</p>
                        <p className="text-[#2A2B2B] font-medium">{email}</p>
                      </div>
                      <div className="flex items-center justify-between gap-5">
                        <p className="text-[#6A6B6C]">Appointment</p>
                        <p className="text-[#2A2B2B] font-medium">
                          {appointment?.title}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-5">
                        <p className="text-[#6A6B6C]">Date</p>
                        <p className="text-[#2A2B2B] font-medium">
                          {moment(appointment?.date).format("LL")}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-5">
                        <p className="text-[#6A6B6C]">Time</p>
                        <p className="text-[#2A2B2B] font-medium">
                          {moment(appointment?.date).format("LT")}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-5">
                        <p className="text-[#6A6B6C]">Duration</p>
                        <p className="text-[#2A2B2B] font-medium">
                          {appointment?.services[0]?.duration} month(s)
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
