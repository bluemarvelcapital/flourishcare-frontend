"use client"
import { Container } from "@/components/Container"
import { PageTitle } from "@/components/PageTitle"
import React from "react"
import { Payment } from "./Payment"

const paymentPage = () => {
  return (
    <Container>
      <PageTitle title="Payment Method" />
      <Payment />
    </Container>
  )
}

export default paymentPage
