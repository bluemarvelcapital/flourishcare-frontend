import { Inter, Open_Sans } from "next/font/google"
import "./globals.css"
import "./keyframes.css"
import "animate.css/animate.min.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })
const open_Sans = Open_Sans({
  style: "normal",
  subsets: ["latin"],
  weight: ["300", "500", "400", "700"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-myriad-pro bg-baseLight`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
