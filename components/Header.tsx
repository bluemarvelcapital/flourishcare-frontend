"use client"
import React from "react"
import { Logo } from "./Logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button, Drawer } from "antd"
import { CloseCircleOutlined, MenuFoldOutlined } from "@ant-design/icons"
import { Button as MyButton } from "./Button"

const paths = [
  { path: "/", name: "Home" },
  { path: "/about-us", name: "About Us" },
  { path: "/our-services", name: "Our Services" },
  { path: "/work-with-us", name: "Work With Us" },
  { path: "/our-home", name: "Our Home" },
  // { path: "/contact-us", name: "Contact Us" },
]
export const Header = () => {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  return (
    <header className="flex justify-between items-center md:px-[60px] md:py-[24px] px-[16px] py-[10px] container_xl">
      <Logo />
      <nav>
        <ul className="p-0 md:flex justifiy-between hidden items-center">
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
          <li>
            <Link href="/contact-us">
              <MyButton>Contact Us</MyButton>
            </Link>
          </li>
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
              <li>
                <Link href="/contact-us">
                  <MyButton>Contact Us</MyButton>
                </Link>
              </li>
            </ul>
          </Drawer>
        </div>
      </nav>
    </header>
  )
}
