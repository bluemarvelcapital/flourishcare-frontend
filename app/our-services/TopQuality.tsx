"use client"
import Image from "next/image"
import React from "react"
import Fade from "react-reveal/Fade"

export const TopQuality = () => {
  return (
    <div className="md:p-[60px] p-[20px] container_xl">
      <h3 className="md:text-[51px] text-[24px] text-primary font-bold md:mb-[110px] mb-[30px]">
        Top quality Care services
      </h3>
      <Fade cascade bottom>
        <div className="grid xxl:grid-cols-3 md:grid-cols-2 md-grid-cols-1 md:gap-[32px] gap-[16px] items-stretch">
          <div className="h-full">
            <div className="relative w-full h-[255px]">
              <Image
                src={"/img6.svg"}
                alt="Image"
                fill
                className="md:rounded-t-[39px]"
                objectFit="cover"
              />
            </div>

            <div className="md:h-[255px] p-[24px] border-[1px] border-[#D3D3D3]">
              <h3 className="md:text-[32px] text-[20px] text-primary mb-[20px]">
                Home Care - Domiciliary
              </h3>
              <p>
                Our home care service assists with bathing, dressing, and
                bedtime. We tailor a Personal Care plan to your needs and
                preferences, whether it&apos;s personal cleanlines or catheter
                changes. Our professionally trained Care Workers always provide
                compassionate, sensitive, and respectful care.
              </p>
            </div>
          </div>

          <div className="h-full">
            <div className="relative w-full h-[255px]">
              <Image
                src={"/img7.svg"}
                alt="Image"
                fill
                className="md:rounded-t-[39px]"
                objectFit="cover"
              />
            </div>

            <div className="md:h-[255px] p-[24px] border-[1px] border-[#D3D3D3]">
              <h3 className="md:text-[32px] text-[20px] text-primary mb-[20px]">
                Respite care
              </h3>
              <p>
                Respite care refers to any sort of care provided when a primary
                carer takes regular breaks from the individual they regularly
                care for. The care is still delivered in the individual&apos;s
                residence; the only difference is the carer. Our respite care is
                for regular assistance – provided at home by our professional
                carers.
              </p>
            </div>
          </div>

          <div className="h-full">
            <div className="relative w-full h-[255px]">
              <Image
                src={"/img8.svg"}
                alt="Image"
                fill
                className="md:rounded-t-[39px]"
                objectFit="cover"
              />
            </div>

            <div className="md:h-[255px] p-[24px] border-[1px] border-[#D3D3D3]">
              <h3 className="md:text-[32px] text-[20px] text-primary mb-[20px]">
                Companionship Care
              </h3>
              <p>
                Companion care is different for each person. We can help you
                find someone to hang out with at home or to go out with.
                Companion care is based on your needs and where you are in life.
                For example, hobbies and activities, social events, running
                errands, managing household tasks, etc.
              </p>
            </div>
          </div>

          <div className="h-full">
            <div className="relative w-full h-[255px]">
              <Image
                src={"/img9.svg"}
                alt="Image"
                fill
                className="md:rounded-t-[39px]"
                objectFit="cover"
              />
            </div>

            <div className="md:h-[255px] p-[24px] border-[1px] border-[#D3D3D3]">
              <h3 className="md:text-[32px] text-[20px] text-primary mb-[20px]">
                Dementia Care
              </h3>
              <p>
                We can help with dementia symptoms and needs. To build trust, we
                treat all clients with compassion, respect, and patience. We
                establish a professional connection to learn medical needs,
                habits, and preferences to create a personalised dementia care
                plan. Our crew is trained to recognise mood and behaviour
                changes and respond quickly to alleviate discomfort
              </p>
            </div>
          </div>

          <div className="h-full">
            <div className="relative w-full h-[255px]">
              <Image
                src={"/img10.svg"}
                alt="Image"
                fill
                className="md:rounded-t-[39px]"
                objectFit="cover"
              />
            </div>

            <div className="md:h-[255px] p-[24px] border-[1px] border-[#D3D3D3]">
              <h3 className="md:text-[32px] text-[20px] text-primary mb-[20px]">
                Live-in Care
              </h3>
              <p>
                Our home care service assists with bathing, dressing, and
                bedtime. We tailor a Personal Care plan to your needs and
                preferences, whether it&apos;s personal cleanlines or catheter
                changes. Our professionally trained Care Workers always provide
                compassionate, sensitive, and respectful care.
              </p>
            </div>
          </div>

          <div className="h-full">
            <div className="relative w-full h-[255px]">
              <Image
                src={"/img11.svg"}
                alt="Image"
                fill
                className="md:rounded-t-[39px]"
                objectFit="cover"
              />
            </div>

            <div className="md:h-[255px] p-[24px] border-[1px] border-[#D3D3D3]">
              <h3 className="md:text-[32px] text-[20px] text-primary mb-[20px]">
                Rehabilitation Services
              </h3>
              <p>
                Our home care service assists with bathing, dressing, and
                bedtime. We tailor a Personal Care plan to your needs and
                preferences, whether it&apos;s personal cleanlines or catheter
                changes. Our professionally trained Care Workers always provide
                compassionate, sensitive, and respectful care.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}
