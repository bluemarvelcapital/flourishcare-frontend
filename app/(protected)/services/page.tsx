"use client"
import { Container } from "@/components/Container"
import { PageTitle } from "@/components/PageTitle"
import React from "react"
import { OurServices } from "./Services"

const Services = () => {
  return (
    <div className="py-[2rem] md:py-[3rem] lg:py-[6rem]">
      <Container>
        <PageTitle title="Our services" />
        <OurServices />
      </Container>
    </div>
  )
}

export default Services
