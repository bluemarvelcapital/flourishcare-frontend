"use client"
import React, { FC } from "react"
import { MinusCircleIcon, PlusCircleIcon } from "./Icons"

interface Props {
  items: {
    title: string
    content: React.ReactNode
  }[]
}

export const Accordion: FC<Props> = ({ items }) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0)
  const lastItem = items.length - 1
  return (
    <div className="transition ease-in-out delay-[5s]">
      {items.map((item, index) => (
        <div
          key={index}
          className="my-[32px] transition ease-in-out delay-[5s]"
        >
          <div
            className="flex justify-between mb-[8px] cursor-pointer transition ease-in-out delay-[5s]"
            onClick={() =>
              setActiveIndex(() => (activeIndex === index ? null : index))
            }
          >
            <p className="text-[20px] font-[600]">{item.title}</p>
            <p>
              {activeIndex === index ? <MinusCircleIcon /> : <PlusCircleIcon />}
            </p>
          </div>
          {activeIndex === index && (
            <div className="transition ease-in-out delay-[5s]">
              {item.content}
            </div>
          )}
          {index !== lastItem && <hr className="my-[32px]" />}
        </div>
      ))}
    </div>
  )
}
