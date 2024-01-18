"use client"
import { Avatar, Rate } from "antd"
import React from "react"
import { Carousel } from "antd"

export const Reviews = () => {
  return (
    <div className="mt-[24px] md:mt-[50px] bg-light py-[40px] md:px-[2rem] px-[18px] w-full">
      <h3 className="text-[24px] md:text-[34px] text-center font-bold mb-[24px]">
        Our reviews
      </h3>
      {/* <Carousel dots={true} dotPosition="left"> */}
      <div>
        <div className="grid md:grid-cols-3 grid-cols-1  gap-[1rem]">
          <div className="bg-white rounded-[20px] md:px-[40px] px-[20px] py-[20px] flex flex-col justify-between">
            <div>
              <div className="flex gap-[30px] items-center mb-[30px]">
                <Avatar size={44}>DF</Avatar>
                <div>
                  <h3 className="capitalize text-[18px] font-semibold mb-[-6px]">
                    Desmond F.
                  </h3>
                  <p>12 January 2024</p>
                </div>
              </div>
              <p className="text-[#707371] md:text-[16px] text-[14px] mb-[30px]">
                “The ongoing care and customer service provided by Flourish
                Advanced Care to my father has been excellent. The staff and
                management have been very courteous and responsive to my
                father&apos;s needs and have visited on time. Five stars in all
                categories.”
              </p>
            </div>
            <Rate value={5} className="text-primary" />
          </div>

          <div className="bg-white rounded-[20px] md:px-[40px] px-[20px] py-[20px] flex flex-col justify-between">
            <div>
              <div className="flex gap-[30px] items-center mb-[30px]">
                <Avatar size={44}>NS</Avatar>
                <div>
                  <h3 className="capitalize text-[18px] font-semibold mb-[-6px]">
                    Norleen S.
                  </h3>
                  <p>29 November 2023</p>
                </div>
              </div>
              <p className="text-[#707371] md:text-[16px] text-[14px] mb-[30px]">
                “Professional expertise. The CEO goes well above the required
                remit of the services within your range. It is a good caring
                home care agency that one can rely on. The carers are
                professionals with the right skills and are easy to correct if
                they practise wrongly. I wouldn&apos;t ask for better carers
                other than those from Flourish Advanced Ltd.”
              </p>
            </div>
            <Rate value={4} className="text-primary" />
          </div>

          <div className="bg-white rounded-[20px] md:px-[40px] px-[20px] py-[20px] flex flex-col justify-between">
            <div>
              <div className="flex gap-[30px] items-center mb-[30px]">
                <Avatar size={44}>NW</Avatar>
                <div>
                  <h3 className="capitalize text-[18px] font-semibold mb-[-6px]">
                    Nicola W.
                  </h3>
                  <p>21 November 2023</p>
                </div>
              </div>
              <p className="text-[#707371] md:text-[16px] text-[14px] mb-[30px]">
                “Flourish have been truly outstanding in the care they provide,
                their communication and the support in place for my mother. My
                mother presented some challenges in the beginning but I found
                Flourish to be patient with her and supportive, which was
                reassuring for my family. They continue to impress with their
                dedication and approach to ensure my mother is comfortable and
                happy in her home. I would recommend their services without any
                questions.”
              </p>
            </div>
            <Rate value={5} className="text-primary" />
          </div>
        </div>
      </div>
      {/* </Carousel> */}
    </div>
  )
}
