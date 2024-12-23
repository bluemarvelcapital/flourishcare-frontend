"use client";
import React, { ReactNode, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useGetUserDataQuery } from "@/services/auth.service";
import { useRouter } from "next/navigation";

export const PrivateRoutes = ({ children }: { children: ReactNode }) => {
  const { auth, setAuth } = useAuth();
  const { accessToken } = auth;
  const { isError } = useGetUserDataQuery({ accessToken });
  const router = useRouter();
  useEffect(() => {
    if (!accessToken) {
      return router.replace("/login");
    }
    if (isError) {
      setAuth({
        accessToken: "",
        roleId: "",
        role: "",
        email: "",
        refreshToken: "",
        firstname: "",
        lastname: "",
        profilePicture: "",
      });
      return router.replace("/login");
    }
  }, [isError, accessToken, router, setAuth]);

  return <div>{children}</div>;
};
