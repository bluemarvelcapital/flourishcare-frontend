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
import { InternationalStep2 } from "./InternationalStep2"
import { InternationalStep3 } from "./InternationalStep3"

export const InternationFormSteps = () => {
  const [activeStep, setActiveStep] = useState(0)
  let next = () => setActiveStep((prev) => prev + 1)
  const items = [
    {
      content: <InternationalStep1 next={next} />,
    },
    {
      content: <InternationalStep2 next={next} />,
    },
    {
      content: <InternationalStep3 next={next} />,
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
