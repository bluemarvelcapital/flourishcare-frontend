import "./globals.css"
import "./keyframes.css"
import "animate.css/animate.min.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Flourish Advanced Care",
  description:
    "Flourished Advanced Care is rooted in the mission to deliver care with integrity and compassion. Our team is carefully selected and trained to match the needs of our clients with the utmost respect and professionalism.",
}

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
