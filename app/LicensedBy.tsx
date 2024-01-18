import React from "react"

export const LicensedBy = () => {
  return (
    <div className="py-[2rem] md:py-[5rem] bg-white">
      <h3 className="text-[24px] font-[600] text-center text-[#ACACAC] mb-[2rem]">
        Licensed By
      </h3>
      <div className="flex md:flex-row flex-col justify-center items-center gap-[50px] md:gap-[119px]">
        <img src="/license1.png" alt="" />
        <img src="/license2.svg" alt="" />
        <img src="/license3.png" alt="" />
        <img src="/license.png" alt="" />
      </div>
    </div>
  )
}
