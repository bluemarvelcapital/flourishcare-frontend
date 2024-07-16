"use client"
import React, { useEffect, useState } from "react"
import { Input, Skeleton, Table } from "antd"
import type { TableColumnsType, TableProps } from "antd"
import moment from "moment"
import { useAuth } from "@/hooks/useAuth"
import { RiSearch2Line } from "react-icons/ri"
import { BsDot } from "react-icons/bs"
import { useGetTransactionsQuery } from "@/services/transaction.service"
import { TransactionI } from "@/interface/transaction"
import { useGetBookingQuery } from "@/services/bookings.service"
import Link from "next/link"

const RenderWithBookingId = ({
  id,
  key,
}: {
  id: string
  key: "title" | "status" | "service"
}) => {
  const { auth } = useAuth()
  const { data, isLoading } = useGetBookingQuery({
    accessToken: auth.accessToken,
    bookingId: id,
  })
  const text =
    key === "service" ? data?.services[0]?.name : data?.appointment[key]
  return (
    <div>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div>
          <p>{text}</p>
        </div>
      )}
    </div>
  )
}

const columns: TableColumnsType<TransactionI> = [
  {
    title: "Transaction ID",
    dataIndex: "id",
    render: (value, record) => {
      return (
        <span>
          <Link
            href={record.bookingId ? `/care-plan/${record.bookingId}` : ""}
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
  // {
  //   title: "Name",
  //   dataIndex: "id",
  //   render: (value, record) => (
  //     <RenderWithBookingId key="title" id={record.bookingId} />
  //   ),
  // },
  {
    title: "Date",
    dataIndex: "createdAt",
    render: (text, record) => (
      <span>{moment(record.createdAt).format("LL LT")}</span>
    ),
    sorter: (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt),
    defaultSortOrder: "descend",
  },
  // {
  //   title: "Service",
  //   dataIndex: "services",
  //   render: (value, record) => (
  //     <RenderWithBookingId key="service" id={record.bookingId} />
  //   ),
  // },
  {
    title: "Amount",
    dataIndex: "services",
    render: (value, record) => {
      return (
        <span>
          {Intl.NumberFormat("en-US", {
            currency: record.currency,
            style: "currency",
          }).format(Number(record.amount))}
        </span>
      )
    },
    sorter: (a, b) => Number(a.amount) - Number(b.amount),
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
    onFilter: (value, record) => record.status.indexOf(value as string) === 0,
    render: (value, record) => {
      return (
        <span
          className={`${
            record.status === "PENDING"
              ? "text-yellow-500 "
              : record.status.toUpperCase() === "APPROVED"
              ? "text-green-500 "
              : "text-red-500 "
          } flex items-center px-1 py-1 rounded-md capitalize font-semibold`}
        >
          <BsDot className="text-2xl" />{" "}
          <span>{record.status.toLowerCase()}</span>
        </span>
      )
    },
  },
]

const onChange: TableProps<TransactionI>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra)
}

export const TransactionsTable: React.FC = () => {
  const { auth } = useAuth()
  const { data, isLoading } = useGetTransactionsQuery({
    accessToken: auth.accessToken,
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
          placeholder="Search by id"
          prefix={<RiSearch2Line />}
          onChange={onSearch}
        />
      </div>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        loading={isLoading}
      />
    </div>
  )
}
