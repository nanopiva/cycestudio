import styles from "@/styles/Footer.module.css";
import Link from "next/link";

import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>C&C Soluciones Legales</h3>
          <p className={styles.footerSubtitle}>Estudio Jurídico Integral</p>
          <p className={styles.footerText}>
            Estamos para defender tus derechos y hacer valer tu voz ante la ley.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>Enlaces rápidos</h4>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/" className={styles.footerLink}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/areas" className={styles.footerLink}>
                Áreas de práctica
              </Link>
            </li>
            <li>
              <Link href="/nostros" className={styles.footerLink}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contacto" className={styles.footerLink}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>Contacto</h4>
          <address className={styles.footerContact}>
            <p className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span> Santa Fe - Entre
              Ríos
            </p>
            <p className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span> +54 9 3425 92-3017
            </p>
            <p className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span> +54 9 3435 02-8426
            </p>
            <p className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>{" "}
              solucioneslegalescyc@gmail.com
            </p>
          </address>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} CYC Soluciones Legales. Todos los
          derechos reservados.
        </p>
        <div className={styles.socialLinks}>
          <Link
            href="https://www.facebook.com/people/CC-Soluciones-Legales/100086176613563/"
            className={styles.socialLink}
            aria-label="Facebook de C&C Soluciones Legales"
          >
            <FaFacebookF className={styles.socialIcon} />
          </Link>
          <Link
            href="https://www.instagram.com/cyc.solucioneslegales/"
            className={styles.socialLink}
            aria-label="Instagram de C&C Soluciones Legales"
          >
            <FaInstagram className={styles.socialIcon} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
