import { Inter } from "next/font/google"
import "./globals.css"
import "./keyframes.css"
import "react-toastify/dist/ReactToastify.css"
import { AntProvider } from "@/components/AntProvider"
import ReduxProvider from "@/components/ReduxProvider"
import { ToastContainer } from "react-toastify"
import "animate.css/animate.min.css"

const inter = Inter({ subsets: ["latin"] })

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
