import { Container } from "@/components/Container"
import { PageTitle } from "@/components/PageTitle"
import React from "react"
import { BookingForm } from "./BookingForm"
import { ServiceI } from "@/interface/service"
import { API_URL } from "@/constants/config"
import axios from "axios"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const response = await axios.get(API_URL + "/service?page=1&limit=20")
  const services: ServiceI[] = response.data.data.services
  return services.map((service) => {
    return {
      id: service.id,
    }
  })
}

export async function generateMetadata({
  params,
}: {
  params: { service_id: string }
}) {
  const { service_id } = params
  // params contains the service `service_id`.
  // If the route is like /services/1, then params.service_id is 1
  const res = await axios.get(
    API_URL + `/service/info/?serviceId=${service_id}`
  )
  const service: ServiceI = res.data.data.service
  if (!service) {
    return {
      title: "404",
    }
  }
  // Pass service data to the page via props
  return {
    title: `Book Appointment | ${service.name}`,
    description: service.description,
  }
}

// This also gets called at build time
export async function fetchService(id: string) {
  // params contains the service `id`.
  // If the route is like /services/1, then params.id is 1
  const res = await axios.get(API_URL + `/service/info/?serviceId=${id}`)
  const service: ServiceI = res.data.data.service

  // Pass service data to the page via props
  return service
}

const AppointmentPage = async ({
  params,
}: {
  params: { service_id: string }
}) => {
  const { service_id } = params
  const service = await fetchService(service_id)
  if (!service) {
    return notFound()
  }
  return (
    <Container>
      <PageTitle title="Appointment" link_text="Make Booking" />
      <BookingForm service={service} />
    </Container>
  )
}

export default AppointmentPage
