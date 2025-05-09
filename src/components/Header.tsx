"use client";
import styles from "@/styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logocyc.jpg";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            alt="Logo del Estudio"
            width={60}
            height={60}
            className={styles.logo}
          />
          <div className={styles.brandText}>
            <span className={styles.brandName}>C&C Soluciones Legales</span>
            <span className={styles.brandSub}>Estudio jurídico integral</span>
          </div>
        </div>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link
              href="/"
              className={`${styles.navLink} ${
                pathname === "/" ? styles.active : ""
              }`}
            >
              Inicio
              <span className={styles.linkUnderline}></span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/areas"
              className={`${styles.navLink} ${
                pathname.startsWith("/areas") ? styles.active : ""
              }`}
            >
              Áreas de práctica
              <span className={styles.linkUnderline}></span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/nosotros"
              className={`${styles.navLink} ${
                pathname.startsWith("/nosotros") ? styles.active : ""
              }`}
            >
              Nosotros
              <span className={styles.linkUnderline}></span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/contacto"
              className={`${styles.navLink} ${
                pathname.startsWith("/contacto") ? styles.active : ""
              }`}
            >
              Contacto
              <span className={styles.linkUnderline}></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
