// app/layout.tsx
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular y Bold
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={montserrat.variable}>
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="e4o1fhgJCysu2DQLONjF4LSsZDTIEFF6VW0mVLT1Jhw"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow mt-[72px]">{children}</main>
        <footer className="bg-gray-100 text-center text-xs py-4 text-gray-600">
          PU Consulting · San Pedro Garza García, N.L. · ©{" "}
          {new Date().getFullYear()}
          <p className="text-gray-600 text-xs">
            Desarrollado por{" "}
            <a
              href="https://agsolutions.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline font-medium"
            >
              AG Solution Dev
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
