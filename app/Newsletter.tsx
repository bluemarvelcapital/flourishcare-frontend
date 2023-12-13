import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import React from "react"

export const Newsletter = () => {
  return (
    <div className="bg-primary md:p-[100px] p-[20px] my-[3rem] text-center text-white">
      <h3 className="md:text-[20px] text-[18px] mb-[16px] uppercase font-[600]">
        subscribe now
      </h3>
      <p className="md:text-[32px] text-[24px] mb-[16px] font-[600]">
        Our newsletter for updates
      </p>
      <p className="md:text-[24px] text-[18px] mb-[40px] font-[600]">
        No spamming promised
      </p>
      <div className="flex md:flex-row flex-col justify-center items-center gap-[24px]">
        <Input
          placeholder="Enter email address"
          className="bg-white md:py-[17px] py-[12px] rounded-[4px] border-[1px] border-[#003399] md:w-[400px] w-full"
        />
        <Button className="md:py-[17px] md:w-auto w-full">Subscribe now</Button>
      </div>
    </div>
  )
}
