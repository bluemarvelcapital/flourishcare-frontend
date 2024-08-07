"use client"
import React, { useState } from "react"
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  TimePicker,
} from "antd"
import Link from "next/link"
import { SuccessModalAlt } from "@/components/SuccessModalAlt"
import { useAuth } from "@/hooks/useAuth"
import { useForm } from "antd/es/form/Form"
import { ServiceI } from "@/interface/service"
import {
  useCreateAppointmentMutation,
  useGetAppointmentsQuery,
} from "@/services/appointment.service"
import { useToastify } from "@/hooks/useToastify"
import moment from "moment"
import dayjs from "dayjs"
import { useGetUserDataQuery } from "@/services/auth.service"

export const BookingForm = ({ service }: { service: ServiceI }) => {
  const { auth } = useAuth()
  const [createAppointment, { isLoading }] = useCreateAppointmentMutation()
  const { refetch } = useGetAppointmentsQuery({ accessToken: auth.accessToken })
  const { data: userData } = useGetUserDataQuery({
    accessToken: auth.accessToken,
  })
  const [open, setOpen] = useState(false)
  const { errorToast, successToast } = useToastify()
  const handleSubmit = async () => {
    try {
      await createAppointment({
        accessToken: auth.accessToken,
        title: service.name,
        date: dayjs(form.getFieldValue("day")).toDate().toLocaleString(),
        note: form.getFieldValue("note"),
        address: form.getFieldValue("address"),
        time: dayjs(form.getFieldValue("day")).format("hh:mma"),
        duration: service.duration,
        serviceIds: [service.id],
      }).unwrap()
      await refetch()
      // successToast("Appointment Successfully booked.")
      setOpen(!open)
    } catch (error: any) {
      errorToast(error?.message || error?.data?.message || "An Error Occured")
    }
  }
  const { firstname, lastname } = auth
  const [form] = useForm()
  const [checked, setChecked] = useState(false)
  return (
    <div className="max-w-[565px] mx-auto">
      <h2 className="text-[1.3rem] md:text-[2rem] capitalize font-[500]">
        Book Appointment
      </h2>
      <p className="text-[1rem] md:text-[1.3rem] text-[#ACACAC] mt-1 mb-6">
        Fill in patient&apos;s information
      </p>
      <div>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          form={form}
          disabled={isLoading}
        >
          <Form.Item label="Patient Name">
            {/* <Select className="w-full" size="large" /> */}
            <Input
              className="w-[100%]"
              size="large"
              value={`${firstname} ${lastname}`}
              // disabled
            />
          </Form.Item>
          <div className="grid grid-cols-2 gap-3 items-start w-full">
            {/* <Form.Item
              label="Date of Birth"
              name={"date_of_birth"}
              rules={[{ required: true }]}
            >
              <DatePicker
                className="w-[100%]"
                size="large"
                placeholder=""
              />
            </Form.Item> */}
            <Form.Item
              label="Gender"
              // name={"gender"}
              rules={[{ required: true }]}
            >
              <Input
                className="w-[100%]"
                size="large"
                value={userData?.gender}
              />
            </Form.Item>
            <Form.Item
              label="Appointment Date"
              name={"day"}
              rules={[{ required: true }]}
            >
              <DatePicker
                // showTime
                className="w-[100%]"
                size="large"
                placeholder=""
              />
            </Form.Item>
          </div>

          <Form.Item
            label="Address/Location"
            // name={"address"}
            rules={[{ required: true }]}
          >
            <Input
              className="w-[100%]"
              size="large"
              value={userData?.address}
            />
          </Form.Item>
          <Form.Item label="Service">
            <Input className="w-full" size="large" value={service.name} />
          </Form.Item>
          {/* <Form.Item label="Duration">
            <Input
              className="w-full"
              size="large"
              value={`${service.duration} month(s)`}
            />
          </Form.Item> */}

          <Form.Item
            label="Special Requests/Instructions:"
            rules={[{ required: true }]}
            name={"note"}
          >
            <Input.TextArea
              className="w-full"
              size="large"
              style={{ minHeight: 128 }}
            />
          </Form.Item>
          <Form.Item>
            <div>
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />{" "}
              <span>
                You agree to our friendly{" "}
                <Link
                  href={"/privacy-policy"}
                  target="_blank"
                  className="text-success underline hover:text-success"
                >
                  privacy policy.
                </Link>
              </span>
            </div>
          </Form.Item>
          <Button
            size="large"
            className="w-full bg-success"
            type="primary"
            htmlType="submit"
            disabled={!checked || isLoading}
          >
            {isLoading ? "Booking appointment..." : "Continue"}
          </Button>
        </Form>
      </div>
      <SuccessModalAlt
        open={open}
        // link={`/care-plan/${1}`}
        // text="View Appointment"
        text="Book Another Appointment"
        setOpen={setOpen}
        onOk={() =>
          form.resetFields([
            "day",
            "note",
            "address",
            "date_of_birth",
            "gender",
          ])
        }
        content={
          <div>
            <div className="text-center my-3 mb-10">
              <h3 className="text-[17px] font-[500] mb-1">
                Booking Successful
              </h3>
              <p>
                Your booking has been successfully submitted, click on the
                button below to view your appointment.
              </p>
            </div>
            <div className="mb-5">
              <div className="flex justify-between items-center">
                <p>Patient Name</p>
                <p>
                  {firstname} {lastname}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>Appointment Date</p>
                <p>
                  {dayjs(form.getFieldValue("day")).format("ddd, DD-MM-YYYY")}
                </p>
              </div>
            </div>
          </div>
        }
      />
    </div>
  )
}
