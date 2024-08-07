import { Divider } from "antd"
import React from "react"
import { Container } from "../Container"
import Link from "next/link"

export const InPageFooter = () => {
  return (
    <Container>
      <footer className="-mb-10">
        <div className="bg-[#C9C9C9]/80 w-full h-[1px] mb-5" />
        <div className="flex items-center justify-between flex-wrap md:w-[85%] mx-auto">
          <p className="text-center text-[#6A6B6C]">
            © Copyright Flourish Advanced Care. All Rights Reserved
          </p>
          <Link
            href={"https://bluemarvelgroup.com/"}
            target="_blank"
            className="text-success"
          >
            Built by Blue Marvel Group
          </Link>
        </div>
      </footer>
    </Container>
  )
}
