import React from "react"
import { Hero } from "./Hero"
import { Button } from "@/components/Button"
import Link from "next/link"

const Page = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="container_xl">
        <div className="py-[3rem] md:w-[60%] md:mx-auto p-10">
          <h3 className="text-3xl font-semibold text-center">
            Current Vacancies
          </h3>
          <p className="text-lg">We are recruiting for the following roles:</p>
          <ul className="list-disc my-3">
            <li>Senior Care Workers / Nurses</li>
          </ul>
          <div className="mt-8">
            <h4 className="text-2xl font-semibold">
              Job Title: Senior Care Worker
            </h4>
            <p className="text-lg">Location: Bedfordshire</p>
            <p className="text-lg">Employment Type: Full-time</p>
            <p className="text-lg">Salary: £21,850.00 per year</p>
            <p className="mt-4">
              We are seeking a compassionate and experienced Senior Care Worker
              to join our care team. The ideal candidate will provide leadership
              and support to care staff, ensure high-quality care for residents
              or clients, and assist in the day-to-day management of care
              services. Language skills are highly desirable to support
              effective communication with diverse clients. This role is
              suitable for candidates looking for visa sponsorship under the UK
              Skilled Worker program.
            </p>
            <p className="mt-4 font-semibold">Key Responsibilities:</p>
            <ul className="list-disc pl-5">
              <li>Supervise and support care staff in delivering high-quality care.</li>
              <li>Assist in developing and implementing care plans tailored to individual needs.</li>
              <li>Provide hands-on personal care, including bathing, dressing, and feeding.</li>
              <li>Administer medication in compliance with standards.</li>
              <li>Ensure compliance with health and safety regulations.</li>
              <li>Act as a point of contact for residents, families, and healthcare professionals.</li>
              <li>Train, mentor, and support junior staff.</li>
              <li>Participate in regular staff meetings to improve care services.</li>
            </ul>
            <p className="mt-4 font-semibold">Qualifications and Experience:</p>
            <ul className="list-disc pl-5">
              <li>NVQ Level 3 in Health and Social Care or equivalent qualification.</li>
              <li>At least 6 months experience in a care role.</li>
              <li>Excellent communication and interpersonal skills.</li>
              <li>Strong understanding of safeguarding and care standards.</li>
              <li>Flexibility to work evenings, weekends, and holidays.</li>
            </ul>
            <p className="mt-4 font-semibold">Eligibility:</p>
            <p>
              Must meet the requirements for a Skilled Worker visa, including
              English language proficiency and minimum salary threshold.
              Employer sponsorship is available for eligible candidates.
            </p>
          </div>
          <p className="text-lg mt-6">
            If you&apos;re interested in any of these roles, please use the
            button below to go to the forms page, fill the form, and then submit
            when done.
          </p>
          <div className="flex justify-center items-center w-full">
            <Link href="/work-with-us/form">
              <Button className="my-3 text-center">Go to Forms</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page
