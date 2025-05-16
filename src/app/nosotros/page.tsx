import type { Metadata } from "next";
import Nosotros from "@/components/NosotrosComponent";

export const metadata: Metadata = {
  title: "C&C Soluciones Legales - Nosotros",
  description:
    "C&C Soluciones Legales, liderado por la abogada Denise Campos. Estudio jurídico en Santa Fe y Paraná con un acompañamiento personalizado y estratégico que promueve su crecimiento y seguridad legal",
  metadataBase: new URL("https://www.cycsolucioneslegales.com.ar"),
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "C&C Soluciones Legales - Nosotros",
    description:
      "Equipo jurídico especializado con sede en Santa Fe y Paraná. Atención personalizada, principios éticos y compromiso con cada caso",
    url: "https://www.cycsolucioneslegales.com.ar/nosotros",
    type: "website",
    images: [
      {
        url: "/OpenGraphNosotros.png",
        width: 1200,
        height: 630,
        alt: "Abogada Denise Campos - Equipo C&C Soluciones Legales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/OpenGraphNosotros.png"],
  },
};

export default function Areas() {
  return <Nosotros />;
}
