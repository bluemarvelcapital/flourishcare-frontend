"use client"
import React, { useEffect, useState } from "react"
import { Input, Table } from "antd"
import type { TableColumnsType, TableProps } from "antd"
import { AppointmentI } from "@/interface/appointment"
import moment from "moment"
import { useAuth } from "@/hooks/useAuth"
import { RiSearch2Line } from "react-icons/ri"

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
      <div>
        <p>{moment(record.date).format("LL")}</p>
        <p>{moment(record.date).format("LT")}</p>
      </div>
    ),
    sorter: (a, b) => Date.parse(a.date) - Date.parse(b.date),
    defaultSortOrder: "descend",
  },
  {
    title: "Service",
    dataIndex: "services",
    render: (value, record) => {
      return <span>{record.services[0]?.name}</span>
    },
  },
  // {
  //   title: "Amount",
  //   dataIndex: "services",
  //   render: (value, record) => {
  //     return (
  //       <span>
  //         {Intl.NumberFormat("en-US", {
  //           currency: record.services[0]?.currency || "GBP",
  //           style: "currency",
  //         }).format(record.services[0]?.price)}
  //       </span>
  //     )
  //   },
  //   sorter: (a, b) => a.services[0]?.price - b.services[0]?.price,
  // },
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

interface TableI {
  isLoading: boolean
  data: AppointmentI[]
}

export const AppointmentsTable: React.FC<TableI> = ({ data, isLoading }) => {
  const [dataState, setDataState] = useState(data)
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const newStata = data?.filter(
      (entry) =>
        entry.title.toLowerCase().includes(value) ||
        entry.id.toLowerCase().includes(value)
    )
    setDataState(newStata)
  }
  useEffect(() => {
    if (data) {
      setDataState(data)
    }
  }, [data])
  return (
    <div className="bg-white p-3 rounded-xl">
      <div className="mb-5">
        <Input
          className="md:w-[350px] w-full"
          size="large"
          placeholder="Search name or id"
          prefix={<RiSearch2Line />}
          onChange={onSearch}
        />
      </div>
      <Table
        columns={columns}
        dataSource={dataState}
        loading={isLoading}
        scroll={{ x: 1200 }}
      />
    </div>
  )
}
