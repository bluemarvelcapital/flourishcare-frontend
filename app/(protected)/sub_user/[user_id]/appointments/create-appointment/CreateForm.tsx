"use client"
import React, { useState } from "react"
import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd"
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
import dayjs from "dayjs"
import { useParams } from "next/navigation"
import { useGetServicesQuery } from "@/services/services.service"
import { Loader } from "@/components/Loader"
import { useGetClientsQuery } from "@/services/profiles.service"

export const CreateAppointmentForm = () => {
  const { user_id } = useParams() as { user_id: string }
  const [service, setService] = useState<ServiceI>({} as never)
  const { auth } = useAuth()
  const [createAppointment, { isLoading }] = useCreateAppointmentMutation()
  const { refetch } = useGetAppointmentsQuery({
    accessToken: auth.accessToken,
    userId: user_id,
  })

  const [open, setOpen] = useState(false)
  const { errorToast } = useToastify()
  const { data: services, isLoading: loadingServices } = useGetServicesQuery({
    limit: "50",
    page: "1",
    status: "ACTIVE",
  })
  const { data: clients, isLoading: loadingClients } = useGetClientsQuery({
    accessToken: auth.accessToken,
  })
  const baseClient = clients?.find(({ user }) => user.id === user_id)
  const handleSubmit = async () => {
    try {
      await createAppointment({
        accessToken: auth.accessToken,
        title: form.getFieldValue("title"),
        date: dayjs(form.getFieldValue("day")).toDate().toLocaleString(),
        note: form.getFieldValue("note"),
        address: form.getFieldValue("address"),
        time: dayjs(form.getFieldValue("day")).format("hh:mma"),
        duration: service?.duration,
        serviceIds: form.getFieldValue("services"),
        userId: user_id,
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

      {loadingServices || loadingClients ? (
        <Loader name="services" />
      ) : (
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
                value={`${baseClient?.user?.firstname} ${baseClient?.user?.lastname}`}
                // disabled
              />
            </Form.Item>
            {/* <div className="grid grid-cols-2 gap-3 items-start w-full">
              <Form.Item
                label="Date of Birth"
                name={"date_of_birth"}
                rules={[{ required: true }]}
              >
                <DatePicker className="w-[100%]" size="large" placeholder="" />
              </Form.Item>
              <Form.Item
                label="Gender"
                name={"gender"}
                rules={[{ required: true }]}
              >
                <Input className="w-[100%]" size="large" />
              </Form.Item>
            </div> */}
            <Form.Item
              label="Address/Location"
              // name={"address"}

              rules={[{ required: true }]}
            >
              <Input
                className="w-[100%]"
                size="large"
                value={baseClient?.address as string}
              />
            </Form.Item>
            <div className="grid grid-cols-1 gap-3 items-start w-full">
              <Form.Item
                label="Appointment Date"
                name={"day"}
                rules={[{ required: true }]}
              >
                <DatePicker className="w-[100%]" size="large" placeholder="" />
              </Form.Item>
            </div>

            <Form.Item
              label="Select Services"
              name={"services"}
              rules={[{ required: true }]}
            >
              <Select
                className="w-full"
                size="large"
                options={services
                  ?.filter((service_) => service_.id !== service.id)
                  ?.map((service) => ({
                    value: service.id,
                    label: service.name,
                  }))}
                loading={loadingServices}
                mode="multiple"
                allowClear
                showSearch
                optionFilterProp="label"
                onChange={(value) => setService(value)}
              />
            </Form.Item>
            <Form.Item
              label="What will you like to call this appointment?"
              rules={[{ required: true }]}
              name={"title"}
            >
              <Input className="w-full" size="large" />
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
      )}
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
              <h3 className="text-[17px] font-[500] mb-1">Action Successful</h3>
              <p>Appointment has been successfully submitted.</p>
            </div>
            <div className="mb-5">
              <div className="flex justify-between items-center">
                <p>Patient Name</p>
                <p>
                  {baseClient?.user?.firstname} {baseClient?.user?.lastname}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>Appointment Date</p>
                <p>
                  {dayjs(form.getFieldValue("day")).format("ddd, DD-MM-YYYY")}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>Appointment</p>
                <p>{form.getFieldValue("title")}</p>
              </div>
            </div>
          </div>
        }
      />
    </div>
  )
}
