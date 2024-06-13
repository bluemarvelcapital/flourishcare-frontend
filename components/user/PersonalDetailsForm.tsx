"use client"
import { useAuth } from "@/hooks/useAuth"
import { useGetUserDataQuery } from "@/services/auth.service"
import { Button, Form, Input } from "antd"
import { useForm } from "antd/es/form/Form"
import React from "react"
import { Loader } from "../Loader"
import { UpdateProfileI } from "@/interface/user"
import { useToastify } from "@/hooks/useToastify"
import { useUpdateUserMutation } from "@/services/user.service"
import { LoadingOutlined } from "@ant-design/icons"

export const PersonalDetailsForm = () => {
  const [form] = useForm<UpdateProfileI>()
  const { auth } = useAuth()
  const { data, isLoading, refetch } = useGetUserDataQuery({
    accessToken: auth.accessToken,
  })
  const [mutate, { isLoading: updating }] = useUpdateUserMutation()
  const { errorToast, successToast } = useToastify()
  const onUpdateProfile = async () => {
    try {
      const response = await mutate({
        ...form.getFieldsValue(),
        accessToken: auth.accessToken,
        gender: form.getFieldsValue().gender.toUpperCase(),
      }).unwrap()
      refetch()
      successToast("Profile update successful")
    } catch (error: any) {
      errorToast(error?.data?.message || error?.message || "An Error Occured")
    }
  }

  return (
    <div className="bg-white rounded-md w-full border-[1px] border-gray-200 transition-all p-[24px] md:py-[32px]">
      <h2 className="md:text-3xl text-lg font-medium mb-1">Personal Details</h2>
      <p className="text-[#ACACAC]">Edit your personal details below</p>
      {isLoading ? (
        <Loader name="personal details" />
      ) : (
        <div className="mt-5">
          <Form
            form={form}
            layout="vertical"
            initialValues={{
              gender: data?.gender,
              address: data?.address,
              phone: data?.phone,
              age: data?.age,
            }}
            onFinish={onUpdateProfile}
            disabled={updating}
          >
            <div className="grid grid-cols-2 gap-5">
              <Form.Item
                // name={"firstname"}
                label="First Name"
                rules={[{ required: true }]}
              >
                <Input
                  className="w-full"
                  size="large"
                  placeholder="First name"
                  value={auth.firstname}
                />
              </Form.Item>
              <Form.Item
                // name={"lastname"}
                label="Last Name"
                rules={[{ required: true }]}
              >
                <Input
                  className="w-full"
                  size="large"
                  placeholder="Last name"
                  value={auth.lastname}
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <Form.Item name={"age"} label="Age" rules={[{ required: true }]}>
                <Input className="w-full" size="large" />
              </Form.Item>
              <Form.Item name={"gender"} label="Gender">
                <Input className="w-full" size="large" />
              </Form.Item>
            </div>
            <Form.Item
              name={"phone"}
              label="Phone number"
              rules={[{ required: true }]}
            >
              <Input className="w-full" size="large" />
            </Form.Item>
            <Form.Item
              name={"address"}
              label="Address/Location"
              rules={[{ required: true }]}
            >
              <Input className="w-full" size="large" />
            </Form.Item>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="bg-success w-full"
              disabled={updating}
            >
              {updating ? <LoadingOutlined /> : "Save"}
            </Button>
          </Form>
        </div>
      )}
    </div>
  )
}
