"use client"
import { Avatar, Divider, Popover } from "antd"
import React, { useState } from "react"
import { useAuth, useLogout } from "@/hooks/useAuth"
import { PiCaretDownBold } from "react-icons/pi"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ProfilesDrawer } from "../subuser/ProfilesDrawer"

const paths = [
  { path: "/services", name: "Services" },
  { path: "/appointments", name: "Appointments" },
  { path: "/transactions", name: "Transactions" },
  { path: "/bookings", name: "Bookings" },
  { path: "/blog", name: "Blog" },
]

export const NavPopover = () => {
  const { auth } = useAuth()
  const { logout } = useLogout()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const togglePopover = () => setOpen(!open)

  return (
    <div>
      <Popover
        open={open}
        trigger={"click"}
        onOpenChange={togglePopover}
        arrow={false}
        content={
          <div className="min-w-[380px]">
            <ul className="flex flex-col">
              {paths.map(({ path, name }) => {
                const active = pathname.includes(path)
                return (
                  <Link
                    href={path}
                    key={path}
                    className={`${
                      active ? "bg-[#66ACDC0D] text-primary" : ""
                    } px-4 py-3`}
                    onClick={togglePopover}
                  >
                    <li>
                      <span className="text-[16px]">{name}</span>
                    </li>
                  </Link>
                )
              })}
              <Divider className="mb-0 mt-3" />

              {/* Add Subusers view */}
              <li>
                <ProfilesDrawer togglePopover={togglePopover} />
              </li>
              <Divider className="mt-0 mb-3" />
              <Link
                href={"/settings"}
                className={`${
                  pathname.includes("/settings")
                    ? "bg-[#66ACDC0D] text-primary"
                    : ""
                } px-4 py-3`}
                onClick={togglePopover}
              >
                <li>
                  <span className="text-[16px]">Settings</span>
                </li>
              </Link>
              <li
                onClick={logout}
                className="px-4 py-3 hover:bg-red-50 text-red-500 transition-colors cursor-pointer"
              >
                <span className="text-[16px]">Logout</span>
              </li>
            </ul>
          </div>
        }
      >
        <div className="flex gap-3 items-center cursor-pointer">
          <Avatar className="bg-success" src={auth.profilePicture} size={43}>
            <span className="font-semibold">
              {auth.firstname[0]}
              {auth.lastname[0]}
            </span>
          </Avatar>
          <p className="text-primary font-normal">{auth.firstname}</p>
          <PiCaretDownBold className="font-bold" />
        </div>
      </Popover>
    </div>
  )
}
