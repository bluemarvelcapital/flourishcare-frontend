import React from "react"
import Link from "next/link"
import { Logo } from "./Logo"
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "./Icons"

export const Footer = () => {
  return (
    <div className="md:px-[144px] px-[20px] py-[40px] flex md:flex-row flex-col md:gap-[140px] gap-[30px]">
      <div className="md:w-[23%]">
        <Logo />
        <p className="md:text-[17px] font-[500]">
          Dedicated to providing the highest level of domiciliary care to
          residential, nursing homes, and dementia care for older people in the
          comfort of their homes throughout the UK.
        </p>
      </div>
      <div>
        <div className="flex md:flex-row flex-col md:gap-[70px] gap-[30px]">
          <div>
            <h3 className="text-[22px] text-primary capitalize mb-[20px]">
              About us
            </h3>
            <ul className="flex flex-col gap-[18px]">
              <li>
                <Link href="" className="text-base font-[500]">
                  Our Aim
                </Link>
              </li>
              <li>
                <Link href="" className="text-base font-[500]">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="" className="text-base font-[500]">
                  Our Commitment
                </Link>
              </li>
              <li>
                <Link href="" className="text-base font-[500]">
                  Our Core Values
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[22px] text-primary capitalize mb-[20px]">
              Company
            </h3>
            <ul className="flex flex-col gap-[18px]">
              <li>
                <Link href="" className="text-base font-[500]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="" className="text-base font-[500]">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[22px] text-primary capitalize mb-[20px]">
              Contact us
            </h3>
            <ul className="flex flex-col gap-[18px]">
              <li>
                Email:
                <Link
                  href="mailto:flourishadvancedcare@gmail.com"
                  className="text-primary font-[500]"
                >
                  flourishadvancedcare@gmail.com
                </Link>
              </li>
              <li className="font-[500]">
                phone number:{" "}
                <span className="text-primary">+1 305 603 7528</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:mt-[100px] mt-[30px] flex md:gap-0 gap-[32px]  md:flex-row flex-col-reverse justify-between items-center">
          <p className="font-[500] text-center">
            © Copyright Flourish Advanced Care. All Rights Reserved
          </p>
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
        </div>
      </div>
    </div>
  )
}
