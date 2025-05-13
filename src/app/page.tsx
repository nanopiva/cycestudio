"use client";

import styles from "./page.module.css";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import CTA from "@/components/Cta";
import ScrollAnimation from "@/components/ScrollAnimation";

import heroImage from "../../public/tribunales.jpg";

export default function Landing() {
  useEffect(() => {
    const link = document.querySelector('a[href="#contacto"]');
    const section = document.querySelector("#contacto");

    const scrollToSection = (e: Event) => {
      e.preventDefault();
      section?.scrollIntoView({ behavior: "smooth" });
    };

    link?.addEventListener("click", scrollToSection);
    return () => link?.removeEventListener("click", scrollToSection);
  }, []);

  return (
    <div className={styles.body}>
      {/* Hero Section */}
      <section
        className={`${styles.heroContainer} ${styles.sectionWaveTransition}`}
      >
        <div className={styles.container}>
          <Hero
            imageSrc={heroImage}
            title="C&C Soluciones Legales"
            subtitle="Asesoramiento jurídico con dedicación personal en Santa Fe y Entre Ríos"
          />
        </div>
      </section>

      {/* Sección de Especialidades Jurídicas */}
      {/* Sección de Especialidades Jurídicas */}
      <section
        className={`${styles.whiteSection} ${styles.roundedSection} ${styles.smoothTransition}`}
      >
        <div className={styles.container}>
          <ScrollAnimation>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Nuestro terreno legal</h2>
              <div className={styles.goldDivider}></div>
              <p className={styles.sectionSubtitle}>
                Áreas de práctica donde brindamos asesoramiento especializado y
                representación legal
              </p>
            </div>
          </ScrollAnimation>

          <div className={styles.specialtiesGrid}>
            {/* Card 1 */}

            <div className={styles.specialtyCard}>
              <ScrollAnimation delay={200}>
                <div className={styles.specialtyContent}>
                  <div className={styles.specialtyIcon}>
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <h3 className={styles.specialtyTitle}>
                    Derecho laboral y ART
                  </h3>
                  <p className={styles.specialtyText}>
                    Asesoramiento a trabajadores y empleadores en todas las
                    áreas laborales.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Card 2 */}
            <div className={styles.specialtyCard}>
              <ScrollAnimation delay={150}>
                <div className={styles.specialtyContent}>
                  <div className={styles.specialtyIcon}>
                    <i className="fas fa-car-burst"></i>
                  </div>
                  <h3 className={styles.specialtyTitle}>Daños y accidentes</h3>
                  <p className={styles.specialtyText}>
                    Representación en casos de tránsito, reclamos por daños y
                    perjuicios.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Card 3 */}
            <div className={styles.specialtyCard}>
              <ScrollAnimation delay={100}>
                <div className={styles.specialtyContent}>
                  <div className={styles.specialtyIcon}>
                    <i className="fas fa-family"></i>
                  </div>
                  <h3 className={styles.specialtyTitle}>
                    Derecho familiar y sucesorio
                  </h3>
                  <p className={styles.specialtyText}>
                    Asesoramiento integral en cuestiones familiares, divorcios,
                    alimentos y sucesiones.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Card 4 */}
            <div className={styles.specialtyCard}>
              <ScrollAnimation delay={250}>
                <div className={styles.specialtyContent}>
                  <div className={styles.specialtyIcon}>
                    <i className="fas fa-building"></i>
                  </div>
                  <h3 className={styles.specialtyTitle}>
                    Asesoría empresarial
                  </h3>
                  <p className={styles.specialtyText}>
                    Constitución de sociedades, registros de marca y protección
                    legal de negocios.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Card 5 */}
            <div className={styles.specialtyCard}>
              <ScrollAnimation delay={300}>
                <div className={styles.specialtyContent}>
                  <div className={styles.specialtyIcon}>
                    <i className="fas fa-gavel"></i>
                  </div>
                  <h3 className={styles.specialtyTitle}>Defensa penal</h3>
                  <p className={styles.specialtyText}>
                    Representación en procesos penales y asesoramiento en
                    situaciones urgentes.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Card 6 */}
            <div className={styles.specialtyCard}>
              <ScrollAnimation delay={350}>
                <div className={styles.specialtyContent}>
                  <div className={styles.specialtyIcon}>
                    <i className="fas fa-file-contract"></i>
                  </div>
                  <h3 className={styles.specialtyTitle}>
                    Asesoría legal integral
                  </h3>
                  <p className={styles.specialtyText}>
                    Documentación legal, contratos y soluciones personalizadas
                    para cada necesidad.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className={styles.specialtiesCta}>
            <ScrollAnimation delay={400}>
              <a href="/areas" className={styles.primaryButton}>
                Ver todas las áreas de práctica
                <i className="fas fa-arrow-right"></i>
              </a>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Sección con Imagen y Texto */}
      <section
        className={`${styles.imageTextSection} ${styles.goldSectionTransition}`}
      >
        <div className={styles.imageHalf}></div>
        <div className={styles.textHalf}>
          <ScrollAnimation>
            <h2 className={styles.sectionTitle}>
              Conocer tus derechos es defenderlos
            </h2>
            <div className={styles.goldDivider}></div>
            <p className={styles.sectionText}>
              La protección efectiva de tus intereses comienza con comprensión
              clara de tus derechos. Nos dedicamos a explicarte cada aspecto
              legal en lenguaje accesible, sin tecnicismos innecesarios.
            </p>
            <p className={styles.sectionText}>
              Te asesoramos para que comprendas tus derechos y te acompañamos
              para hacerlos respetar.
            </p>
            <a href="/contacto" className={styles.linkButton}>
              Descubre cómo podemos ayudarte{" "}
              <i className="fas fa-arrow-right"></i>
            </a>
          </ScrollAnimation>
        </div>
      </section>

      {/* Sección de Enfoque Profesional */}
      <section
        className={`${styles.professionalApproach} ${styles.darkSectionTransition} ${styles.darkSmoothTransition}`}
      >
        <div className={styles.container}>
          <div className={styles.professionalContent}>
            <ScrollAnimation>
              <h2 className={styles.sectionTitle}>
                Derecho sin complicaciones: claridad desde el primer día
              </h2>
              <div className={styles.goldDivider}></div>
            </ScrollAnimation>
            <div className={styles.professionalColumns}>
              <ScrollAnimation delay={200}>
                <div className={styles.professionalText}>
                  <p className={styles.sectionText}>
                    Entendemos que enfrentarse a un tema legal puede ser
                    abrumador. Por eso nos ocupamos de que comprendas cada etapa
                    del proceso con explicaciones sencillas, sin perder el rigor
                    profesional.
                  </p>
                  <p className={styles.sectionText}>
                    No creemos en respuestas genéricas. Analizamos tu situación
                    particular para ofrecerte opciones reales, con plazos y
                    costos transparentes desde el inicio.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={400}>
                <div className={styles.professionalText}>
                  <p className={styles.sectionText}>
                    Nuestra prioridad es que tomes decisiones informadas, con la
                    tranquilidad de contar con representación jurídica
                    experimentada.
                  </p>
                  <p className={styles.sectionText}>
                    Como profesionales del derecho, asumimos tu caso con
                    seriedad y dedicación absoluta. Te mantenemos informado en
                    cada etapa decisiva y estamos disponibles para responder tus
                    consultas.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.socialTipsSection} ${styles.paperSectionTransition} ${styles.smoothTransition}`}
      >
        <div className={styles.container}>
          <ScrollAnimation>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                ¿Sabías que tus dudas legales tienen respuesta?
              </h2>
              <div className={styles.goldDivider}></div>
              <p className={styles.sectionSubtitle}>
                En nuestras redes sociales resolvemos preguntas frecuentes en
                formato claro y accesible. Estas son solo algunas de las muchas
                consultas que respondemos regularmente:
              </p>
            </div>
          </ScrollAnimation>

          <div className={styles.tipsGrid}>
            <ScrollAnimation delay={100}>
              <div className={styles.tipCard}>
                <div className={styles.tipIcon}>
                  <i className="fas fa-car-crash"></i>
                </div>
                <h3 className={styles.tipTitle}>
                  Sufrí un accidente laboral, ¿ahora qué hago?
                </h3>
                <p className={styles.tipText}>
                  La ART tiene la obligación de cubrir tus gastos, salario e
                  indemnización.
                </p>
                <a
                  href="https://www.instagram.com/reel/C7AvgSfut9g/?igsh=MTM3OWpoOGFza2U2ZQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.tipLink}
                >
                  Ver video explicativo{" "}
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className={styles.tipCard}>
                <div className={styles.tipIcon}>
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 className={styles.tipTitle}>
                  Soy Uber. ¿El seguro me cubre en caso de accidente?
                </h3>
                <p className={styles.tipText}>
                  El seguro común y corriente no te cubre. Para estar asegurado
                  en caso de accidentes debes contratar un seguro comercial.
                </p>
                <a
                  href="https://www.instagram.com/reel/DGjj-7puvIq/?igsh=MWN4Nm16bDRpY2dlMQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.tipLink}
                >
                  Ver video explicativo{" "}
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className={styles.tipCard}>
                <div className={styles.tipIcon}>
                  <i className="fas fa-home-heart"></i>
                </div>
                <h3 className={styles.tipTitle}>
                  ¿Las compañías aseguradoras pagan más cuando tenes abogado?
                </h3>
                <p className={styles.tipText}>
                  Las aseguradoras ofertan siempre el monto más bajo posible. En
                  la mayoría de los casos, asesorarte con un abogado mejorará
                  significativamente sus propuestas.
                </p>
                <a
                  href="https://www.instagram.com/reel/DElgPDbuYkh/?igsh=dDZwdDMxNXJlZnpr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.tipLink}
                >
                  Ver video explicativo{" "}
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={400}>
            <div className={styles.socialCta}>
              <p className={styles.socialText}>
                Resolvemos muchas más dudas legales cada semana en nuestra
                cuenta de Instagram:
              </p>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.instagram.com/cyc.solucioneslegales/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                >
                  <i className="fab fa-instagram"></i> @C&CSolucionesLegales
                </a>
              </div>
              <p className={styles.socialInvitation}>
                ¡Seguinos para no perderte ninguna de nuestras respuestas a tus
                inquietudes legales!
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Final */}
      <ScrollAnimation>
        <CTA
          title="¿Necesitas asesoramiento legal personalizado?"
          description="Agenda una consulta inicial para evaluar tu caso"
          buttonText="Contactar ahora"
        />
      </ScrollAnimation>
    </div>
  );
}
