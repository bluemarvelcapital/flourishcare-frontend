import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { AntProvider } from "@/components/AntProvider"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`font-myriad-pro bg-baseLight`}>
      <Header />
      <div className="overflow-hidden">
        <AntProvider>{children}</AntProvider>
      </div>
      <Footer />
    </div>
  )
}
