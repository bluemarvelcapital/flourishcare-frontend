import { ManageNotifications } from "@/components/user/ManageNotifications"
import React from "react"

export const metadata = {
  title: "Settings - Manage Notifications",
}

const NotificationsSettings = () => {
  return (
    <div className="">
      <ManageNotifications />
    </div>
  )
}

export default NotificationsSettings
