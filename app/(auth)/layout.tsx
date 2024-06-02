import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "react-toastify/dist/ReactToastify.css"
import { AntProvider } from "@/components/AntProvider"
import ReduxProvider from "@/components/ReduxProvider"
import { ToastContainer } from "react-toastify"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "All The looks",
  description: "All the looks",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <AntProvider primary_color="#04BD4B">{children}</AntProvider>
          <ToastContainer />
        </ReduxProvider>
      </body>
    </html>
  )
}
