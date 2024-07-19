import { Inter } from "next/font/google"
import "./globals.css"
import "./keyframes.css"
import "react-toastify/dist/ReactToastify.css"
import { AntProvider } from "@/components/AntProvider"
import ReduxProvider from "@/components/ReduxProvider"
import { ToastContainer } from "react-toastify"
import "animate.css/animate.min.css"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Flourish Advanced Care",
  description:
    "Flourish Advanced Care is rooted in the mission to deliver care with integrity and compassion. Our team is carefully selected and trained to match the needs of our clients with the utmost respect and professionalism.",
  openGraph: {
    title: "Flourish Advanced Care",
    siteName: "Flourish Advanced Care",
    description:
      "Flourish Advanced Care is rooted in the mission to deliver care with integrity and compassion. Our team is carefully selected and trained to match the needs of our clients with the utmost respect and professionalism.",

    images: [
      {
        url: "/opengraph-image.png",
      },
    ],
  },
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
