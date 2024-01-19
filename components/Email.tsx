import * as React from "react"
import { Html } from "@react-email/html"
import { Button } from "@react-email/button"
import { Body, Container, Head, Tailwind, Text } from "@react-email/components"
import { NationalFormI } from "@/interface/nationalCandidateForm"
import { InternationalCandidateFormI } from "@/interface/internationalCandidateForm"

export function Email(data: [string, string][], name: string, region: string) {
  return (
    <Html lang="en">
      <Body>
        <Tailwind
          config={{
            colors: {
              success: "#04BD4B",
              error: "#E5625E",
            },
          }}
        >
          <Container>
            <Text className="text-[#04BD4B] text-[18px] capitalize">
              {region} - Application Form Data from {name}
            </Text>
            {data.map((item, index) => {
              return (
                <Container key={index} className="mb-5">
                  <Text className="capitalize mb-0 text-lg">{item[0]}</Text>
                  <Text className="capitalize italic font-semibold">
                    {item[1]}
                  </Text>
                </Container>
              )
            })}
          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}
