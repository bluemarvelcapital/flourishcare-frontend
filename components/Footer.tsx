import React from "react"
import Link from "next/link"
import { Logo } from "./Logo"
import {
  FacebookFilled,
  InstagramOutlined,
  LinkedinFilled,
  TwitterOutlined,
  PhoneFilled,
  MailFilled,
} from "@ant-design/icons"
import { Avatar } from "antd"

export const Footer = () => {
  return (
    <div className="font-myriad-pro">
      <div className="bg-primary py-[4rem] flex justify-center items-center md:gap-[50px] gap-[20px]">
        <Link href="">
          <FacebookFilled className="text-white text-[40px]" />
        </Link>
        <Link href="">
          <LinkedinFilled className="text-white text-[40px]" />
        </Link>
        <Link href="">
          <InstagramOutlined className="text-white text-[40px]" />
        </Link>
        <Link href="">
          <TwitterOutlined className="text-white text-[40px]" />
        </Link>
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
                    <Link href="" className=" font-[500]">
                      Our Aim
                    </Link>
                  </li>
                  <li>
                    <Link href="" className=" font-[500]">
                      Our Mission
                    </Link>
                  </li>
                  <li>
                    <Link href="" className=" font-[500]">
                      Our Commitment
                    </Link>
                  </li>
                  <li>
                    <Link href="" className=" font-[500]">
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
                    <Link href="" className=" font-[500]">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="" className=" font-[500]">
                      Terms of Use
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
                    <Avatar className="bg-primary" icon={<PhoneFilled />} />
                    <span className="">+1 305 603 7528</span>
                  </li>
                  <li className="font-[500] flex gap-[20px] items-center">
                    <Avatar className="bg-primary" icon={<MailFilled />} />
                    <Link
                      href="mailto:flourishadvancedcare@gmail.com"
                      className=" font-[500]"
                    >
                      flourishadvancedcare@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F9FAF9] pt-[2rem]">
          <div className="w-[90%] h-[1px] bg-[#C9C9C9] container_xl w-[85%] mx-auto" />
          <div className="md:py-[30px] py-[30px] text-center">
            <p className="font-[500] text-center px-[1rem]">
              © Copyright Flourish Advanced Care. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
