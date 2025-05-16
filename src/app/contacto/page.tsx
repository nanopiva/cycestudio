import type { Metadata } from "next";
import Contacto from "@/components/ContactoComponent";

export const metadata: Metadata = {
  title: "C&C Soluciones Legales - Contacto",
  description:
    "Atención presencial en Santa Fe y Paraná, o virtual para todo Argentina. Respuestas en menos de 24 horas",
  metadataBase: new URL("https://www.cycsolucioneslegales.com.ar"),
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title:
      "Contacta a nuestros abogados especialistas | C&C Soluciones Legales",
    description:
      "Oficinas en Santa Fe y Paraná. WhatsApp: +54 9 3425 92-3017 / +54 9 3435 02-8426 | Email: solucioneslegalescyc@gmail.com | Consultas virtuales disponibles",
    url: "https://www.cycsolucioneslegales.com.ar/contacto",
    type: "website",
    images: [
      {
        url: "/OpenGraphContacto.png",
        width: 1200,
        height: 630,
        alt: "Contacto C&C Soluciones Legales - Oficinas en Santa Fe y Paraná",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/OpenGraphContacto.png"],
  },
};
export default function Areas() {
  return <Contacto />;
}
