"use client"
import React from "react"
import { Table } from "antd"
import type { TableColumnsType, TableProps } from "antd"
import { AppointmentI } from "@/interface/appointment"
import moment from "moment"
import { useAuth } from "@/hooks/useAuth"
import { useGetAppointmentsQuery } from "@/services/appointment.service"

const columns: TableColumnsType<AppointmentI> = [
  {
    title: "Name",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
    sortDirections: ["descend"],
  },
  {
    title: "Date",
    dataIndex: "date",
    render: (text, record) => (
      <span>{moment(record.date).format("LL LT")}</span>
    ),
    sorter: (a, b) => Date.parse(a.date) - Date.parse(b.date),
    defaultSortOrder: "descend",
  },
  {
    title: "Service",
    dataIndex: "services",
    render: (value, record) => {
      return <span>{record.services[0].name}</span>
    },
  },
  {
    title: "Amount",
    dataIndex: "services",
    render: (value, record) => {
      return <span>{record.services[0].price}</span>
    },
    sorter: (a, b) => a.services[0].price - b.services[0].price,
  },
  {
    title: "Appointment ID",
    dataIndex: "id",
    render: (value, record) => {
      return <span>{record.id}</span>
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    filters: [
      {
        text: "Approved",
        value: "APPROVED",
      },
      {
        text: "Pending",
        value: "PENDING",
      },
      {
        text: "Cancelled",
        value: "CANCELLED",
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.title.indexOf(value as string) === 0,
    render: (value, record) => {
      return (
        <span
          className={`${
            record.status === "PENDING"
              ? "text-yellow-500 bg-yellow-50"
              : record.status === "Approved"
              ? "text-green-500 bg-green-50"
              : "text-red-500 bg-red-50"
          } block text-center px-1 py-1 rounded-md capitalize`}
        >
          {record.status.toLowerCase()}
        </span>
      )
    },
  },
]

const onChange: TableProps<AppointmentI>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra)
}

export const AppointmentsTable: React.FC = () => {
  const { auth } = useAuth()
  const { data, isLoading } = useGetAppointmentsQuery({
    accessToken: auth.accessToken,
  })
  return (
    <div className="bg-white p-7 rounded-xl">
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        loading={isLoading}
      />
    </div>
  )
}
