import React from "react"
import classNames from "classnames"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
}

export const Button: React.FC<Props> = ({
  className,
  variant,
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(
        `md:px-[56px] px-[20px] md:py-[16px] py-[10px] rounded-[8px] text-[#fff] inline-block ${
          variant === "primary"
            ? "bg-[#04BD4B]"
            : disabled === true
            ? "bg-[#E5E5E5] cursor-not-allowed"
            : "bg-[#04BD4B]"
        }`,
        className
      )}
    >
      {props.children}
    </button>
  )
}
