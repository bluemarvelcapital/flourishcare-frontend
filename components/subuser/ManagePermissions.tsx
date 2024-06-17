"use client"
import { Divider, Switch } from "antd"
import React from "react"

export const ManagePermissions = () => {
  return (
    <div className="bg-white rounded-md w-full border-[1px] border-gray-200 transition-all p-[24px] md:py-[32px]">
      <h2 className="md:text-3xl text-lg font-medium mb-1">Permissions</h2>
      <div className="my-5">
        <div>
          <PermissionCard />
          <Divider />
          <PermissionCard />
        </div>
      </div>
    </div>
  )
}

const PermissionCard = () => {
  return (
    <div className="flex gap-10 justify-between">
      <div>
        <h3 className="text font-medium capitalize">Access to Schedule</h3>
        <p className="text text-sm text-[#6A6B6C]">
          Allow sub-profiles to view and manage appointment schedules for
          themselves or other family members.
        </p>
      </div>
      <div>
        <Switch />
      </div>
    </div>
  )
}
