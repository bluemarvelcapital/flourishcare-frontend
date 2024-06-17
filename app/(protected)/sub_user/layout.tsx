import React from "react"
import SubUserContainer from "@/components/subuser/SubUserContainer"

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SubUserContainer>{children}</SubUserContainer>
    </div>
  )
}

export default SettingsLayout
