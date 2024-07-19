"use client"
import { Container } from "@/components/Container"
import { PageTitle } from "@/components/PageTitle"
import { SettingsContainer } from "@/components/user/SettingsContainer"
import React from "react"
import { useParams, usePathname } from "next/navigation"

const SubUserContainer = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const lastPath = pathname.split("/")[pathname.split("/").length - 1]
  const { user_id } = useParams()
  const paths = [
    {
      route: `/sub_user/${user_id}/appointments`,
      name: "Appointments",
    },
    {
      route: `/sub_user/${user_id}/medical-records`,
      name: "Medical Records",
    },
    // {
    //   route: `/sub_user/${user_id}/permissions`,
    //   name: "Permissions",
    // },
    // {
    //   route: `/sub_user/${user_id}/notifications`,
    //   name: "Manage Notifications",
    // },
  ]
  const title = paths.find(({ route }) => pathname === route)?.name as string
  return (
    <div>
      <Container>
        <PageTitle title={title || lastPath.replace("-", " ")} />
        <div>
          <SettingsContainer paths={paths}>{children}</SettingsContainer>
        </div>
      </Container>
    </div>
  )
}

export default SubUserContainer
