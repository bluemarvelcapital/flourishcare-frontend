import { Divider } from "antd"
import React from "react"
import { Container } from "../Container"

export const InPageFooter = () => {
  return (
    <Container>
      <footer className="-mb-10">
        <div className="bg-[#C9C9C9]/80 w-full h-[1px] mb-5" />
        <p className="text-center text-[#6A6B6C]">
          © Copyright Flourish Advanced Care. All Rights Reserved
        </p>
      </footer>
    </Container>
  )
}
