"use client"
import React, { FC, useState } from "react"
import { Avatar, Button, Modal } from "antd"
import { CheckOutlined } from "@ant-design/icons"
import Link from "next/link"

export const SuccessModalAlt: FC<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  link?: string
  content: React.ReactNode
  text: string
  onOk?: () => void
}> = ({ open, setOpen, content, link, onOk, text }) => {
  return (
    <div>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={false}
        // width={"auto"}
        classNames={{ content: "md:min-w-[733px] mx-auto" }}
      >
        <div className="flex flex-col justify-center items-center gap-[1rem] max-w-[433px] mx-auto py-[2rem]">
          <h2>
            <Avatar
              icon={<CheckOutlined className="text-[2rem] text-white" />}
              className="bg-success w-[4rem] h-[4rem] flex justify-center items-center mb-[1rem]"
            />
          </h2>
          <div>{content}</div>
          {link ? (
            <Link href={link}>
              <Button
                className="bg-success px-10 h-[2.5rem] w-[243px]"
                type="primary"
              >
                {text}
              </Button>
            </Link>
          ) : (
            <Button
              className="bg-success px-10 h-[2.5rem] w-[243px]"
              type="primary"
              onClick={() => {
                onOk && onOk()
                setOpen(false)
              }}
            >
              {text}
            </Button>
          )}
        </div>
      </Modal>
    </div>
  )
}
