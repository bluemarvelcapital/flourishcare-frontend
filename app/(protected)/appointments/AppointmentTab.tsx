"use client"
import React from "react"
import { Tabs } from "antd"
import type { TabsProps } from "antd"
import { useAuth } from "@/hooks/useAuth"
import { useGetAppointmentsQuery } from "@/services/appointment.service"
import { AppointmentsTable } from "./AppointmentTable"
import { AppointmentI } from "@/interface/appointment"

const onChange = (key: string) => {
  console.log(key)
}

export const AppointmentsTab: React.FC = () => {
  const { auth } = useAuth()
  const { data, isLoading } = useGetAppointmentsQuery({
    accessToken: auth.accessToken,
  })
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <p className="px-5">Appointment History</p>,
      children: (
        <AppointmentsTable
          isLoading={isLoading}
          data={data as AppointmentI[]}
        />
      ),
    },
    {
      key: "2",
      label: <p className="px-5">Approved Appointments</p>,
      children: (
        <AppointmentsTable
          isLoading={isLoading}
          data={
            data?.filter(
              (entry) => entry.status === "APPROVED"
            ) as AppointmentI[]
          }
        />
      ),
    },
    {
      key: "3",
      label: <p className="px-5">Pending Appointments</p>,
      children: (
        <AppointmentsTable
          isLoading={isLoading}
          data={
            data?.filter(
              (entry) => entry.status === "PENDING"
            ) as AppointmentI[]
          }
        />
      ),
    },
    {
      key: "4",
      label: <p className="px-5">Cancelled Appointments</p>,
      children: (
        <AppointmentsTable
          isLoading={isLoading}
          data={
            data?.filter(
              (entry) => entry.status === "CANCELLED"
            ) as AppointmentI[]
          }
        />
      ),
    },
  ]
  return (
    <div className="border-[1px] border-[#E1E1E1] rounded-[10px] bg-white">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  )
}
