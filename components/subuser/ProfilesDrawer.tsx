"use client"
import { UserI } from "@/interface/user"
import { Avatar, Button, Drawer, Tag } from "antd"
import React, { useState } from "react"
import { IoMdCloseCircle } from "react-icons/io"
import { users_test_data } from "@/constants/testData"
import Link from "next/link"
import { AddSubUser } from "./AddSubUser"
import { SuccessAntProvider } from "@/app/(protected)/SuccessAntProvider"

interface propsI {
  togglePopover: () => void
}

export const ProfilesDrawer = ({ ...props }: propsI) => {
  const [open, setOpen] = useState(false)
  const toggleDrawer = () => setOpen(!open)

  return (
    <SuccessAntProvider>
      <Drawer
        open={open}
        onClose={toggleDrawer}
        title={"Profiles"}
        closeIcon={<IoMdCloseCircle className="text-2xl text-success" />}
        placement="left"
        footer={
          <div>
            <AddSubUser />
          </div>
        }
      >
        <div className="space-y-5 mb-10">
          {users_test_data
            .filter((user) => user.role.name === "ACCOUNT_MANAGER")
            .slice(0, 5)
            .map((user, index) => {
              return (
                <div className="flex gap-3 items-center" key={index}>
                  <Avatar
                    src={user.profilePicture}
                    size={40}
                    className="text-white bg-success"
                  >
                    {user.firstname![0]}
                  </Avatar>
                  <div>
                    <p className="text-[16px] text-primary">
                      {user.firstname} {user.lastname}
                    </p>
                    <p className="">{user.email}</p>
                    <Tag color="success" className="bg-success text-white">
                      Account Manager
                    </Tag>
                  </div>
                </div>
              )
            })}
        </div>
        <div className="space-y-5">
          {users_test_data
            .filter((user) => user.role.name !== "ACCOUNT_MANAGER")
            .slice(0, 5)
            .map((user, index) => {
              return (
                <Link
                  href={`/profiles/${user._id}`}
                  key={index}
                  className="block"
                >
                  <div className="flex gap-3 items-center">
                    <Avatar
                      src={user.profilePicture}
                      size={40}
                      className="text-white bg-success"
                    >
                      {user.firstname![0]}
                    </Avatar>
                    <div>
                      <p className="text-[16px] text-primary">
                        {user.firstname} {user.lastname}
                      </p>
                      <p className="">{user.email}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
        </div>
      </Drawer>
      <p
        className="px-4 py-3 cursor-pointer mb-0"
        onClick={() => {
          toggleDrawer()
          props.togglePopover()
        }}
      >
        Profiles
      </p>
    </SuccessAntProvider>
  )
}
