import { Container } from "@/components/Container"
import { PageTitle } from "@/components/PageTitle"
import { SettingsContainer } from "@/components/user/SettingsContainer"
import React from "react"

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const paths = [
    {
      route: "/settings",
      name: "Personal Details",
    },
    {
      route: "/settings/notifications",
      name: "Manage Notifications",
    },
    {
      route: "/settings/password",
      name: "Change Password",
    },
    {
      route: "/settings/support",
      name: "Help & Support",
    },
  ]
  return (
    <div>
      <Container>
        <PageTitle title="Settings" />
        <div>
          <SettingsContainer paths={paths}>{children}</SettingsContainer>
        </div>
      </Container>
    </div>
  )
}

export default SettingsLayout
