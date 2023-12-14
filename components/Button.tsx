import React from "react"
import classNames from "classnames"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
}

export const Button: React.FC<Props> = ({ className, variant, ...props }) => {
  return (
    <button
      {...props}
      className={classNames(
        `md:px-[56px] px-[20px] md:py-[16px] py-[10px] rounded-[8px] text-[#fff] glow-btn inline-block ${
          variant === "primary" ? "bg-[#82B04D]" : "bg-[#82B04D]"
        }`,
        className
      )}
    >
      {props.children}
    </button>
  )
}
