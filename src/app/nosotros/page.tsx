"use client";

import styles from "./page.module.css";
import Hero from "@/components/Hero";
import heroNosotros from "../../../public/heroNosotros.png";
import CTA from "@/components/Cta";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const principleVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

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
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }} // Ajuste clave aquí
          variants={sectionVariants}
        >
          <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
            Nuestra esencia
          </motion.h2>
          <motion.div
            className={styles.goldDivider}
            variants={itemVariants}
          ></motion.div>
          <motion.div
            className={styles.textContent}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -50px 0px" }} // Ajuste clave aquí
          >
            <motion.p variants={itemVariants}>
              En <strong>C&C Soluciones Legales</strong>, hemos desarrollado una
              práctica jurídica donde cada caso recibe la atención meticulosa
              que requiere, combinando rigor profesional con comprensión de las
              necesidades individuales.
            </motion.p>
            <motion.p variants={itemVariants}>
              Creemos en establecer relaciones basadas en la claridad y el
              respeto mutuo, ofreciendo no solo soluciones legales efectivas
              sino también un acompañamiento genuino durante todo el proceso.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Sección de Compromiso */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
            Nuestro compromiso
          </motion.h2>
          <motion.div
            className={styles.goldDivider}
            variants={itemVariants}
          ></motion.div>
          <motion.div
            className={styles.textContent}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.p variants={itemVariants}>
              Nos dedicamos a brindar asesoramiento legal integral a personas y
              empresas que buscan soluciones claras, eficientes y confiables.
              Creemos en construir relaciones de confianza a largo plazo,
              basadas en el compromiso, la transparencia y la excelencia
              profesional.
            </motion.p>
            <motion.p
              className={styles.highlightedText}
              variants={itemVariants}
            >
              Nuestra misión es ofrecer asesoramiento jurídico de alta calidad,
              orientado a las necesidades reales de nuestros clientes,
              garantizando un acompañamiento personalizado y estratégico que
              promueva su crecimiento y seguridad legal.
            </motion.p>
            <motion.p variants={itemVariants}>
              Aspiramos a ser un estudio jurídico de referencia en las
              provincias de Santa Fe y Entre Ríos, reconocido por la confianza
              de nuestros clientes, nuestra capacitación permanente y nuestra
              capacidad para brindar respuestas rápidas y eficaces en un mundo
              en constante cambio.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Sección de Valores - Versión mejorada */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
            Principios rectores
          </motion.h2>
          <motion.div
            className={styles.goldDivider}
            variants={itemVariants}
          ></motion.div>
          <motion.div
            className={styles.principlesContainer}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              className={styles.principle}
              variants={principleVariants}
            >
              <h3 className={styles.principleTitle}>Atención personalizada</h3>
              <p className={styles.principleDescription}>
                Adaptamos nuestro servicio a las circunstancias específicas de
                cada cliente, dedicando el tiempo necesario para comprender en
                profundidad cada situación particular.
              </p>
            </motion.div>

            <motion.div
              className={styles.principleDivider}
              variants={fadeInVariants}
            ></motion.div>

            <motion.div
              className={styles.principle}
              variants={principleVariants}
            >
              <h3 className={styles.principleTitle}>Capacitación constante</h3>
              <p className={styles.principleDescription}>
                Mantenemos un compromiso firme con la formación continua,
                asegurando que nuestro asesoramiento refleje siempre los últimos
                desarrollos en el ámbito legal.
              </p>
            </motion.div>

            <motion.div
              className={styles.principleDivider}
              variants={fadeInVariants}
            ></motion.div>

            <motion.div
              className={styles.principle}
              variants={principleVariants}
            >
              <h3 className={styles.principleTitle}>Respuesta oportuna</h3>
              <p className={styles.principleDescription}>
                Entendemos la importancia de actuar con celeridad en asuntos
                legales, por lo que priorizamos la eficiencia sin comprometer la
                calidad de nuestro trabajo.
              </p>
            </motion.div>

            <motion.div
              className={styles.principleDivider}
              variants={fadeInVariants}
            ></motion.div>

            <motion.div
              className={styles.principle}
              variants={principleVariants}
            >
              <h3 className={styles.principleTitle}>Compromiso profesional</h3>
              <p className={styles.principleDescription}>
                Abordamos cada caso con seriedad y dedicación, asumiendo la
                responsabilidad que conlleva la defensa de los intereses de
                nuestros clientes.
              </p>
            </motion.div>

            <motion.div
              className={styles.principleDivider}
              variants={fadeInVariants}
            ></motion.div>

            <motion.div
              className={styles.principle}
              variants={principleVariants}
            >
              <h3 className={styles.principleTitle}>Discreción absoluta</h3>
              <p className={styles.principleDescription}>
                La confidencialidad es un principio inviolable en nuestra
                práctica. En C&C es un valor esencial y tomamos todas las
                medidas para proteger la información de nuestros clientes.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        <CTA
          title="¿Buscas asesoramiento jurídico con estas características?"
          description="Asesoramiento jurídico claro y confiable"
          buttonText="Hablemos sobre tu situación"
        />
      </motion.div>
    </div>
  );
}
