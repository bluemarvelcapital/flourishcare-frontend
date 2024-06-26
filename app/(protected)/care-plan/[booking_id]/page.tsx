import { Container } from "@/components/Container"
import { PageTitle } from "@/components/PageTitle"
import React from "react"
import { CarePlanInfo } from "./CarePlanInfo"

const CarePlanPage = () => {
  return (
    <Container>
      <PageTitle title="Care Plan" />
      <CarePlanInfo />
    </Container>
  )
}

export default CarePlanPage
