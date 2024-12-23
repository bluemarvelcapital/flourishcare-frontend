"use client"
import Image from "next/image"
import React from "react"
import Fade from "react-reveal/Fade"

const headers = [
  "KINDNESS BUILDS GENUINE RELATIONSHIPS",
  "KINDNESS CREATES A SENSE OF BELONGING",
  "KINDNESS MAKES EVERY MOMENT COUNT",
  "KINDNESS MAKES EVERYONE FEEL AT HOME",
]

const content = [
  "Genuine relationships are at the heart of great care. By fostering in our homes, a genuine kindness that comes from the heart, we build real connections between our colleagues, Residents and their family and friends",
  "Home isn’t just a place, it’s a feeling. Feeling happy, feeling valued and respected, feeling as if you can be yourself. Kindness enables everyone to feel appreciated and understood, which in turn makes them feel safe and secure – a part of the family.",
  "Life is not made up of minutes, hours, days, weeks, months or years, but of moments. We believe an ethos of kindness and genuine caring ensures these moments are happier, and makes all of our journeys easier.",
  "As a kind company, we open our doors to friends, family, neighbours and local people, offering kindness and support and enriching the lives of our Residents.",
]

export const CoreValues = () => {
  return (
    <div className="md:p-[60px] p-[20px] mb-[40px]">
      <div className="container_xl md:mx-auto flex xl:flex-row flex-col gap-[30px] justify-between items-center lg:w-[80%]">
        <Fade left>
          <div className="">
            <div className="flex justify-between items-center mb-4">
              <h3 className="md:w-[80%] md:text-[64px] leading-tight mb-[20px] text-[24px] text-primary">
                Our Core Values
              </h3>
              <Image src={"/star_.svg"} width={80} height={80} alt="star" />
            </div>
            <div className="relative xl:w-[550px] w-full md:h-[555px] h-[360px]">
              <Image
                fill
                src={"/img12.jpeg"}
                alt="Family"
                objectFit="cover"
                className="md:rounded-tr-[50px] md:rounded-bl-[50px] w-full"
              />
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="px-[10px] py-[60px] flex flex-col md:gap-[40px] gap-[20px] xl:w-[55%]">
            {content.map((item, index) => (
              <div
                key={index}
                className="flex md:gap-[30px] gap-[10px] justify-start items-start"
              >
                <div className="min-w-[29px] h-[8px] rounded-[11px] bg-primary"></div>
                <div className="text-[16px] md:text-[18px]">
                  <h3 className="font-[600] mb-[10px] text-primary">
                    {headers[index]}
                  </h3>
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  )
}
