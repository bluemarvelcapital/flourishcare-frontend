import "./globals.css"
import "./keyframes.css"
import "animate.css/animate.min.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { Metadata } from "next"
import { ClientProvider } from "@/components/ClientProvider"

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
                <ClientProvider>
                    <ToastContainer position={"top-center"} />
                    <Header />
                    <div className="overflow-hidden">{children}</div>
                    <Footer />
                </ClientProvider>
            </body>
        </html>
    )
}
