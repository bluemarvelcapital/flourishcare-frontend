"use client"
import Image from "next/image"
import React from "react"
import Fade from "react-reveal/Fade"

export const WhyChooseUs = () => {
  return (
    <div className="mt-[24px] md:mt-[20px] py-[40px] md:px-[28px] px-[16px]">
      <Fade>
        <h3 className="text-[20px] md:text-[26px] text-center font-bold">
          Why choose Us?
        </h3>
        <p className="md:text-[18px] text-center md:mt-[14px] md:w-[50%] md:mx-[auto]">
          Our individualized approach to care allows us to help our clients live
          fulfilling and meaningful lives with as much or as little assistance
          as they desire. One of the greatest anxieties of the elderly is losing
          their independence. However, residential care need not feel this way.
          You might be amazed at how independent and unrestricted you can be in
          a safe setting that feels like home. We think that life is meant to be
          lived and enjoyed, thus we prioritize individual choice in home design
          and activity planning.
        </p>
      </Fade>

      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[34px] gap-[16px] md:mt-10 mt-5 md:w-[70%] md:mx-[auto]">
        <Fade cascade left>
          <div className="relative w-full md:h-full h-[300px]">
            <Image
              src={"/img5.svg"}
              alt="Image"
              fill
              objectFit="cover"
              className="rounded-[20px]"
            />
          </div>
        </Fade>
        <Fade cascade right>
          <div className="flex flex-col gap-[24px]">
            <div className="bg-[#fff] border-[1px] border-[#00000021] py-[24px] px-[16px] rounded-[7px] flex gap-[24px] items-start">
              <div className="bg-[#1E1E1E] text-[#fff] rounded-[7px] py-[10px] px-[13px] inline-block">
                01
              </div>
              <div>
                <h3 className="text-primary mb-[11px] text-[24px] font-[600]">
                  Holistic Caring
                </h3>
                <p className="text-[#707371] text-[18px]">
                  Our approach is holistic, aiming to enhance the wellbeing of
                  our clients on all levels—physical, mental, and spiritual.
                </p>
              </div>
            </div>

            <div className="bg-[#fff] border-[1px] border-[#00000021] py-[24px] px-[16px] rounded-[7px] flex gap-[24px] items-start">
              <div className="bg-[#1E1E1E] text-[#fff] rounded-[7px] py-[10px] px-[13px] inline-block">
                02
              </div>
              <div>
                <h3 className="text-primary mb-[11px] text-[24px] font-[600]">
                  Personalised Care
                </h3>
                <p className="text-[#707371] text-[18px]">
                  Tailored to your specific needs based on what is important to
                  you and your unique strengths and needs.
                </p>
              </div>
            </div>

            <div className="bg-[#fff] border-[1px] border-[#00000021] py-[24px] px-[16px] rounded-[7px] flex gap-[24px] items-start">
              <div className="bg-[#1E1E1E] text-[#fff] rounded-[7px] py-[10px] px-[13px] inline-block">
                03
              </div>
              <div>
                <h3 className="text-primary mb-[11px] text-[24px] font-[600]">
                  Quality Care
                </h3>
                <p className="text-[#707371] text-[18px]">
                  As a baseline, we will use the KLOEs safe, effective, caring,
                  responsive, and well-led to ensure that our service meets the
                  required quality standards.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}
