"use client"
import {
  CreditCardOutlined,
  MailOutlined,
  RightOutlined,
} from "@ant-design/icons"
import { CallOutlined } from "@mui/icons-material"
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
        <h2 className="md:text-3xl text-xl p-5 border-l-[2px] border-success font-semibold">
          Flourish at Priestleys
        </h2>
        <p className="my-5 md:text-lg">
          Our community offer supported living accommodation services that
          ensure your loved ones receive the care they need in the environment
          they love.
        </p>
        <div className="md:text-lg">
          <p className="font-semibold">PRICING</p>
          <p>
            <CreditCardOutlined />
            <span className="ml-3">Room rates starts at £X/month</span>
          </p>
        </div>
        <div className="md:text-lg my-5">
          <p className="font-semibold">TYPES OF LIVING</p>
          <ul className="list-disc px-5 mb-2">
            <li>Mental health clients</li>
            <li>Respite care clients</li>
          </ul>
          <Link
            href="/contact-us"
            className="hover:text-success transition-all text-md"
          >
            Not sure which care type you need?
            <span className="text-success">
              <RightOutlined />
            </span>
          </Link>
        </div>
        <div className="md:text-lg my-5 grid-cols-1 md:grid-cols-2 grid gap-[2rem]">
          <div>
            <p className="font-semibold mb-3">Contact</p>
            <p className="mb-2">
              <CallOutlined />
              <span className="ml-3">+44 7459 4933 83</span>
            </p>
            <p>
              <CallOutlined />
              <span className="ml-3">+44 1582 2831 72</span>
            </p>
            <p className="m">
              <MailOutlined />
              <a
                href="mailto:info@flourishadvancedcare.co.uk"
                className="ml-3 text-success"
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
              className="hover:text-success transition-all text-md"
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
