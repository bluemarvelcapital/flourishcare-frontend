import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AntProvider } from "@/components/AntProvider"

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
        <AntProvider primary_color="#04BD4B">{children}</AntProvider>
      </body>
    </html>
  )
}
