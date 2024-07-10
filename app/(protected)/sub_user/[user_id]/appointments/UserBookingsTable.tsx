"use client"
import React, { useEffect, useState } from "react"
import { Input, Table } from "antd"
import type { TableColumnsType, TableProps } from "antd"
import moment from "moment"
import { useAuth } from "@/hooks/useAuth"
import { RiSearch2Line } from "react-icons/ri"
import { BsDot } from "react-icons/bs"
import { BookingI } from "@/interface/bookings"
import { useGetBookingsQuery } from "@/services/bookings.service"
import Link from "next/link"
import { FaFilePdf } from "react-icons/fa"
import { useParams } from "next/navigation"

const columns: TableColumnsType<BookingI> = [
  {
    title: "Booking ID",
    dataIndex: "id",
    render: (value, record) => {
      return (
        <span>
          <Link
            href={record.id ? `/care-plan/${record.id}` : ""}
            className="underline text-success"
          >
            <span className="md:hidden block">
              {record?.id?.slice(0, 7)}...
            </span>
            <span className="md:block hidden">{record.id}</span>
          </Link>
        </span>
      )
    },
  },

  {
    title: "Appointment ID",
    dataIndex: "appointmentId",
    render: (value, record) => {
      return <span>{record.appointmentId}</span>
    },
    responsive: ["md", "lg"],
  },
  {
    title: "Contract",
    dataIndex: "signedContract",
    render: (value, record) => {
      return (
        <span>
          <Link
            href={record.signedContract || ""}
            className="flex items-center gap-2 p-2 bg-[#F7F7F7] w-full"
          >
            <FaFilePdf className="text-red-500" />
            <span>{record?.signedContract?.slice(0, 7) || "contract"}...</span>
          </Link>
        </span>
      )
    },
  },
  {
    title: "Date",
    dataIndex: "updatedAt",
    render: (text, record) => (
      <span>{moment(record.updatedAt).format("LL LT")}</span>
    ),
    sorter: (a, b) => Date.parse(a.updatedAt) - Date.parse(b.updatedAt),
    defaultSortOrder: "descend",
    responsive: ["md", "lg"],
  },
  {
    title: "Invoice",
    dataIndex: "invoice",
    render: (value, record) => {
      return (
        <span>
          <Link
            href={record.invoice || ""}
            className="flex items-center gap-2 p-2 bg-[#F7F7F7] w-full"
          >
            <FaFilePdf className="text-red-500" />
            <span>{record?.invoice?.slice(0, 7) || "invoice"}...</span>
          </Link>
        </span>
      )
    },
  },
  {
    title: "Paid",
    dataIndex: "paid",
    filters: [
      {
        text: "Paid",
        value: true,
      },
      {
        text: "Not Paid",
        value: false,
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.paid,
    render: (value, record) => {
      return (
        <span
          className={`${
            record.paid ? "text-green-500 " : "text-red-500 "
          } flex items-center px-1 py-1 rounded-md capitalize font-semibold`}
        >
          <BsDot className="text-2xl" />{" "}
          <span className="text-xs">
            {record.paid ? "PAID" : "NOT YET PAID"}
          </span>
        </span>
      )
    },
  },
]

const onChange: TableProps<BookingI>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra)
}

export const UserBookingsTable: React.FC = () => {
  const { user_id } = useParams() as { user_id: string }
  const { auth } = useAuth()
  const { data, isLoading } = useGetBookingsQuery({
    accessToken: auth.accessToken,
    userId: user_id,
  })
  const [dataState, setDataState] = useState(data)
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const newStata = data?.filter((entry) =>
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
    <div className="bg-white p-7 rounded-xl">
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
        dataSource={data?.slice()?.reverse()}
        onChange={onChange}
        loading={isLoading}
      />
    </div>
  )
}
