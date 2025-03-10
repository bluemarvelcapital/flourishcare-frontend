import { Container } from "@/components/Container"
import { PageTitle } from "@/components/PageTitle"
import React from "react"
import { OurServices } from "./Services"

export const metadata = {
  title: "Services | Flourish Advanced Care",
}

const Services = () => {
  return (
    <div className="">
      <Container>
        <PageTitle title="Our services" />
        <OurServices />
      </Container>
    </div>
  )
}

export default Services
