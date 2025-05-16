"use client";

import styles from "../styles/HomeComponent.module.css";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import CTA from "@/components/Cta";
import { motion } from "framer-motion";
import heroImage from "../../public/tribunales.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

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

      {/* Especialidades Jurídicas */}
      <section
        className={`${styles.whiteSection} ${styles.roundedSection} ${styles.smoothTransition}`}
      >
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
          >
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Nuestro terreno legal</h2>
              <div className={styles.goldDivider}></div>
              <p className={styles.sectionSubtitle}>
                Áreas de práctica donde brindamos asesoramiento especializado y
                representación legal
              </p>
            </div>
          </motion.div>

          <motion.div
            className={styles.specialtiesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {[
              {
                icon: "fas fa-briefcase",
                title: "Derecho laboral y ART",
                text: "Asesoramiento a trabajadores y empleadores en todas las áreas laborales.",
              },
              {
                icon: "fas fa-car-burst",
                title: "Daños y accidentes",
                text: "Representación en casos de tránsito, reclamos por daños y perjuicios.",
              },
              {
                icon: "fas fa-family",
                title: "Derecho familiar y sucesorio",
                text: "Asesoramiento integral en cuestiones familiares, divorcios, alimentos y sucesiones.",
              },
              {
                icon: "fas fa-building",
                title: "Asesoría empresarial",
                text: "Constitución de sociedades, registros de marca y protección legal de negocios.",
              },
              {
                icon: "fas fa-gavel",
                title: "Defensa penal",
                text: "Representación en procesos penales y asesoramiento en situaciones urgentes.",
              },
              {
                icon: "fas fa-file-contract",
                title: "Asesoría legal integral",
                text: "Documentación legal, contratos y soluciones personalizadas para cada necesidad.",
              },
            ].map((specialty, index) => (
              <motion.div
                key={index}
                className={styles.specialtyCard}
                variants={itemVariants}
              >
                <div className={styles.specialtyContent}>
                  <div className={styles.specialtyIcon}>
                    <i className={specialty.icon}></i>
                  </div>
                  <h3 className={styles.specialtyTitle}>{specialty.title}</h3>
                  <p className={styles.specialtyText}>{specialty.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className={styles.specialtiesCta}
          >
            <a href="/areas" className={styles.primaryButton}>
              Ver todas las áreas de práctica
              <i className="fas fa-arrow-right"></i>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sección con Imagen y Texto */}
      <section
        className={`${styles.imageTextSection} ${styles.goldSectionTransition}`}
      >
        <div className={styles.imageHalf}></div>
        <motion.div
          className={styles.textHalf}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
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
          </motion.div>
        </motion.div>
      </section>

      {/* Enfoque Profesional */}
      <section
        className={`${styles.professionalApproach} ${styles.darkSectionTransition} ${styles.darkSmoothTransition}`}
      >
        <div className={styles.container}>
          <div className={styles.professionalContent}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInVariants}
            >
              <h2 className={styles.sectionTitle}>
                Derecho sin complicaciones: claridad desde el primer día
              </h2>
              <div className={styles.goldDivider}></div>
            </motion.div>
            <motion.div
              className={styles.professionalColumns}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.div
                className={styles.professionalText}
                variants={itemVariants}
              >
                <p className={styles.sectionText}>
                  Entendemos que enfrentarse a un tema legal puede ser
                  abrumador. Por eso nos ocupamos de que comprendas cada etapa
                  del proceso con explicaciones sencillas, sin perder el rigor
                  profesional.
                </p>
                <p className={styles.sectionText}>
                  No creemos en respuestas genéricas. Analizamos tu situación
                  particular para ofrecerte opciones reales, con plazos y costos
                  transparentes desde el inicio.
                </p>
              </motion.div>
              <motion.div
                className={styles.professionalText}
                variants={itemVariants}
              >
                <p className={styles.sectionText}>
                  Nuestra prioridad es que tomes decisiones informadas, con la
                  tranquilidad de contar con representación jurídica
                  experimentada.
                </p>
                <p className={styles.sectionText}>
                  Como profesionales del derecho, asumimos tu caso con seriedad
                  y dedicación absoluta. Te mantenemos informado en cada etapa
                  decisiva y estamos disponibles para responder tus consultas.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consejos Legales */}
      <section
        className={`${styles.socialTipsSection} ${styles.paperSectionTransition} ${styles.smoothTransition}`}
      >
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
          >
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                ¿Sabías que tus dudas legales tienen respuesta?
              </h2>
              <div className={styles.goldDivider}></div>
              <p className={styles.sectionSubtitle}>
                En nuestras redes sociales resolvemos preguntas frecuentes en
                formato claro y accesible.
              </p>
            </div>
          </motion.div>

          <motion.div
            className={styles.tipsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {[
              {
                icon: "fas fa-car-crash",
                title: "Sufrí un accidente laboral, ¿ahora qué hago?",
                text: "La ART tiene la obligación de cubrir tus gastos, salario e indemnización.",
                link: "https://www.instagram.com/reel/C7AvgSfut9g/?igsh=MTM3OWpoOGFza2U2ZQ==",
              },
              {
                icon: "fas fa-handshake",
                title: "Soy Uber. ¿El seguro me cubre en caso de accidente?",
                text: "El seguro común y corriente no te cubre. Para estar asegurado en caso de accidentes debes contratar un seguro comercial.",
                link: "https://www.instagram.com/reel/DGjj-7puvIq/?igsh=MWN4Nm16bDRpY2dlMQ==",
              },
              {
                icon: "fas fa-home-heart",
                title:
                  "¿Las compañías aseguradoras pagan más cuando tenes abogado?",
                text: "Las aseguradoras ofertan siempre el monto más bajo posible. En la mayoría de los casos, asesorarte con un abogado mejorará significativamente sus propuestas.",
                link: "https://www.instagram.com/reel/DElgPDbuYkh/?igsh=dDZwdDMxNXJlZnpr",
              },
            ].map((tip, index) => (
              <motion.div
                key={index}
                className={styles.tipCard}
                variants={itemVariants}
              >
                <div className={styles.tipIcon}>
                  <i className={tip.icon}></i>
                </div>
                <h3 className={styles.tipTitle}>{tip.title}</h3>
                <p className={styles.tipText}>{tip.text}</p>
                <a
                  href={tip.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.tipLink}
                >
                  Ver video explicativo{" "}
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className={styles.socialCta}
          >
            <p className={styles.socialText}>
              Resolvemos muchas más dudas legales cada semana en nuestra cuenta
              de Instagram:
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
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        <CTA
          title="¿Necesitas asesoramiento legal personalizado?"
          description="Agenda una consulta inicial para evaluar tu caso"
          buttonText="Contactar ahora"
        />
      </motion.div>
    </div>
  );
}
