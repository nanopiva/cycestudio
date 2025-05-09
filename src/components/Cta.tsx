"use client";

import Link from "next/link";
import styles from "../styles/Cta.module.css";

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  variant?: "primary" | "secondary";
  background?: "dark" | "light" | "gradient";
}

export default function CTA({
  title,
  description,
  buttonText,
  variant = "primary",
  background = "dark",
}: CTAProps) {
  // Determinar la clase de fondo según la prop background
  const getBackgroundClass = () => {
    switch (background) {
      case "light":
        return styles.light;
      case "gradient":
        return styles.gradient;
      default:
        return "";
    }
  };

  return (
    <section className={`${styles.ctaSection} ${getBackgroundClass()}`}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaHeader}>
            <div className={styles.decorativeLine}></div>
            <h2 className={styles.ctaTitle}>{title}</h2>
          </div>
          <p className={styles.ctaText}>{description}</p>
          <div className={styles.ctaAction}>
            <Link
              href="/contacto"
              className={`${styles.ctaButton} ${
                variant === "secondary" ? styles.ctaSecondary : ""
              }`}
            >
              <span>{buttonText}</span>
              <svg
                className={styles.ctaArrow}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
