"use client"
import React from "react"
import { Logo } from "./Logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button, Drawer } from "antd"
import { CloseCircleOutlined, MenuFoldOutlined } from "@ant-design/icons"

export const Header = () => {
  const paths = [
    { path: "/", name: "Home" },
    { path: "/about-us", name: "About Us" },
    { path: "/our-services", name: "Our Services" },
    { path: "/contact-us", name: "Contact Us" },
  ]
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  return (
    <header className="flex justify-between items-center md:px-[60px] md:py-[24px] px-[16px] py-[10px] container_xl">
      <Logo />
      <nav>
        <ul className="p-0 md:flex justifiy-between hidden">
          {paths.map((item) => (
            <li key={item.path} className="mr-[32px]">
              <Link
                href={item.path}
                className={`text-[18px] hover:text-primary ${
                  pathname === item.path ? "text-primary" : "text-base"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
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
              {paths.map((item) => (
                <li
                  key={item.path}
                  className="mr-[32px]"
                  onClick={() => setOpen(false)}
                >
                  <Link
                    href={item.path}
                    className={`text-[18px] hover:text-primary ${
                      pathname === item.path ? "text-primary" : "text-base"
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
