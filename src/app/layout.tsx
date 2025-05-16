import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

// METADATOS PRINCIPALES
export const metadata: Metadata = {
  title: {
    default: "C&C Soluciones Legales",
    template: "%s | C&C",
  },
  description:
    "Brindamos asesoramiento legal integral a personas y empresas que buscan soluciones claras, eficientes y confiables. Atención en Santa Fe y Paraná",
  keywords: [
    "abogados laborales",
    "derecho laboral Argentina",
    "ART abogados",
    "accidentes laborales",
    "daños y perjuicios",
    "derecho familiar",
    "sucesiones",
    "asesoría legal empresarial",
    "defensa penal",
    "abogados Santa Fe",
    "abogados Paraná",
    "estudio jurídico Entre Ríos",
    "estudio jurídico Santa Fe",
  ],
  metadataBase: new URL("https://www.cycsolucioneslegales.com.ar"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="C&C Soluciones Legales"
        />
      </head>
      <body className={`${lora.variable}`}>
        <Header />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
