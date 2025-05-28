import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow mt-[72px]">{children}</main>
        <footer className="bg-gray-100 text-center text-xs py-4 text-gray-600">
          PU Consulting · San Pedro Garza García, N.L. · © {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  )
}
