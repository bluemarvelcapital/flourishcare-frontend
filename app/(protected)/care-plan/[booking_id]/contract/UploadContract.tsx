"use client"
import { Loader } from "@/components/Loader"
import { useAuth } from "@/hooks/useAuth"
import { useDownload } from "@/hooks/useDownload"
import { useToastify } from "@/hooks/useToastify"
import {
  useUpdateDocumentApprovalStatusMutation as useApproveContract,
  useGetBookingQuery,
  useGetBookingsQuery,
  useSignContractMutation,
} from "@/services/bookings.service"
import {
  CheckCircleFilled,
  CloseCircleFilled,
  DownloadOutlined,
  LoadingOutlined,
} from "@ant-design/icons"
import { IconButton } from "@mui/material"
import { Alert, Button } from "antd"
import moment from "moment"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import React, { useState } from "react"
import { BiCloudUpload } from "react-icons/bi"

export const UploadContract = () => {
  const { booking_id } = useParams()
  const router = useRouter()
  const downloadFile = useDownload()
  const [file, setFile] = useState<File | null>(null)
  const handleFileChange = (file: File) => {
    setFile(file)
  }
  const [mutate, { isLoading: uploading }] = useSignContractMutation()
  const [approveContract, { isLoading: approving }] = useApproveContract()
  const { errorToast, successToast } = useToastify()

  const {
    auth: { accessToken, firstname, lastname, email },
  } = useAuth()
  const { refetch: refetchBookings } = useGetBookingsQuery({ accessToken })

  const { data, isLoading, refetch } = useGetBookingQuery({
    accessToken,
    bookingId: booking_id as string,
  })
  const loading = isLoading
  const handleUpload = async () => {
    try {
      if (file) {
        if (!data?.approvalStatus?.contract) {
          await approveContract({
            accessToken,
            bookingId: booking_id as string,
            approvalStatus: {
              contract: true,
            },
          })
        }
        await mutate({
          accessToken,
          bookingId: booking_id as string,
          document: file,
        }).unwrap()
        successToast("Uploaded Signed Contract.")
        router.push(`/care-plan/${booking_id}/payment`)
        await refetch()
        await refetchBookings()
      }
    } catch (error: any) {
      errorToast(error?.message || error?.data?.message || "An Error Occured")
    }
  }
  return (
    <div>
      {loading ? (
        <Loader name="Details" />
      ) : (
        <>
          {" "}
          {!data?.presignedContract ? (
            <div className="min-h-[30vh]">
              <Alert
                type="warning"
                description={"Contract has not been uploaded yet."}
                showIcon
              />
            </div>
          ) : (
            <>
              <div className="my-3 mb-10">
                <p className="text-baseDark mb-2">
                  To proceed, download the contract file, review, sign and
                  upload below.
                </p>

                <div className="flex gap-2 items-center">
                  <button
                    onClick={() =>
                      downloadFile(
                        data?.presignedContract as string,
                        "Pre-Signed_Contract"
                      )
                    }
                  >
                    <IconButton className="bg-success hover:bg-success text-white">
                      <DownloadOutlined className="text-success" />
                    </IconButton>
                  </button>
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
                      <p className="text-sm">Upload signed contract</p>
                      <div className="bg-[#fff] border-[1px] border-[#E4E7EC] h-[15rem] w-full rounded-md p-4 flex flex-col items-center gap-2 justify-center">
                        <BiCloudUpload className="text-[25px] text-success" />
                        <div>
                          <p className="font-semibold text-center">
                            <span className="text-success">Click</span> to
                            upload a file{" "}
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
                    <div className="flex gap-2">
                      <Button
                        className="bg-success w-full mt-4"
                        type="primary"
                        size="large"
                        onClick={handleUpload}
                        disabled={uploading || approving}
                      >
                        {uploading || approving ? (
                          <LoadingOutlined />
                        ) : data?.approvalStatus?.contract ? (
                          "Re-upload"
                        ) : (
                          "Proceed"
                        )}
                      </Button>
                      {data?.approvalStatus.contract && (
                        <Link href={`/care-plan/${booking_id}/payment`}>
                          <Button
                            className="text-success border-success w-full mt-4"
                            size="large"
                          >
                            Payment
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="md:col-span-2 bg-[#fff] border-[1px] border-[#E4E7EC] rounded-md md:p-10 p-4">
                    <>
                      <CheckCircleFilled className="md:text-[5rem] text-[2.5rem] text-success" />
                      <div className="mt-5">
                        <h3 className="text-xl font-medium">
                          Client&apos;s Personal Details
                        </h3>
                        <p className="text-[#98999A]">
                          Your booking has been successfully submitted, click on
                          the button below to generate a contract.
                        </p>
                        <div className="mt-5 space-y-5">
                          <div className="flex items-center justify-between gap-5">
                            <p className="text-[#6A6B6C]">Full Name</p>
                            <p className="text-[#2A2B2B] font-medium capitalize">{`${firstname} ${lastname}`}</p>
                          </div>
                          <div className="flex items-center justify-between gap-5">
                            <p className="text-[#6A6B6C]">Email</p>
                            <p className="text-[#2A2B2B] font-medium">
                              {email}
                            </p>
                          </div>
                          <div className="flex items-center justify-between gap-5">
                            <p className="text-[#6A6B6C]">Appointment</p>
                            <p className="text-[#2A2B2B] font-medium">
                              {data?.appointment?.title}
                            </p>
                          </div>
                          <div className="flex items-center justify-between gap-5">
                            <p className="text-[#6A6B6C]">Date</p>
                            <p className="text-[#2A2B2B] font-medium">
                              {moment(data?.appointment?.date).format("LL")}
                            </p>
                          </div>
                          <div className="flex items-center justify-between gap-5">
                            <p className="text-[#6A6B6C]">Time</p>
                            <p className="text-[#2A2B2B] font-medium">
                              {moment(data?.appointment?.date).format("LT")}
                            </p>
                          </div>
                          <div className="flex items-center justify-between gap-5">
                            <p className="text-[#6A6B6C]">Duration</p>
                            <p className="text-[#2A2B2B] font-medium">
                              {data?.services[0]?.duration} month(s)
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
        </>
      )}
    </div>
  )
}
