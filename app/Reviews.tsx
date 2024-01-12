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
      <Carousel autoplay dots={true} dotPosition="left">
        <div>
          <div className="grid md:grid-cols-3 grid-cols-1  gap-[1rem]">
            <div className="bg-white rounded-[20px] md:px-[40px] px-[20px] py-[20px]">
              <div className="flex gap-[30px] items-center mb-[30px]">
                <Avatar src="/avatar.png" size={64} />
                <h3 className="capitalize text-[18px] font-semibold">
                  dara loju james
                </h3>
              </div>
              <p className="text-[#707371] md:text-[18px] text-[16px] mb-[30px]">
                “Grateful for the peace of mind flourish care gave us. The
                caregivers were not just skilled; they brought joy and
                companionship to my grandmother.”
              </p>
              <Rate value={5} className="text-primary" />
            </div>

            <div className="bg-white rounded-[20px] md:px-[40px] px-[20px] py-[20px]">
              <div className="flex gap-[30px] items-center mb-[30px]">
                <Avatar src="/avatar.png" size={64} />
                <h3 className="capitalize text-[18px] font-semibold">
                  dara loju james
                </h3>
              </div>
              <p className="text-[#707371] md:text-[18px] text-[16px] mb-[30px]">
                “Grateful for the peace of mind flourish care gave us. The
                caregivers were not just skilled; they brought joy and
                companionship to my grandmother.”
              </p>
              <Rate value={5} className="text-primary" />
            </div>

            <div className="bg-white rounded-[20px] md:px-[40px] px-[20px] py-[20px]">
              <div className="flex gap-[30px] items-center mb-[30px]">
                <Avatar src="/avatar.png" size={64} />
                <h3 className="capitalize text-[18px] font-semibold">
                  dara loju james
                </h3>
              </div>
              <p className="text-[#707371] md:text-[18px] text-[16px] mb-[30px]">
                “Grateful for the peace of mind flourish care gave us. The
                caregivers were not just skilled; they brought joy and
                companionship to my grandmother.”
              </p>
              <Rate value={5} className="text-primary" />
            </div>
          </div>
        </div>
        <div>
          <div className="grid md:grid-cols-3 grid-cols-1  gap-[1rem]">
            <div className="bg-white rounded-[20px] md:px-[40px] px-[20px] py-[20px]">
              <div className="flex gap-[30px] items-center mb-[30px]">
                <Avatar src="/avatar.svg" size={64} />
                <h3 className="capitalize text-[18px] font-semibold">
                  dara loju james
                </h3>
              </div>
              <p className="text-[#707371] md:text-[18px] text-[16px] mb-[30px]">
                “Grateful for the peace of mind flourish care gave us. The
                caregivers were not just skilled; they brought joy and
                companionship to my grandmother.”
              </p>
              <Rate value={5} className="text-primary" />
            </div>

            <div className="bg-white rounded-[20px] md:px-[40px] px-[20px] py-[20px]">
              <div className="flex gap-[30px] items-center mb-[30px]">
                <Avatar src="/avatar.svg" size={64} />
                <h3 className="capitalize text-[18px] font-semibold">
                  dara loju james
                </h3>
              </div>
              <p className="text-[#707371] md:text-[18px] text-[16px] mb-[30px]">
                “Grateful for the peace of mind flourish care gave us. The
                caregivers were not just skilled; they brought joy and
                companionship to my grandmother.”
              </p>
              <Rate value={5} className="text-primary" />
            </div>

            <div className="bg-white rounded-[20px] md:px-[40px] px-[20px] py-[20px]">
              <div className="flex gap-[30px] items-center mb-[30px]">
                <Avatar src="/avatar.svg" size={64} />
                <h3 className="capitalize text-[18px] font-semibold">
                  dara loju james
                </h3>
              </div>
              <p className="text-[#707371] md:text-[18px] text-[16px] mb-[30px]">
                “Grateful for the peace of mind flourish care gave us. The
                caregivers were not just skilled; they brought joy and
                companionship to my grandmother.”
              </p>
              <Rate value={5} className="text-primary" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
