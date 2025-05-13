"use client";

import styles from "./page.module.css";
import Hero from "@/components/Hero";
import heroNosotros from "../../../public/heroNosotros.png";
import CTA from "@/components/Cta";

export default function Nosotros() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroContainer}>
        <div className={styles.container}>
          <Hero
            imageSrc={heroNosotros}
            title="Sobre nosotros"
            subtitle="Creemos en el derecho como herramienta de justicia, no como barrera técnica"
          />
        </div>
      </section>

      {/* Contenido Principal */}
      <main className={styles.mainContent}>
        {/* Sección de Introducción */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Nuestra esencia</h2>
          <div className={styles.goldDivider}></div>
          <div className={styles.textContent}>
            <p>
              En <strong>C&C Soluciones Legales</strong>, hemos desarrollado una
              práctica jurídica donde cada caso recibe la atención meticulosa
              que requiere, combinando rigor profesional con comprensión de las
              necesidades individuales.
            </p>
            <p>
              Creemos en establecer relaciones basadas en la claridad y el
              respeto mutuo, ofreciendo no solo soluciones legales efectivas
              sino también un acompañamiento genuino durante todo el proceso.
            </p>
          </div>
        </section>

        {/* Sección de Compromiso */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Nuestro compromiso</h2>
          <div className={styles.goldDivider}></div>
          <div className={styles.textContent}>
            <p>
              Nos dedicamos a brindar asesoramiento legal integral a personas y
              empresas que buscan soluciones claras, eficientes y confiables.
              Creemos en construir relaciones de confianza a largo plazo,
              basadas en el compromiso, la transparencia y la excelencia
              profesional.
            </p>
            <p className={styles.highlightedText}>
              Nuestra misión es ofrecer asesoramiento jurídico de alta calidad,
              orientado a las necesidades reales de nuestros clientes,
              garantizando un acompañamiento personalizado y estratégico que
              promueva su crecimiento y seguridad legal.
            </p>
            <p>
              Aspiramos a ser un estudio jurídico de referencia en las
              provincias de Santa Fe y Entre Ríos, reconocido por la confianza
              de nuestros clientes, nuestra capacitación permanente y nuestra
              capacidad para brindar respuestas rápidas y eficaces en un mundo
              en constante cambio.
            </p>
          </div>
        </section>

        {/* Sección de Valores - Versión mejorada */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Principios rectores</h2>
          <div className={styles.goldDivider}></div>
          <div className={styles.principlesContainer}>
            <div className={styles.principle}>
              <h3 className={styles.principleTitle}>Atención personalizada</h3>
              <p className={styles.principleDescription}>
                Adaptamos nuestro servicio a las circunstancias específicas de
                cada cliente, dedicando el tiempo necesario para comprender en
                profundidad cada situación particular.
              </p>
            </div>

            <div className={styles.principleDivider}></div>

            <div className={styles.principle}>
              <h3 className={styles.principleTitle}>Capacitación constante</h3>
              <p className={styles.principleDescription}>
                Mantenemos un compromiso firme con la formación continua,
                asegurando que nuestro asesoramiento refleje siempre los últimos
                desarrollos en el ámbito legal.
              </p>
            </div>

            <div className={styles.principleDivider}></div>

            <div className={styles.principle}>
              <h3 className={styles.principleTitle}>Respuesta oportuna</h3>
              <p className={styles.principleDescription}>
                Entendemos la importancia de actuar con celeridad en asuntos
                legales, por lo que priorizamos la eficiencia sin comprometer la
                calidad de nuestro trabajo.
              </p>
            </div>

            <div className={styles.principleDivider}></div>

            <div className={styles.principle}>
              <h3 className={styles.principleTitle}>Compromiso profesional</h3>
              <p className={styles.principleDescription}>
                Abordamos cada caso con seriedad y dedicación, asumiendo la
                responsabilidad que conlleva la defensa de los intereses de
                nuestros clientes.
              </p>
            </div>

            <div className={styles.principleDivider}></div>

            <div className={styles.principle}>
              <h3 className={styles.principleTitle}>Discreción absoluta</h3>
              <p className={styles.principleDescription}>
                La confidencialidad es un principio inviolable en nuestra
                práctica. En C&C es un valor esencial y tomamos todas las
                medidas para proteger la información de nuestros clientes.
              </p>
            </div>
          </div>
        </section>
      </main>

      <CTA
        title="¿Buscas asesoramiento jurídico con estas características?"
        description="Asesoramiento jurídico claro y confiable"
        buttonText="Hablemos sobre tu situación"
      />
    </div>
  );
}
