"use client";

import { useState } from "react";
import styles from "../styles/ContactoComponent.module.css";
import Hero from "@/components/Hero";
import heroContact from "../../public/heroContacto.jpg";
import { motion, AnimatePresence } from "framer-motion";

// Animaciones
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
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

export default function Contacto() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text: string, type: "phone" | "email" = "phone") => {
    navigator.clipboard.writeText(text);
    setModalMessage(
      type === "phone" ? "¡Número copiado!" : "¡Correo electrónico copiado!"
    );
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/solucioneslegalescyc@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...Object.fromEntries(formData),
            _captcha: "false",
            _next: window.location.href,
          }),
        }
      );

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();

      if (data.success === "true") {
        setModalMessage(
          "Formulario enviado correctamente. Su consulta será respondida a la brevedad!"
        );
        setShowModal(true);
        setTimeout(() => setShowModal(false), 7000);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(
          data.message || "Error desconocido al enviar el formulario"
        );
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setModalMessage(
        error instanceof Error
          ? error.message
          : "Hubo un error al enviar el formulario. Por favor intente nuevamente."
      );
      setShowModal(true);
      setTimeout(() => setShowModal(false), 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.body}>
      <section className={styles.heroContainer}>
        <div className={styles.container}>
          <Hero
            imageSrc={heroContact}
            title="Contacto"
            subtitle="Defendamos juntos tus derechos - Consultas presenciales en Santa Fe y Entre Ríos, o virtuales"
          />
        </div>
      </section>

      <motion.section
        className={styles.contactSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            variants={staggerContainer}
          >
            <motion.h2 className={styles.sectionTitle} variants={fadeUp}>
              Medios de contacto
            </motion.h2>
            <motion.div
              className={styles.goldDivider}
              variants={fadeUp}
            ></motion.div>
            <motion.p className={styles.sectionText} variants={fadeUp}>
              Estamos disponibles para atender tu consulta a través de estos
              canales:
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.contactMain}
            variants={staggerContainer}
          >
            <div className={styles.contactGrid}>
              <motion.div
                className={`${styles.contactMethod} ${styles.santaFeMethod}`}
                variants={cardAnimation}
              >
                <div className={styles.methodIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className={styles.iconSvg}
                  >
                    <path
                      fill="currentColor"
                      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                    />
                  </svg>
                </div>
                <div className={styles.methodContent}>
                  <h3>Oficina Santa Fe</h3>
                  <p className={styles.methodDescription}>
                    Atención con cita previa
                  </p>
                  <div className={styles.contactLinks}>
                    <motion.button
                      onClick={() => copyToClipboard("+5493425923017")}
                      className={styles.contactLink}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className={styles.copyIcon}
                      >
                        <path
                          fill="currentColor"
                          d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16v352z"
                        />
                      </svg>
                      +54 9 3425 92-3017
                    </motion.button>
                    <motion.a
                      href="https://wa.me/5493425923017"
                      className={styles.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className={styles.whatsappIcon}
                      >
                        <path
                          fill="currentColor"
                          d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                        />
                      </svg>
                      Enviar mensaje
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={`${styles.contactMethod} ${styles.entreRiosMethod}`}
                variants={cardAnimation}
              >
                <div className={styles.methodIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className={styles.iconSvg}
                  >
                    <path
                      fill="currentColor"
                      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                    />
                  </svg>
                </div>
                <div className={styles.methodContent}>
                  <h3>Oficina Entre Ríos</h3>
                  <p className={styles.methodDescription}>
                    Atención con cita previa
                  </p>
                  <div className={styles.contactLinks}>
                    <motion.button
                      onClick={() => copyToClipboard("+5493435028426")}
                      className={styles.contactLink}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className={styles.copyIcon}
                      >
                        <path
                          fill="currentColor"
                          d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16v352z"
                        />
                      </svg>
                      +54 9 3435 02-8426
                    </motion.button>
                    <motion.a
                      href="https://wa.me/5493435028426"
                      className={styles.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className={styles.whatsappIcon}
                      >
                        <path
                          fill="currentColor"
                          d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                        />
                      </svg>
                      Enviar mensaje
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={`${styles.contactMethod} ${styles.emailMethod}`}
                variants={cardAnimation}
              >
                <div className={styles.methodIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className={styles.iconSvg}
                  >
                    <path
                      fill="currentColor"
                      d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                    />
                  </svg>
                </div>
                <div className={styles.methodContent}>
                  <h3>Correo electrónico</h3>
                  <p className={styles.methodDescription}>
                    Envianos tu consulta por correo electrónico y recibirás una
                    respuesta detallada.
                  </p>
                  <motion.button
                    onClick={() =>
                      copyToClipboard("solucioneslegalescyc@gmail.com", "email")
                    }
                    className={styles.contactLink}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      className={styles.copyIcon}
                    >
                      <path
                        fill="currentColor"
                        d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16v352z"
                      />
                    </svg>
                    solucioneslegalescyc@gmail.com
                  </motion.button>
                  <p className={styles.responseTime}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className={styles.clockIcon}
                    >
                      <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                      />
                    </svg>
                    Respuesta en menos de 24h
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.consultationTypesSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <div className={styles.consultationContainer}>
          <motion.div
            className={styles.consultationHeader}
            variants={staggerContainer}
          >
            <motion.h2 className={styles.consultationTitle} variants={fadeUp}>
              Modalidades de Consulta
            </motion.h2>
            <motion.div
              className={styles.goldDivider}
              variants={fadeUp}
            ></motion.div>
            <motion.p className={styles.consultationSubtitle} variants={fadeUp}>
              Ofrecemos diferentes opciones para adaptarnos a tus necesidades y
              preferencias
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.consultationOptions}
            variants={staggerContainer}
          >
            <motion.div
              className={styles.consultationOption}
              variants={cardAnimation}
            >
              <div className={styles.optionHeader}>
                <div className={styles.optionIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className={styles.buildingIcon}
                  >
                    <path
                      fill="currentColor"
                      d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
                    />
                  </svg>
                </div>
                <h4 className={styles.optionTitle}>Consulta presencial</h4>
              </div>
              <div className={styles.optionContent}>
                <p>
                  Reuniones profesionales en las oficinas de Santa Fe o Entre
                  Ríos, donde podremos analizar tu caso con toda la
                  documentación necesaria en un ambiente confortable y
                  confidencial.
                </p>
                <ul className={styles.optionBenefits}>
                  <li>Atención personalizada</li>
                  <li>Análisis de documentación</li>
                  <li>Asesoramiento inmediato</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className={styles.consultationOption}
              variants={cardAnimation}
            >
              <div className={styles.optionHeader}>
                <div className={styles.optionIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className={styles.videoIcon}
                  >
                    <path
                      fill="currentColor"
                      d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"
                    />
                  </svg>
                </div>
                <h4 className={styles.optionTitle}>Consulta virtual</h4>
              </div>
              <div className={styles.optionContent}>
                <p>
                  Videollamadas programadas desde la comodidad de tu hogar u
                  oficina, ideal para quienes no pueden trasladarse o prefieren
                  la inmediatez.
                </p>
                <ul className={styles.optionBenefits}>
                  <li>Flexibilidad horaria</li>
                  <li>Sin desplazamientos</li>
                  <li>Misma calidad de asesoramiento</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.locationsSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <div className={styles.locationsContainer}>
          <motion.div
            className={styles.sectionHeader}
            variants={staggerContainer}
          >
            <motion.h2 className={styles.sectionTitle} variants={fadeUp}>
              Oficinas
            </motion.h2>
            <motion.div
              className={styles.goldDivider}
              variants={fadeUp}
            ></motion.div>
            <motion.p className={styles.sectionText} variants={fadeUp}>
              Ubicadas estratégicamente para brindarte la mejor atención en las
              provincias de Santa Fe y Entre Ríos
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.locationsGrid}
            variants={staggerContainer}
          >
            <motion.div
              className={styles.locationCard}
              variants={cardAnimation}
            >
              <div className={styles.locationMap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.552426488588!2d-60.70744268814822!3d-31.646102807287292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9a4ba91d0ff%3A0x6665ed5934c5213f!2sLa%20Rioja%202441%2C%20S3000%20Santa%20Fe%20de%20la%20Vera%20Cruz%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1746243505926!5m2!1ses-419!2sar"
                  className={styles.map}
                  loading="lazy"
                  title="Oficina Santa Fe"
                  aria-label="Ubicación de mi oficina en Santa Fe"
                ></iframe>
              </div>
              <div className={styles.locationInfo}>
                <h3 className={styles.locationTitle}>Santa Fe</h3>
                <div className={styles.locationDetail}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className={styles.locationIcon}
                  >
                    <path
                      fill="currentColor"
                      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                    />
                  </svg>
                  <p>
                    <strong>Dirección:</strong> La Rioja 2441, P2, of 94
                    <br />
                    Santa Fe, Argentina
                    <br />
                    CP: 3000
                  </p>
                </div>
                <motion.a
                  href="https://maps.app.goo.gl/Do1iCsJNLiMNmi4y9"
                  className={styles.locationButton}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className={styles.directionsIcon}
                  >
                    <path
                      fill="currentColor"
                      d="M502.61 233.32L278.68 9.39c-12.52-12.52-32.83-12.52-45.36 0L9.39 233.32c-12.52 12.53-12.52 32.83 0 45.36l223.93 223.93c12.52 12.53 32.83 12.53 45.36 0l223.93-223.93c12.52-12.53 12.52-32.83 0-45.36zm-100.98 12.56l-84.21 77.73c-5.12 4.73-13.43 1.1-13.43-5.88V264h-96v64c0 4.42-3.58 8-8 8h-32c-4.42 0-8-3.58-8-8v-80c0-17.67 14.33-32 32-32h112v-53.73c0-6.97 8.3-10.61 13.43-5.88l84.21 77.73c3.43 3.17 3.43 8.59 0 11.76z"
                    />
                  </svg>
                  Cómo llegar
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className={styles.locationCard}
              variants={cardAnimation}
            >
              <div className={styles.locationMap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.5901753117632!2d-60.53444210000001!3d-31.7270882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b45262b65f91bb%3A0xca5c1372150eecf8!2sNarciso%20Laprida%20424%2C%20E3100%20Paran%C3%A1%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1746251117362!5m2!1ses-419!2sar"
                  className={styles.map}
                  loading="lazy"
                  title="Oficina Paraná"
                  aria-label="Ubicación de mi oficina en Paraná"
                ></iframe>
              </div>
              <div className={styles.locationInfo}>
                <h3 className={styles.locationTitle}>Entre Ríos</h3>
                <div className={styles.locationDetail}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className={styles.locationIcon}
                  >
                    <path
                      fill="currentColor"
                      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                    />
                  </svg>
                  <p>
                    <strong>Dirección:</strong> Laprida 424
                    <br />
                    Paraná, Entre Ríos, Argentina
                    <br />
                    CP: 3100
                  </p>
                </div>
                <motion.a
                  href="https://maps.app.goo.gl/CHhsjoh2eb9jaSZw6"
                  className={styles.locationButton}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className={styles.directionsIcon}
                  >
                    <path
                      fill="currentColor"
                      d="M502.61 233.32L278.68 9.39c-12.52-12.52-32.83-12.52-45.36 0L9.39 233.32c-12.52 12.53-12.52 32.83 0 45.36l223.93 223.93c12.52 12.53 32.83 12.53 45.36 0l223.93-223.93c12.52-12.53 12.52-32.83 0-45.36zm-100.98 12.56l-84.21 77.73c-5.12 4.73-13.43 1.1-13.43-5.88V264h-96v64c0 4.42-3.58 8-8 8h-32c-4.42 0-8-3.58-8-8v-80c0-17.67 14.33-32 32-32h112v-53.73c0-6.97 8.3-10.61 13.43-5.88l84.21 77.73c3.43 3.17 3.43 8.59 0 11.76z"
                    />
                  </svg>
                  Cómo llegar
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.formSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={sectionVariants}
      >
        <div className={styles.formContainer}>
          <motion.div className={styles.formHeader} variants={fadeUp}>
            <h2 className={styles.formTitle}>Envianos tu consulta</h2>
            <div className={styles.goldDivider}></div>
            <p className={styles.formSubtitle}>
              Completa el formulario y nos pondremos en contacto contigo a la
              brevedad
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <input type="hidden" name="_captcha" value="false" />

            <motion.div className={styles.formGroup} variants={fadeUp}>
              <label htmlFor="name" className={styles.formLabel}>
                Nombre completo*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.formInput}
                required
              />
            </motion.div>

            <motion.div className={styles.formGroup} variants={fadeUp}>
              <label htmlFor="email" className={styles.formLabel}>
                Correo electrónico*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.formInput}
                required
              />
            </motion.div>

            <motion.div className={styles.formGroup} variants={fadeUp}>
              <label htmlFor="phone" className={styles.formLabel}>
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={styles.formInput}
              />
            </motion.div>

            <motion.div className={styles.formGroup} variants={fadeUp}>
              <label htmlFor="subject" className={styles.formLabel}>
                Asunto
              </label>
              <select id="subject" name="subject" className={styles.formSelect}>
                <option value="">Selecciona un asunto</option>
                <option value="Consulta laboral">Consulta laboral</option>
                <option value="Consulta daños y perjuicios">
                  Consulta daños y perjuicios
                </option>
                <option value="Consulta derecho de familia">
                  Consulta derecho de familia/sucesiones
                </option>
                <option value="Consulta penal">Consulta penal</option>
                <option value="Consulta comercial">Consulta comercial</option>
                <option value="Otra consulta">Otra consulta</option>
              </select>
            </motion.div>

            <motion.div className={styles.formGroup} variants={fadeUp}>
              <label htmlFor="message" className={styles.formLabel}>
                Mensaje*
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={styles.formTextarea}
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className={styles.submitButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={fadeUp}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar consulta"}
            </motion.button>
          </form>
        </div>
      </motion.section>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className={styles.copyModal}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "fixed",
              left: "50%",
              bottom: "20px",
              x: "-50%",
            }}
          >
            <div className={styles.modalContent}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={styles.checkIcon}
              >
                <path
                  fill="currentColor"
                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                />
              </svg>
              <p>{modalMessage}</p>
            </div>
            <div
              className={styles.progressBar}
              key={modalMessage}
              style={{
                animationDuration: `${
                  modalMessage.includes("Formulario") ? "7s" : "3s"
                }`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
