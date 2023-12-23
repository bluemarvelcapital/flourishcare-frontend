import { Inter, Open_Sans } from "next/font/google"
import "./globals.css"
import "./keyframes.css"
import "animate.css/animate.min.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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
                <ToastContainer position={'top-center'} />
                {children}
                <Footer />
            </body>
        </html>
    )
}
