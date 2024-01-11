"use client"
import React from "react"
import { Image } from "antd"
const houses = [2, 3, 4, 5, 6]

export const HomesImages = () => {
  return (
    <div>
      <div>
        <Image width={"100%"} src="/house1.svg" alt="House 1" preview />
      </div>
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) =>
            console.log(`current index: ${current}, prev index: ${prev}`),
        }}
      >
        <div className="grid grid-cols-6 xxl:grid-cols-6 gap-[1rem]">
          {houses.map((house) => (
            <div className="relative w-full" key={house}>
              <Image
                src={`/house${house}.svg`}
                alt="House"
                width={"100%"}
                height={100}
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
          <Image.PreviewGroup
            items={[
              "/house7.svg",
              "/house8.svg",
              "/house9.svg",
              "/house10.svg",
              "/house11.svg",
              "/house12.svg",
              "/house13.svg",
              "/house14.svg",
              "/house15.svg",
            ]}
          >
            <Image
              src={`/house7.svg`}
              alt="House"
              width={"100%"}
              height={100}
              style={{ objectFit: "cover" }}
            />
          </Image.PreviewGroup>
        </div>
      </Image.PreviewGroup>
      {/*  */}
    </div>
  )
}
