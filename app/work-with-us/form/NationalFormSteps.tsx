"use client"
import {
  AppRegistrationOutlined,
  BadgeOutlined,
  EditNoteOutlined,
  MedicalInformation,
} from "@mui/icons-material"
import React, { useState } from "react"
import { RegistrationForm } from "./RegistrationForm"
import { HealthForm } from "./HealthForm"
import { EmployeeForm } from "./EmployeeForm"
import { NonDisclosureForm } from "./NonDisclosureForm"
import { useCompletedSteps } from "@/hooks/useCompletedSteps"

export const NationalFormSteps = () => {
  const [activeStep, setActiveStep] = useState(0)
  const { completeStep, completedSteps } = useCompletedSteps()

  let next = () =>
    setActiveStep((prev) => {
      completeStep("nationalForm", prev)
      if (completedSteps["nationalForm"][prev] === true) {
        return prev + 1
      }
      return prev
    })
  const items = [
    {
      title: "Complete Application/Registration Form",
      icon: <AppRegistrationOutlined />,
      content: <RegistrationForm next={next} />,
    },
    {
      title: "Complete Pre-Employment Health Questionnaire Form",
      icon: <MedicalInformation />,
      content: <HealthForm next={next} />,
    },
    {
      title: "Complete New Employee Form",
      icon: <BadgeOutlined />,
      content: <EmployeeForm next={next} />,
    },
    {
      title: "Complete Non-Disclosure Form",
      icon: <EditNoteOutlined />,
      content: <NonDisclosureForm />,
    },
  ]
  return (
    <div className="mt-10 form-steps">
      <div className="md:p-10 p-5 grid md:grid-cols-4 grid-cols-1 gap-[2rem] justify-items-center">
        {items.map((item, index) => {
          const active = activeStep === index
          const isCompleted = completedSteps["nationalForm"][index]
          const disabledClass =
            "text-grey-200 border-grey-200 hover:border-grey-200 hover:text-grey-200"
          return (
            <div
              onClick={() => {
                if (completedSteps["nationalForm"][index] === true) {
                  setActiveStep(index)
                }
              }}
              key={index}
              className={`flex gap-4 items-start md:h-[157px] lg:h-[110px] rounded-[10px] p-[1rem]  ${
                active
                  ? "border-[2px] border-success text-success"
                  : "border-base text-base border-[1px]"
              }  ${
                isCompleted
                  ? "w-full hover:border-success hover:text-success cursor-pointer"
                  : disabledClass
              } 
               ${
                 !active && !isCompleted ? "cursor-not-allowed opacity-40" : ""
               }`}
            >
              <div className="rounded-[5px] flex items-center justify-center p-[5px] border-[1px] border-base">
                {item.icon}
              </div>
              <h3 className="text-xl font-normal">{item.title}</h3>
            </div>
          )
        })}
      </div>
      <div className="md:p-10 my-[2rem]">{items[activeStep].content}</div>
    </div>
  )
}
