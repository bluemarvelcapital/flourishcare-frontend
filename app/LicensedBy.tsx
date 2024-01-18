import Link from "next/link"
import React from "react"

export const LicensedBy = () => {
    return (
        <div className="py-[2rem] md:py-[5rem] bg-white">
            <h3 className="text-[24px] font-[600] text-center text-[#ACACAC] mb-[2rem]">
                Licensed By
            </h3>
            <div className="flex md:flex-row flex-col justify-center items-center gap-[50px] md:gap-[119px]">
                <Link href={"https://www.homecareassociation.org.uk/"} target='_blank'>
                    <img src="/license1.png" alt="" />
                </Link>
                <Link href={'https://www.skillsforcare.org.uk/Home.aspx'} target='_blank'>
                    <img src="/license2.svg" alt="" />
                </Link>
                <Link href={'https://www.cqc.org.uk/'} target='_blank'>
                    <img src="/license3.png" alt="" />
                </Link>
                <Link href={'https://www.hcpa.info/'} target='_blank'>
                    <img src="/license.png" alt="" />
                </Link>
            </div>
        </div>
    )
}
