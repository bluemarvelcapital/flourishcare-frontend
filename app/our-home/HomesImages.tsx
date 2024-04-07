"use client"
import React from "react"
import { Image } from "antd"
const houses = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 12, 13, 14, 15]

export const HomesImages = () => {
  return (
    <div className="homes-images">
      <div className="md:h-[45rem] mb-3">
        <Image
          width={"100%"}
          height={"100%"}
          src="/house-front.jpg"
          alt="House 1"
          preview
          style={{ objectFit: "cover" }}
        />
      </div>
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) =>
            console.log(`current index: ${current}, prev index: ${prev}`),
        }}
      >
        <div className="grid grid-cols-4 md:grid-cols-6 xxl:grid-cols-6 gap-[1rem] justify-items-between">
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
          <div className="relative w-full">
            <Image
              src={`/parlour.jpg`}
              alt="House"
              width={"100%"}
              height={100}
              style={{ objectFit: "cover" }}
              preview
            />
          </div>
          <div className="relative w-full">
            <Image
              src={`/dining.jpg`}
              alt="House"
              width={"100%"}
              height={100}
              style={{ objectFit: "cover" }}
              preview
            />
          </div>
          {/* <Image.PreviewGroup
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
          </Image.PreviewGroup> */}
        </div>
      </Image.PreviewGroup>
      {/*  */}
    </div>
  )
}
