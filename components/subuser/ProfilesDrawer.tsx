"use client"
import { Avatar, Drawer, Tag } from "antd"
import React, { useState } from "react"
import { IoMdCloseCircle } from "react-icons/io"
import { users_test_data } from "@/constants/testData"
import Link from "next/link"
import { AddSubUser } from "./AddSubUser"
import { SuccessAntProvider } from "@/app/(protected)/SuccessAntProvider"
import { useAuth } from "@/hooks/useAuth"
import { useGetClientsQuery } from "@/services/profiles.service"
import { Loader } from "../Loader"

interface propsI {
  togglePopover: () => void
}

export const ProfilesDrawer = ({ ...props }: propsI) => {
  const [open, setOpen] = useState(false)
  const toggleDrawer = () => setOpen(!open)
  const { auth } = useAuth()
  const { data, isLoading } = useGetClientsQuery({
    accessToken: auth.accessToken,
  })

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
          <div className="flex gap-3 items-center">
            <Avatar
              src={auth.profilePicture}
              size={40}
              className="text-white bg-success"
            >
              {auth.firstname![0]}
              {auth.lastname![0]}
            </Avatar>
            <div>
              <p className="text-[16px] text-primary">
                {auth.firstname} {auth.lastname}
              </p>
              <p className="">{auth.email}</p>
              <Tag color="success" className="bg-success text-white">
                Account Manager
              </Tag>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          {isLoading ? (
            <Loader name="clients" />
          ) : (
            <>
              {data?.map((client, index) => {
                return (
                  <Link
                    href={`/sub_user/${client.user.id}/appointments`}
                    key={index}
                    className="block"
                  >
                    <div className="flex gap-3 items-center">
                      <Avatar
                        src={client.user.profilePicture}
                        size={40}
                        className="text-white bg-success text-sm"
                      >
                        {client.user.firstname![0]}
                        {client.user.lastname![0]}
                      </Avatar>
                      <div>
                        <p className="text-[16px] text-primary">
                          {client.user.firstname} {client.user.lastname}
                        </p>
                        <p className="">{client.user.email}</p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </>
          )}
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
