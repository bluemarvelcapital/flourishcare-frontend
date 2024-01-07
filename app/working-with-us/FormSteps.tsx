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

export const FormSteps = () => {
  const [activeStep, setActiveStep] = useState(0)
  let next = () => setActiveStep((prev) => prev + 1)
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
      content: "Start working with us",
    },
  ]
  return (
    <div className="p-10 mt-10 form-steps">
      <div className="grid grid-cols-4 gap-[2rem] justify-items-center">
        {items.map((item, index) => (
          <div
            onClick={() => setActiveStep(index)}
            key={index}
            className={`flex gap-4 items-start md:h-[157px] lg:h-[110px] cursor-pointer ${
              activeStep === index
                ? "border-[2px] border-success text-success"
                : "border-base text-base border-[1px]"
            } rounded-[10px] p-[1rem] w-full hover:border-success hover:text-success`}
          >
            <div className="rounded-[5px] flex items-center justify-center p-[5px] border-[1px] border-base">
              {item.icon}
            </div>
            <h3 className="text-xl font-normal">{item.title}</h3>
          </div>
        ))}
      </div>
      <div className="my-[2rem]">{items[activeStep].content}</div>
    </div>
  )
}
