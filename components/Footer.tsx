import React from "react"
import Link from "next/link"
import { Logo } from "./Logo"
import {
  FacebookFilled,
  InstagramOutlined,
  LinkedinFilled,
  TwitterOutlined,
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
} from "@ant-design/icons"
import { Avatar } from "antd"

export const Footer = () => {
  return (
    <div className="font-myriad-pro">
      <div className="bg-primary py-[4rem] flex justify-center items-center md:gap-[50px] gap-[20px]">
        <Link href="https://www.facebook.com/people/Flourish-Advanced-Care/61554189911700/">
          <FacebookFilled className="text-white text-[40px]" />
        </Link>
        <Link
          href="
https://www.linkedin.com/company/flourish-advanced-care/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BtAogmRPpRTidyt%2B5bJObWA%3D%3D"
        >
          <LinkedinFilled className="text-white text-[40px]" />
        </Link>
        <Link href="https://www.instagram.com/flourishadvancedcare/">
          <InstagramOutlined className="text-white text-[40px]" />
        </Link>
        {/* <Link href="">
          <TwitterOutlined className="text-white text-[40px]" />
        </Link> */}
      </div>
      <div className="bg-white">
        <div className="md:px-[144px] px-[20px] py-[40px] container_xl bg-[#fff]">
          <div>
            <div className="flex md:flex-row flex-col justify-between md:gap-[70px] gap-[30px]">
              <div>
                <h3 className="text-[22px]  capitalize mb-[20px] font-[600] font-myriad-pro">
                  About us
                </h3>
                <ul className="flex flex-col gap-[18px]">
                  <li>
                    <Link href="/about-us" className=" font-[500]">
                      Our Aim
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us" className=" font-[500]">
                      Our Mission
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us" className=" font-[500]">
                      Our Commitment
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us" className=" font-[500]">
                      Our Core Values
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[22px]  capitalize mb-[20px] font-[600]">
                  Company
                </h3>
                <ul className="flex flex-col gap-[18px]">
                  <li>
                    <Link href="/privacy-policy" className=" font-[500]">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[22px]  capitalize mb-[20px] font-[600]">
                  Contact us
                </h3>
                <ul className="flex flex-col gap-[18px]">
                  <li className="font-[500] flex gap-[20px] items-center">
                    <Avatar className="bg-primary" icon={<PhoneOutlined />} />
                    <span className="">+44 7459 4933 83</span>
                  </li>
                  <li className="font-[500] flex gap-[20px] items-center">
                    <Avatar className="bg-primary" icon={<PhoneOutlined />} />
                    <span className="">+44 1582 2831 72</span>
                  </li>
                  <li className="font-[500] flex gap-[20px] items-center">
                    <Avatar className="bg-primary" icon={<MailOutlined />} />
                    <Link
                      href="mailto:info@flourishadvancedcare.co.uk"
                      className=" font-[500]"
                    >
                      info@flourishadvancedcare.co.uk
                    </Link>
                  </li>
                  <li className="font-[500] flex gap-[20px] items-center">
                    <Avatar className="bg-primary" icon={<HomeOutlined />} />
                    <Link
                      href="mailto:info@flourishadvancedcare.co.uk"
                      className=" font-[500]"
                    >
                      39 Priestleys, Luton, England, LU1 5QL
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F9FAF9] pt-[2rem]">
          <div className="w-[90%] h-[1px] bg-[#C9C9C9] container_xl w-[85%] mx-auto" />
          <div className="md:py-[30px] py-[30px] text-center flex items-center justify-between flex-wrap md:w-[85%] mx-auto">
            <p className="font-[500] text-center px-[1rem]">
              © Copyright Flourish Advanced Care. All Rights Reserved
            </p>
            <Link
              href={"https://bluemarvelgroup.com/"}
              target="_blank"
              className="text-success"
            >
              - Built by Blue Marvel Group
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
