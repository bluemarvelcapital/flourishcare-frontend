"use client"
import { Avatar, Collapse, Divider, Popover } from "antd"
import React from "react"
import { useAuth, useLogout } from "@/hooks/useAuth"
import { PiCaretDownBold } from "react-icons/pi"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { CollapseProps } from "antd"
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons"

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

  // Add Subusers view
  const profiles: CollapseProps["items"] = [
    {
      key: "1",
      label: <p className="">Profiles</p>,

      children: (
        <Avatar.Group
          size="large"
          maxCount={3}
          maxStyle={{ background: "#66ACDC" }}
        >
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
          <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
          <Avatar
            style={{ backgroundColor: "#1677ff" }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      ),
    },
  ]
  return (
    <div>
      <Popover
        trigger={"click"}
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
                <Collapse ghost size="large" items={profiles} />
              </li>
              <Divider className="mt-0 mb-3" />
              <Link
                href={"/settings"}
                className={`${
                  pathname.includes("/settings")
                    ? "bg-[#66ACDC0D] text-primary"
                    : ""
                } px-4 py-3`}
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
