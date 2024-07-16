"use client"
import { Loader } from "@/components/Loader"
import { PDFViewer } from "@/components/PDFViewer"
import { useAuth } from "@/hooks/useAuth"
import { useToastify } from "@/hooks/useToastify"
import {
  useGetBookingQuery,
  useUpdateDocumentApprovalStatusMutation,
} from "@/services/bookings.service"
import { LoadingOutlined } from "@ant-design/icons"
import { Alert, Button, Divider } from "antd"
import moment from "moment"
import Link from "next/link"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import React, { useState } from "react"

export const CarePlanInfo = () => {
  const { booking_id } = useParams()
  const { auth } = useAuth()
  const [mutate, { isLoading }] = useUpdateDocumentApprovalStatusMutation()
  const [open, setOpen] = useState(false)
  const { errorToast, successToast } = useToastify()

  const router = useRouter()
  const {
    data,
    isLoading: loadingBooking,
    refetch,
  } = useGetBookingQuery({
    accessToken: auth.accessToken,
    bookingId: booking_id as string,
  })
  const handleAccept = async () => {
    try {
      await mutate({
        accessToken: auth.accessToken,
        bookingId: booking_id as string,
        approvalStatus: {
          carePlan: true,
        },
      }).unwrap()
      successToast("Care Plan Accepted.")
      router.push(`/care-plan/${booking_id}/contract`)
      refetch()
      setOpen(!open)
    } catch (error: any) {
      errorToast(error?.message || error?.data?.message || "An Error Occured")
    }
  }
  return (
    <>
      {loadingBooking ? (
        <Loader name="Care Plan" />
      ) : (
        <>
          {!data?.carePlan ? (
            <div className="min-h-[30vh]">
              <Alert
                type="warning"
                description={"Care plan has not been uploaded yet."}
                showIcon
              />
            </div>
          ) : (
            <div>
              <div className="bg-white rounded-lg p-5 md:p-10">
                <div>
                  <h2 className="text-[1.3rem] md:text-[1.8rem] capitalize font-[500]">
                    Client&apos;s Personal Details
                  </h2>
                  <p className="text-[1rem] md:text-[1rem] text-baseDark mt-1 mb-6">
                    Your booking has been successfully submitted, click on the
                    button below to generate a contract.
                  </p>
                </div>
                <div className="mb-5 flex flex-col gap-3 text-sm md:text-md">
                  <div className="flex justify-between items-center">
                    <p className="text-[#555656]">Full Name</p>
                    <p>
                      {data.user.firstname} {data.user.lastname}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#555656]">Age</p>
                    <p>{data.user.age || "-"}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#555656]">Home Address</p>
                    <p>{data.user.address || "-"}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#555656]">Email</p>
                    <p>{data.user.email || "-"}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#555656]">Date</p>
                    <p>{moment(data.appointment.date).format("LL") || "-"}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#555656]">Duration</p>
                    <p>{`${data.services[0].duration} months` || "-"}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#555656]">Time</p>
                    <p>{moment(data.appointment.date).format("LT") || "-"}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#555656]"></p>
                    <p></p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#555656]"></p>
                    <p></p>
                  </div>
                </div>
                <Divider />
                <div className="bg-[#66ACDC1A] rounded-lg p-5 md:p-10 my-10">
                  <div>
                    <h2 className="text-[1.3rem] md:text-[1.8rem] capitalize font-[500]">
                      Personalized Care Plan
                    </h2>
                    <p className="text-[1rem] md:text-[1rem] text-baseDark mt-1 mb-6">
                      This plan has been curated for you after the careful
                      evaluation of last assessment.
                    </p>
                  </div>

                  <div>
                    <PDFViewer
                      pdf_url={
                        "https://res.cloudinary.com/osaretinfrank/image/upload/v1721125327/test-pdf_xraoja.pdf"
                      }
                    />
                  </div>
                </div>
                <div className="md:w-[50%] mx-auto w-full md:mt-10">
                  {data?.approvalStatus.carePlan ? (
                    <Link href={`/care-plan/${booking_id}/contract`}>
                      <Button className="h-[2.5rem] w-full text-success border-success">
                        Go to Contract
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      className="bg-success h-[2.5rem] w-full"
                      type="primary"
                      disabled={isLoading}
                      onClick={handleAccept}
                    >
                      {isLoading ? <LoadingOutlined /> : "Proceed To Accept"}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}
