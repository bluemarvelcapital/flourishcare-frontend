"use client"
import { Container } from "@/components/Container"
import { PageTitle } from "@/components/PageTitle"
import React from "react"
import { UploadContract } from "./UploadContract"

const ContractPage = () => {
  return (
    <Container>
      <PageTitle title="Contract" />
      <UploadContract />
    </Container>
  )
}

export default ContractPage
