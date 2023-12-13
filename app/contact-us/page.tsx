import React from "react"
import Image from "next/image"
import { ContactForm } from "./Form"
import { Map } from "./Map"

export const metadata = {
  title: "Flourish Care - Contact Us",
  description: "Flourish Advanced Care",
}

const ContactUS = () => {
  return (
    <div>
      <div className="flex gap-[64px] items-center justify-center md:p-[64px] p-[20px]">
        <div className="relative md:w-[576px] md:h-[700px] md:block hidden">
          <Image src={"/img13.svg"} fill alt="Image" objectFit="cover" />
        </div>
        <ContactForm />
      </div>
      <Map />
    </div>
  )
}

export default ContactUS
