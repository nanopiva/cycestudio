import type { Metadata } from "next";
import Landing from "@/components/HomeComponent";

export const metadata: Metadata = {
  title: "C&C Soluciones Legales - Inicio",
  description:
    "Asesoramiento jurídico integral en Santa Fe y Paraná. Defendemos tus derechos laborales, accidentes de trabajo y brindamos soluciones legales personalizadas",
  metadataBase: new URL("https://www.cycsolucioneslegales.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "C&C Soluciones Legales - Asesoramiento jurídico de alta calidad",
    description:
      "Estudio jurídico especializado en Derecho Laboral, ART y representación integral para particulares y empresas",
    url: "https://www.cycsolucioneslegales.com.ar",
    type: "website",
    images: [
      {
        url: "/OpenGraphInicio.png",
        width: 1200,
        height: 630,
        alt: "C&C Soluciones Legales - Asesoramiento jurídico de alta calidad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/OpenGraphInicio.png"],
  },
};
export default function Home() {
  return <Landing />;
}
