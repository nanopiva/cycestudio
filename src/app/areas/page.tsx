import type { Metadata } from "next";
import AreasEspecialidad from "@/components/AreasComponent";

export const metadata: Metadata = {
  title: "C&C Soluciones Legales - Áreas de práctica",
  description:
    "Especialistas en Derecho Laboral, ART, Daños, Familiar y Penal. Soluciones legales integrales en Santa Fe y Paraná para particulares y empresas",
  metadataBase: new URL("https://www.cycsolucioneslegales.com.ar"),
  alternates: {
    canonical: "/areas",
  },
  openGraph: {
    title: "Nuestras áreas de práctica | C&C Soluciones Legales",
    description:
      "Derecho Laboral, ART, Daños, Familiar, Penal y Empresarial - Soluciones integrales en Santa Fe y Paraná",
    url: "https://www.cycsolucioneslegales.com.ar/areas",
    type: "website",
    images: [
      {
        url: "/OpenGraphAreas.png",
        width: 1200,
        height: 630,
        alt: "C&C Soluciones Legales - Áreas de práctica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/OpenGraphAreas.png"],
  },
};
export default function Areas() {
  return <AreasEspecialidad />;
}
