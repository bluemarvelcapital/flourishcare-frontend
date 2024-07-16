import React from "react"
import { Hero } from "./Hero"
import { Button } from "@/components/Button"
import Link from "next/link"

const Page = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="container_xl">
        <div className="py-[3rem] md:w-[60%] md:mx-auto p-10">
          <h3 className="text-3xl font-semibold text-center">
            Current Vacancies
          </h3>
          <p className="text-lg">We are recruiting for the following roles:</p>
          <ul className="list-disc my-3">
            <li>Support Workers</li>
            <li>Senior Support Workers</li>
            <li>Recreational Support Workers</li>
            <li>Care Assitant</li>
            <li>General Nurses</li>
            <li>Mental Nurses</li>
          </ul>
          <p className="text-lg">
            If you&apos;re interested in any of this roles, please use the
            button below to go to the forms page, fill the form and then submit
            when done.
          </p>
          <div className="flex justify-center items-center w-full">
            <Link href="/work-with-us/form">
              <Button className="my-3 text-center">Go to Forms</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
