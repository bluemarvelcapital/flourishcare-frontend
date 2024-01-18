"use client"
import {
  CreditCardOutlined,
  MailOutlined,
  RightOutlined,
} from "@ant-design/icons"
import { CallOutlined, MailOutline } from "@mui/icons-material"
import { Divider } from "antd"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import Fade from "react-reveal/Fade"
import { HomesImages } from "./HomesImages"

export const Homes = () => {
  return (
    <div className="my-[3rem] px-[1rem] py-[2rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] lg:gap-[5rem]">
      {/* images */}
      <HomesImages />
      {/* Description */}
      <div>
        <h2 className="md:text-3xl lg:text-[3rem] text-xl md:p-7 p-5 border-l-[3px] border-success font-normal">
          Flourish at Priestleys
        </h2>
        <p className="my-7 md:text-lg">
          Our community offer supported living accommodation services that
          ensure your loved ones receive the care they need in the environment
          they love.
        </p>
        <div className="md:text-lg">
          <p className="font-semibold mb-1">PRICING</p>
          <p>
            <CreditCardOutlined />
            <span className="ml-4">Room rates starts at £X/month</span>
          </p>
        </div>
        <div className="md:text-lg my-7">
          <p className="font-semibold mb-1">TYPES OF LIVING</p>
          <ul className="coloured-disc px-5 mb-3">
            <li>Mental health clients</li>
            <li>Respite care clients</li>
          </ul>
          <Link
            href="/contact-us"
            className="text-primary transition-all text-md"
          >
            Not sure which care type you need?
            <span className="text-success">
              <RightOutlined />
            </span>
          </Link>
        </div>
        <div className="md:text-lg my-7 grid-cols-1 md:grid-cols-2 grid gap-[2rem]">
          <div>
            <p className="font-semibold mb-4">Contact</p>
            <p className="mb-2">
              <CallOutlined />
              <span className="ml-3">+44 7459 4933 83</span>
            </p>
            <p className="mb-2">
              <CallOutlined />
              <span className="ml-3">+44 1582 2831 72</span>
            </p>
            <p className="">
              <MailOutline />
              <a
                href="mailto:info@flourishadvancedcare.co.uk"
                className="ml-3 text-primary"
              >
                info@flourishadvancedcare.co.uk
              </a>
            </p>
          </div>
          <div>
            <p className="font-semibold mb-3">Location</p>
            <p className="mb-2">39 Priestleys</p>
            <p className="mb-2">Luton</p>
            <p className="mb-2">Bedfordshire</p>
            <p className="mb-2">LU1 5QL</p>
            <Link
              href="/contact-us"
              className="hover:text-success transition-all text-md text-primary"
            >
              Map and Directions
              <span className="text-success">
                <RightOutlined />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
