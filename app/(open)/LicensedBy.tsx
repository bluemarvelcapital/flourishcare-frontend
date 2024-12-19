import Link from "next/link";
import React from "react";

export const LicensedBy = () => {
  const cqc = [
    "Personal care.",
    "Treatment of disease, disorder or injury.",
    "Caring for adults over 65 yrs.",
    "Caring for adults under 65 yrs.",
    "Caring for children (0 - 18yrs).",
    "Dementia.",
    "Mental health conditions.",
    "Physical disabilities.",
  ];
  return (
    <div className="py-[2rem] md:py-[5rem] bg-white">
      <h3 className="text-[24px] font-[600] text-center text-[#ACACAC] mb-[2rem]">
        Licensed By
      </h3>
      <div className="flex md:flex-row flex-col flex-wrap justify-center items-center gap-[50px] md:gap-[119px] px-4">
        <Link href={"https://www.homecareassociation.org.uk/"} target="_blank">
          <img src="/license1.png" alt="" />
        </Link>
        <Link
          href={"https://www.skillsforcare.org.uk/Home.aspx"}
          target="_blank"
        >
          <img src="/license2.svg" alt="" />
        </Link>
        <Link href={"https://www.cqc.org.uk/"} target="_blank">
          <img src="/cqc.png" alt="" />
        </Link>
        <Link href={"https://www.hcpa.info/"} target="_blank">
          <img src="/license.png" alt="" />
        </Link>
        <Link href={"https://www.trustedcare.co.uk/"} target="_blank">
          <img src="/trustedcare.png" alt="" style={{ maxWidth: "300px" }} />
        </Link>
      </div>
    </div>
  );
};
