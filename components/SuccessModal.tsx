"use client"
import React, { FC, useState } from "react"
import { Avatar, Modal } from "antd"
import { CheckOutlined } from "@ant-design/icons"
import { Button } from "./Button"
import Link from "next/link"

export const SuccessModal: FC<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  link: string
  text: string
  onOk?: () => void
}> = ({ open, setOpen, text, link, onOk }) => {
  return (
    <div>
      <Modal open={open} onCancel={() => setOpen(false)} footer={false}>
        <div className="flex flex-col justify-center items-center gap-[1rem]">
          <h2>
            <Avatar
              icon={<CheckOutlined className="text-[2rem] text-white" />}
              className="bg-success w-[4rem] h-[4rem] flex justify-center items-center mb-[1rem]"
            />
          </h2>
          <p className="text-[24px]">{text}</p>
          {/* <Link href={link} target="_blank" rel="noreferrer">
            <Button>Check your schedule on calendly</Button>
          </Link> */}
          <Button
            onClick={() => {
              onOk && onOk()
              setOpen(false)
            }}
          >
            View schedule on calendly
          </Button>
        </div>
      </Modal>
    </div>
  )
}
