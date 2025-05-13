"use client";

import styles from "./page.module.css";
import Hero from "@/components/Hero";
import areasHero from "../../../public/areasHero.jpg";
import CTA from "@/components/Cta";

export default function AreasEspecialidad() {
  return (
    <div className={styles.body}>
      {/* Hero Section */}
      <section className={styles.heroContainer}>
        <div className={styles.container}>
          <Hero
            imageSrc={areasHero}
            title="Áreas de especialización"
            subtitle="Soluciones jurídicas integrales adaptadas a cada necesidad legal"
          />
        </div>
      </section>

      {/* Sección de Especialidades */}
      <section className={styles.whiteSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <h2 className={styles.sectionTitle}>Nuestros campos de práctica</h2>
            <div className={styles.goldDivider}></div>
            <p className={styles.sectionText}>
              Ofrecemos asesoramiento especializado en diversas áreas del
              derecho, con amplia experiencia en los siguientes tipos de casos:
            </p>
          </div>

          {/* Derecho Laboral */}
          <div className={styles.specialtySection}>
            <div className={styles.specialtyHeader}>
              <div className={styles.specialtyIcon}>
                <i className="fas fa-briefcase"></i>
              </div>
              <h3 className={styles.specialtyTitle}>Derecho laboral</h3>
            </div>
            <div className={styles.specialtyContent}>
              <div className={styles.specialtyDescription}>
                <p>
                  Defendemos los derechos de trabajadores y asesoramos a
                  empleadores en el cumplimiento de sus obligaciones, buscando
                  siempre soluciones equilibradas.
                </p>
              </div>
              <ul className={styles.caseList}>
                <li>Despidos con y sin causa</li>
                <li>Trabajo no registrado</li>
                <li>Reclamos por accidentes laborales</li>
                <li>Diferencias salariales y liquidaciones finales</li>
                <li>Acoso laboral y mobbing</li>
                <li>Asesoramiento a empleadores en relaciones laborales</li>
                <li>Redacción de contratos y manuales de procedimiento</li>
              </ul>
            </div>
          </div>

          {/* Daños y Perjuicios */}
          <div className={styles.specialtySection}>
            <div className={styles.specialtyHeader}>
              <div className={styles.specialtyIcon}>
                <i className="fas fa-car-burst"></i>
              </div>
              <h3 className={styles.specialtyTitle}>Daños y perjuicios</h3>
            </div>
            <div className={styles.specialtyContent}>
              <div className={styles.specialtyDescription}>
                <p>
                  Representamos a víctimas de daños para obtener la compensación
                  justa por los perjuicios sufridos.
                </p>
              </div>
              <ul className={styles.caseList}>
                <li>Accidentes de tránsito y reclamos a aseguradoras</li>
                <li>Responsabilidad civil por daños</li>
                <li>Mala praxis profesional</li>
                <li>Accidentes en lugares públicos y privados</li>
                <li>Daños morales y psicológicos</li>
                <li>Reclamos por defectos en productos o servicios</li>
              </ul>
            </div>
          </div>

          {/* Derecho de Familia */}
          <div className={styles.specialtySection}>
            <div className={styles.specialtyHeader}>
              <div className={styles.specialtyIcon}>
                <i className="fas fa-family"></i>
              </div>
              <h3 className={styles.specialtyTitle}>
                Derecho de familia y sucesiones
              </h3>
            </div>
            <div className={styles.specialtyContent}>
              <div className={styles.specialtyDescription}>
                <p>
                  Brindamos acompañamiento legal en todas las etapas de los
                  procesos familiares, buscando siempre proteger los intereses
                  de nuestros clientes y sus familias.
                </p>
              </div>
              <ul className={styles.caseList}>
                <li>Divorcios y disolución de uniones convivenciales</li>
                <li>Régimen de visitas y custodia de menores</li>
                <li>Alimentos (cónyuge e hijos)</li>
                <li>División de bienes en separaciones</li>
                <li>Sucesiones y declaratorias de herederos</li>
                <li>Testamentos y planificación sucesoria</li>
                <li>Procesos de adopción</li>
              </ul>
            </div>
          </div>

          {/* Derecho Penal */}
          <div className={styles.specialtySection}>
            <div className={styles.specialtyHeader}>
              <div className={styles.specialtyIcon}>
                <i className="fas fa-gavel"></i>
              </div>
              <h3 className={styles.specialtyTitle}>Derecho penal</h3>
            </div>
            <div className={styles.specialtyContent}>
              <div className={styles.specialtyDescription}>
                <p>
                  Defensa estratégica en procesos penales, garantizando el
                  respeto a los derechos y garantías constitucionales en todas
                  las etapas del procedimiento.
                </p>
              </div>
              <ul className={styles.caseList}>
                <li>Defensa en procesos penales</li>
                <li>Asesoramiento en detenciones y allanamientos</li>
                <li>Violencia de género y familiar</li>
                <li>Delitos contra la propiedad</li>
                <li>Defensa en juicios por lesiones</li>
                <li>Excarcelaciones y medidas alternativas</li>
                <li>Asesoramiento a víctimas de delitos</li>
              </ul>
            </div>
          </div>

          {/* Derecho Comercial y Empresarial */}
          <div className={styles.specialtySection}>
            <div className={styles.specialtyHeader}>
              <div className={styles.specialtyIcon}>
                <i className="fas fa-building"></i>
              </div>
              <h3 className={styles.specialtyTitle}>
                Derecho comercial y empresarial
              </h3>
            </div>
            <div className={styles.specialtyContent}>
              <div className={styles.specialtyDescription}>
                <p>
                  Asesoramiento integral para emprendedores y empresas, desde su
                  constitución hasta la protección de sus activos y resolución
                  de conflictos.
                </p>
              </div>
              <ul className={styles.caseList}>
                <li>Constitución de sociedades (SA, SRL, etc.)</li>
                <li>Registro de marcas y propiedad intelectual</li>
                <li>Contratos comerciales y civiles</li>
                <li>Procesos concursales y quiebras</li>
                <li>Defensa del consumidor</li>
                <li>Asesoramiento a emprendedores y pymes</li>
                <li>Conflictos societarios y entre accionistas</li>
              </ul>
            </div>
          </div>

          {/* Otras Áreas */}
          <div className={styles.specialtySection}>
            <div className={styles.specialtyHeader}>
              <div className={styles.specialtyIcon}>
                <i className="fas fa-file-contract"></i>
              </div>
              <h3 className={styles.specialtyTitle}>Otras áreas de práctica</h3>
            </div>
            <div className={styles.specialtyContent}>
              <div className={styles.specialtyDescription}>
                <p>
                  Servicios legales diversos para necesidades específicas que
                  requieren atención profesional y soluciones personalizadas.
                </p>
              </div>
              <ul className={styles.caseList}>
                <li>Redacción de contratos diversos</li>
                <li>Cartas documento y telegramas laborales</li>
                <li>Asesoramiento en derecho administrativo</li>
                <li>Trámites ante organismos públicos</li>
                <li>Asesoría legal integral para particulares</li>
                <li>Representación en mediaciones y conciliaciones</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CTA
        title="¿No encuentras tu caso específico listado aquí?"
        description=" Contamos con amplia experiencia en múltiples áreas del derecho.
              Consultanos para evaluar tu situación particular."
        buttonText="Consultar por un caso específico"
      />
    </div>
  );
}
