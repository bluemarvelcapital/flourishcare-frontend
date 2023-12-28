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
    <div className="bg-primary md:p-[60px] p-[20px] text-white mb-[40px]">
      <div className="container_xl md:mx-auto flex xl:flex-row flex-col gap-[30px] justify-between w-[80%]">
        <Fade left>
          <div>
            <h3 className="md:w-[80%] md:text-[64px] mb-[20px] text-[24px]">
              Our Core Values
            </h3>
            <div className="relative xl:w-[500px] w-full md:h-[625px] h-[360px]">
              <Image fill src={"/img12.svg"} alt="Family" objectFit="cover" />
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="px-[10px] py-[60px] flex flex-col md:gap-[40px] gap-[20px] xl:w-[55%]">
            {content.map((item, index) => (
              <div
                key={index}
                className="flex md:gap-[49px] gap-[10px] justify-start items-start"
              >
                <div className="min-w-[29px] h-[8px] rounded-[11px] bg-[#fff]"></div>
                <div className="text-[16px] md:text-[22px]">
                  <h3 className="font-[600] mb-[10px]">{headers[index]}</h3>
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
