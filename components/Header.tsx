"use client"
import React from "react"
import { Logo } from "./Logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button, Divider, Drawer } from "antd"
import { CloseCircleOutlined, MenuFoldOutlined } from "@ant-design/icons"
import { Button as MyButton } from "./Button"
import { useAuth } from "@/hooks/useAuth"
import { NavPopover } from "./user/NavPopover"

const paths = [
  { path: "/", name: "Home" },
  { path: "/about-us", name: "About Us" },
  { path: "/our-services", name: "Our Services" },
  { path: "/work-with-us", name: "Work With Us" },
  { path: "/our-home", name: "Our Homes" },
  // { path: "/blog", name: "Blog" },
  { path: "/faqs", name: "FAQs" },

  { path: "/contact-us", name: "Contact Us" },
]
export const Header = () => {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const { auth } = useAuth()
  return (
    <header className="flex justify-between items-center md:px-[60px] md:py-[24px] px-[16px] py-[10px] container_xl flex-wrap shadow-md">
      <Logo />
      <nav>
        <ul className="p-0 md:flex justifiy-between hidden items-center flex-wrap">
          {paths.map((item) => (
            <li key={item.path} className="mr-[40px]">
              <Link
                href={item.path}
                className={`text-[18px] p-[8px] hover:text-success hover:border-b-[6px] hover:border-b-success transition-all ${
                  pathname === item.path
                    ? "text-success border-b-[6px] border-b-success"
                    : "text-base"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          {auth.accessToken ? (
            <NavPopover />
          ) : (
            <>
              <li>
                <Divider
                  type="vertical"
                  style={{
                    height: "50px",
                    background: "#848484",
                    marginRight: "20px",
                  }}
                />
              </li>
              <li className="mr-5">
                <Link href="/login">Log In</Link>
              </li>
              <li>
                <Link href="/signup">
                  <MyButton>Get Started</MyButton>
                </Link>
              </li>
            </>
          )}
        </ul>

        <div className="md:hidden">
          <Button
            type="dashed"
            icon={<MenuFoldOutlined />}
            onClick={() => setOpen(true)}
          >
            Menu
          </Button>
          <Drawer
            open={open}
            onClose={() => setOpen(false)}
            placement="bottom"
            closeIcon={<CloseCircleOutlined />}
          >
            <ul className="p-0 flex flex-col gap-[24px] justifiy-between">
              {auth.accessToken ? (
                <NavPopover />
              ) : (
                <li className="flex items-center gap-5">
                  <div className="">
                    <Link href="/login">Log In</Link>
                  </div>
                  <div>
                    <Link href="/signup">
                      <MyButton>Get Started</MyButton>
                    </Link>
                  </div>
                </li>
              )}
              {paths.map((item, index) => (
                <li
                  key={item.path}
                  className="mr-[32px]"
                  onClick={() => setOpen(false)}
                >
                  <Link
                    href={item.path}
                    className={`text-[18px] hover:text-success ${
                      pathname === item.path ? "text-success" : "text-base"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Drawer>
        </div>
      </nav>
    </header>
  )
}
