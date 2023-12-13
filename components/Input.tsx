import React from "react"
import classNames from "classnames"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <input
      {...props}
      className={classNames(
        `bg-[#3A549112] md:p-[24px] p-[16px] text-[#4A4A4A]`,
        props.className
      )}
    />
  )
}
