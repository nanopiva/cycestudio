"use client";

import styles from "../styles/AreasComponent.module.css";
import Hero from "@/components/Hero";
import areasHero from "../../public/areasHero.jpg";
import CTA from "@/components/Cta";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGavel,
  FaBuilding,
  FaFileContract,
  FaUsers,
  FaCarCrash,
} from "react-icons/fa";

// Animation variants
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

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AreasEspecialidad() {
  return (
    <div className={styles.body}>
      <section className={styles.heroContainer}>
        <div className={styles.container}>
          <Hero
            imageSrc={areasHero}
            title="Áreas de especialización"
            subtitle="Soluciones jurídicas integrales adaptadas a cada necesidad legal"
          />
        </div>
      </section>

      <section className={styles.whiteSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionIntro}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
          >
            <h2 className={styles.sectionTitle}>Nuestros campos de práctica</h2>
            <div className={styles.goldDivider}></div>
            <p className={styles.sectionText}>
              Ofrecemos asesoramiento especializado en diversas áreas del
              derecho, con amplia experiencia en los siguientes tipos de casos:
            </p>
          </motion.div>

          <motion.div
            className={styles.specialtySection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
          >
            <div className={styles.specialtyHeader}>
              <div className={styles.specialtyIcon}>
                <FaBriefcase />
              </div>
              <h3 className={styles.specialtyTitle}>Derecho laboral</h3>
            </div>
            <motion.div
              className={styles.specialtyContent}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                className={styles.specialtyDescription}
                variants={itemVariants}
              >
                <p>
                  Defendemos los derechos de trabajadores y asesoramos a
                  empleadores en el cumplimiento de sus obligaciones, buscando
                  siempre soluciones equilibradas.
                </p>
              </motion.div>
              <motion.ul className={styles.caseList} variants={itemVariants}>
                <li>Despidos con y sin causa</li>
                <li>Trabajo no registrado</li>
                <li>Reclamos por accidentes laborales</li>
                <li>Diferencias salariales y liquidaciones finales</li>
                <li>Acoso laboral y mobbing</li>
                <li>Asesoramiento a empleadores en relaciones laborales</li>
                <li>Redacción de contratos y manuales de procedimiento</li>
              </motion.ul>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.specialtySection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
          >
            <div className={styles.specialtyHeader}>
              <div className={styles.specialtyIcon}>
                <FaCarCrash />
              </div>
              <h3 className={styles.specialtyTitle}>Daños y perjuicios</h3>
            </div>
            <motion.div
              className={styles.specialtyContent}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                className={styles.specialtyDescription}
                variants={itemVariants}
              >
                <p>
                  Representamos a víctimas de daños para obtener la compensación
                  justa por los perjuicios sufridos.
                </p>
              </motion.div>
              <motion.ul className={styles.caseList} variants={itemVariants}>
                <li>Accidentes de tránsito y reclamos a aseguradoras</li>
                <li>Responsabilidad civil por daños</li>
                <li>Mala praxis profesional</li>
                <li>Accidentes en lugares públicos y privados</li>
                <li>Daños morales y psicológicos</li>
                <li>Reclamos por defectos en productos o servicios</li>
              </motion.ul>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.specialtySection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
          >
            <div className={styles.specialtyHeader}>
              <div className={styles.specialtyIcon}>
                <FaUsers />
              </div>
              <h3 className={styles.specialtyTitle}>
                Derecho de familia y sucesiones
              </h3>
            </div>
            <motion.div
              className={styles.specialtyContent}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                className={styles.specialtyDescription}
                variants={itemVariants}
              >
                <p>
                  Brindamos acompañamiento legal en todas las etapas de los
                  procesos familiares, buscando siempre proteger los intereses
                  de nuestros clientes y sus familias.
                </p>
              </motion.div>
              <motion.ul className={styles.caseList} variants={itemVariants}>
                <li>Divorcios y disolución de uniones convivenciales</li>
                <li>Régimen de visitas y custodia de menores</li>
                <li>Alimentos (cónyuge e hijos)</li>
                <li>División de bienes en separaciones</li>
                <li>Sucesiones y declaratorias de herederos</li>
                <li>Testamentos y planificación sucesoria</li>
                <li>Procesos de adopción</li>
              </motion.ul>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.specialtySection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
          >
            <div className={styles.specialtyHeader}>
              <div className={styles.specialtyIcon}>
                <FaGavel />
              </div>
              <h3 className={styles.specialtyTitle}>Derecho penal</h3>
            </div>
            <motion.div
              className={styles.specialtyContent}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                className={styles.specialtyDescription}
                variants={itemVariants}
              >
                <p>
                  Defensa estratégica en procesos penales, garantizando el
                  respeto a los derechos y garantías constitucionales en todas
                  las etapas del procedimiento.
                </p>
              </motion.div>
              <motion.ul className={styles.caseList} variants={itemVariants}>
                <li>Defensa en procesos penales</li>
                <li>Asesoramiento en detenciones y allanamientos</li>
                <li>Violencia de género y familiar</li>
                <li>Delitos contra la propiedad</li>
                <li>Defensa en juicios por lesiones</li>
                <li>Excarcelaciones y medidas alternativas</li>
                <li>Asesoramiento a víctimas de delitos</li>
              </motion.ul>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.specialtySection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
          >
            <div className={styles.specialtyHeader}>
              <div className={styles.specialtyIcon}>
                <FaBuilding />
              </div>
              <h3 className={styles.specialtyTitle}>
                Derecho comercial y empresarial
              </h3>
            </div>
            <motion.div
              className={styles.specialtyContent}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                className={styles.specialtyDescription}
                variants={itemVariants}
              >
                <p>
                  Asesoramiento integral para emprendedores y empresas, desde su
                  constitución hasta la protección de sus activos y resolución
                  de conflictos.
                </p>
              </motion.div>
              <motion.ul className={styles.caseList} variants={itemVariants}>
                <li>Constitución de sociedades (SA, SRL, etc.)</li>
                <li>Registro de marcas y propiedad intelectual</li>
                <li>Contratos comerciales y civiles</li>
                <li>Procesos concursales y quiebras</li>
                <li>Defensa del consumidor</li>
                <li>Asesoramiento a emprendedores y pymes</li>
                <li>Conflictos societarios y entre accionistas</li>
              </motion.ul>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.specialtySection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
          >
            <div className={styles.specialtyHeader}>
              <div className={styles.specialtyIcon}>
                <FaFileContract />
              </div>
              <h3 className={styles.specialtyTitle}>Otras áreas de práctica</h3>
            </div>
            <motion.div
              className={styles.specialtyContent}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                className={styles.specialtyDescription}
                variants={itemVariants}
              >
                <p>
                  Servicios legales diversos para necesidades específicas que
                  requieren atención profesional y soluciones personalizadas.
                </p>
              </motion.div>
              <motion.ul className={styles.caseList} variants={itemVariants}>
                <li>Redacción de contratos diversos</li>
                <li>Cartas documento y telegramas laborales</li>
                <li>Asesoramiento en derecho administrativo</li>
                <li>Trámites ante organismos públicos</li>
                <li>Asesoría legal integral para particulares</li>
                <li>Representación en mediaciones y conciliaciones</li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        <CTA
          title="¿No encuentras tu caso específico listado aquí?"
          description=" Contamos con amplia experiencia en múltiples áreas del derecho.
                Consultanos para evaluar tu situación particular."
          buttonText="Consultar por un caso específico"
        />
      </motion.div>
    </div>
  );
}
