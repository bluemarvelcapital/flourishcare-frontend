import { Container } from "@/components/Container"
import { PageTitle } from "@/components/PageTitle"
import React from "react"
import { Service } from "./Service"
import { RatingsAndReviews } from "./RatingsAndReviews"
import { Divider } from "antd"

const ServiceDetails = () => {
  return (
    <div>
      <div className="py-[2rem] md:py-[3rem] lg:py-[6rem]">
        <Container>
          <PageTitle title="Service details" />
          <Service />
          <RatingsAndReviews />
        </Container>
      </div>
    </div>
  )
}

export default ServiceDetails
