import "./globals.css"
import "./keyframes.css"
import "animate.css/animate.min.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { Metadata } from "next"
import { SuccessAntProvider } from "./SuccessAntProvider"
import ReduxProvider from "@/components/ReduxProvider"
import { PrivateRoutes } from "@/components/PrivateRoutes"

export const metadata: Metadata = {
  title: "Flourish Advanced Care",
  description:
    "Flourish Advanced Care is rooted in the mission to deliver care with integrity and compassion. Our team is carefully selected and trained to match the needs of our clients with the utmost respect and professionalism.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-myriad-pro bg-baseLight`}>
        <ReduxProvider>
          <PrivateRoutes>
            <Header />
            <ToastContainer position={"top-center"} />
            <div className="overflow-hidden">
              <SuccessAntProvider>{children}</SuccessAntProvider>
            </div>
          </PrivateRoutes>
        </ReduxProvider>
      </body>
    </html>
  )
}