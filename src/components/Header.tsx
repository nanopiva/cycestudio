"use client";
import styles from "@/styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logocyc.jpg";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src={logo}
              alt="Logo C&C Soluciones Legales"
              width={64}
              height={64}
              className={styles.logo}
              priority
            />
            <div className={styles.logoText}>
              <h1 className={styles.brandName}>C&C Soluciones Legales</h1>
              <p className={styles.brandSubtitle}>Estudio jurídico integral</p>
            </div>
          </Link>
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IoClose size={24} /> : <FaBars size={20} />}
        </button>

        <nav
          className={`${styles.navigation} ${isMenuOpen ? styles.open : ""}`}
        >
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link
                href="/"
                className={`${styles.navLink} ${
                  pathname === "/" ? styles.active : ""
                }`}
              >
                Inicio
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
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
