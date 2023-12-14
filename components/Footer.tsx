import React from "react"
import Link from "next/link"
import { Logo } from "./Logo"
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "./Icons"

export const Footer = () => {
  return (
    <div className="bg-[#0B2232] text-baseLight">
      <div className="md:px-[144px] px-[20px] py-[40px] flex md:flex-row md:justify-between flex-col md:gap-[140px] gap-[30px] container_xl">
        <div className="md:w-[21%]">
          <Logo />
          <p className="md:text-[17px] font-[500]">
            Dedicated to providing the highest level of domiciliary care to
            residential, nursing homes, and dementia care for older people in
            the comfort of their homes throughout the UK.
          </p>
        </div>
        <div>
          <div className="flex md:flex-row flex-col md:gap-[70px] gap-[30px]">
            <div>
              <h3 className="text-[22px] text-baseLight capitalize mb-[20px]">
                About us
              </h3>
              <ul className="flex flex-col gap-[18px]">
                <li>
                  <Link href="" className="text-baseLight font-[500]">
                    Our Aim
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-baseLight font-[500]">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-baseLight font-[500]">
                    Our Commitment
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-baseLight font-[500]">
                    Our Core Values
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[22px] text-baseLight capitalize mb-[20px]">
                Company
              </h3>
              <ul className="flex flex-col gap-[18px]">
                <li>
                  <Link href="" className="text-baseLight font-[500]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-baseLight font-[500]">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[22px] text-baseLight capitalize mb-[20px]">
                Contact us
              </h3>
              <ul className="flex flex-col gap-[18px]">
                <li>
                  Email:
                  <Link
                    href="mailto:flourishadvancedcare@gmail.com"
                    className="text-baseLight font-[500]"
                  >
                    flourishadvancedcare@gmail.com
                  </Link>
                </li>
                <li className="font-[500]">
                  phone number:{" "}
                  <span className="text-baseLight">+1 305 603 7528</span>
                </li>
                <li>
                  <div className="flex gap-[20px]">
                    <Link href="">
                      <FacebookIcon />
                    </Link>
                    <Link href="">
                      <LinkedInIcon />
                    </Link>
                    <Link href="">
                      <InstagramIcon />
                    </Link>
                    <Link href="">
                      <TwitterIcon />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] h-[1px] bg-baseLight container_xl md:mt-[30px] mt-[30px] w-[85%] mx-auto" />
      <div className="md:py-[50px] py-[30px] text-center">
        <p className="font-[500] text-center">
          © Copyright Flourish Advanced Care. All Rights Reserved
        </p>
      </div>
    </div>
  )
}
