"use client"
import { FormInstance, Image } from "antd"
import React, { useState } from "react"
import { BiCloudUpload } from "react-icons/bi"

interface propsI {
  form: FormInstance<any>
  input_name: string
}

export const UploadImage = ({ ...props }: propsI) => {
  const [image, setImage] = useState<string>("")
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]
    const file_url = URL.createObjectURL(file)
    setImage(file_url)
    props.form.setFieldValue(props.input_name, file)
  }
  return (
    <div>
      <div className="flex gap-5">
        {image && (
          <div className="w-[50%] max-h-[10rem] relative">
            <Image
              src={image}
              alt=""
              className="object-cover rounded-md"
              style={{ width: "100%", maxHeight: "10.5rem" }}
              width={"100%"}
            />
          </div>
        )}
        <label
          htmlFor={props.input_name}
          className="p-5 md:py-10 border-dashed border-[1px] border-gray-300 rounded-md block cursor-pointer w-full"
        >
          <div className="flex items-center justify-center flex-col text-[16px]">
            <BiCloudUpload className="text-3xl text-center text-success mb-2" />
            <p>
              <span className="text-success">Upload a file</span> or drag and
              drop
            </p>
            <div className="text-gray-400">PNG, JPG, up to 5MB</div>
          </div>
        </label>
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        accept=".jpg, .png"
        id={props.input_name}
        onChange={onChange}
      />
    </div>
  )
}
