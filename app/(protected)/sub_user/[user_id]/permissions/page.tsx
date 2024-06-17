import { ManagePermissions } from "@/components/subuser/ManagePermissions"
import React from "react"

export const metadata = {
  title: "Permissions - Sub User",
}

const PermissionsSettings = () => {
  return (
    <div className="">
      <ManagePermissions />
    </div>
  )
}

export default PermissionsSettings
