"use client"
import {
  AppRegistrationOutlined,
  BadgeOutlined,
  EditNoteOutlined,
  MedicalInformation,
} from "@mui/icons-material"
import React, { useState } from "react"
import { HealthForm } from "./HealthForm"
import { EmployeeForm } from "./EmployeeForm"
import { NonDisclosureForm } from "./NonDisclosureForm"
import { InternationalStep1 } from "./InternationalStep1"

export const InternationFormSteps = () => {
  const [activeStep, setActiveStep] = useState(0)
  let next = () => setActiveStep((prev) => prev + 1)
  const items = [
    {
      content: <InternationalStep1 next={next} />,
    },
    {
      content: <HealthForm next={next} />,
    },
    {
      content: <EmployeeForm next={next} />,
    },
    {
      content: <NonDisclosureForm />,
    },
  ]
  return (
    <div className="mt-10 form-steps">
      <div className="md:p-10 my-[2rem]">{items[activeStep].content}</div>
    </div>
  )
}
