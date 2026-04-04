import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "../components/Footer";
import { getSiteUrl } from "@/lib/siteUrl";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "MathEdu | Formación de Matemáticas para Docentes",
    template: "%s | MathEdu",
  },
  description: "Formación de matemáticas para profesores de Educación Infantil y Primaria.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MathEdu | Formación de Matemáticas para Docentes",
    description: "Formación de matemáticas para profesores de Educación Infantil y Primaria.",
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "MathEdu",
  },
  twitter: {
    card: "summary_large_image",
    title: "MathEdu | Formación de Matemáticas para Docentes",
    description: "Formación de matemáticas para profesores de Educación Infantil y Primaria.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content" className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
