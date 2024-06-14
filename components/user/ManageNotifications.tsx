"use client"
import { useAuth } from "@/hooks/useAuth"
import { PreferenceI, UserPreferenceI } from "@/interface/preference"
import {
  useGetPreferencesQuery,
  useGetUserPreferencesQuery,
  useUpdateUserPreferenceMutation,
} from "@/services/preference.service"
import { Divider, Switch } from "antd"
import React, { useState } from "react"
import { Loader } from "../Loader"
import { useToastify } from "@/hooks/useToastify"
import { LoadingOutlined } from "@ant-design/icons"

export const ManageNotifications = () => {
  const { auth } = useAuth()
  const { data, isLoading } = useGetUserPreferencesQuery({
    accessToken: auth.accessToken,
  })
  const { data: preferences, isLoading: loadingPrefs } = useGetPreferencesQuery(
    {
      accessToken: auth.accessToken,
    }
  )
  return (
    <div className="bg-white rounded-md w-full border-[1px] border-gray-200 transition-all p-[24px] md:py-[32px]">
      <h2 className="md:text-3xl text-lg font-medium mb-1">
        Manage Notifications
      </h2>
      <div className="my-5">
        {isLoading || loadingPrefs ? (
          <Loader name="preferences" />
        ) : (
          <div>
            {preferences?.map((pref, index) => {
              const userPref = data?.find(
                (userPref) => pref.id === userPref.preference.id
              )
              return (
                <>
                  <PreferenceCard
                    pref={pref}
                    key={pref.id}
                    userPref={userPref}
                  />
                  {index !== preferences?.length - 1 && <Divider />}
                </>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

interface PrefCardProps {
  pref: PreferenceI
  userPref?: UserPreferenceI
}

const PreferenceCard: React.FC<PrefCardProps> = ({ pref, userPref }) => {
  const { auth } = useAuth()
  const [mutate, { isLoading }] = useUpdateUserPreferenceMutation()
  const active = userPref ? userPref.status === "ACTIVE" : false
  const { refetch } = useGetUserPreferencesQuery({
    accessToken: auth.accessToken,
  })
  const { errorToast, successToast } = useToastify()
  const updateUserPreference = async (isActive: boolean) => {
    try {
      const response = await mutate({
        accessToken: auth.accessToken,
        status: isActive ? "ACTIVE" : "INACTIVE",
        preferenceId: pref.id,
      }).unwrap()
      refetch()
      successToast("Preference updated successful")
    } catch (error: any) {
      errorToast(error?.data?.message || error?.message || "An Error Occured")
    }
  }
  return (
    <div className="flex gap-10 justify-between">
      <div>
        <h3 className="text-lg font-medium capitalize">{pref.name}</h3>
        <p className="text text-[#6A6B6C]">{pref.description}</p>
      </div>
      <div>
        {isLoading ? (
          <LoadingOutlined />
        ) : (
          <Switch value={active} onChange={updateUserPreference} />
        )}
      </div>
    </div>
  )
}
