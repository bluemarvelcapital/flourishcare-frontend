import { Header } from "@/components/Header"
import { Metadata } from "next"
import { PrivateRoutes } from "@/components/PrivateRoutes"
import { Lato } from "next/font/google"
import { InPageFooter } from "@/components/user/InPageFooter"

export const metadata: Metadata = {
  title: "Flourish Advanced Care",
  description:
    "Flourish Advanced Care is rooted in the mission to deliver care with integrity and compassion. Our team is carefully selected and trained to match the needs of our clients with the utmost respect and professionalism.",
}

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${lato.className} bg-baseLight`}>
      <PrivateRoutes>
        <Header />
        <div className="overflow-hidden">{children} </div>
        <InPageFooter />
      </PrivateRoutes>
    </div>
  )
}
