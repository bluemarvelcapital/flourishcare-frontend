import React from "react"
import classNames from "classnames"

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea: React.FC<TextAreaProps> = ({ ...props }) => {
  return (
    <textarea
      {...props}
      className={classNames(
        `bg-[#3A549112] md:p-[24px] p-[16px] text-[#4A4A4A]`,
        props.className
      )}
    />
  )
}
