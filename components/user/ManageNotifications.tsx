"use client"
import { Divider, Switch } from "antd"
import React from "react"

export const ManageNotifications = () => {
  return (
    <div className="bg-white rounded-md w-full border-[1px] border-gray-200 transition-all p-[24px] md:py-[32px]">
      <h2 className="md:text-3xl text-lg font-medium mb-1">
        Manage Notifications
      </h2>
      <div className="my-5">
        <div className="flex gap-10 justify-between">
          <div>
            <h3 className="text-lg font-medium">Email Notification</h3>
            <p className="text text-[#6A6B6C]">
              This will be sent to mic*******an@gmail.com when you’re online or
              offline
            </p>
          </div>
          <div>
            <Switch defaultChecked />
          </div>
        </div>
        <Divider />
        <div className="flex gap-10 justify-between">
          <div>
            <h3 className="text-lg font-medium">Push Notification</h3>
            <p className="text text-[#6A6B6C]">
              This will be sent to your phone when you’re online or offline
            </p>
          </div>
          <div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>
    </div>
  )
}
