import Image, { StaticImageData } from "next/image";
import styles from "../styles/Hero.module.css";

interface HeroProps {
  imageSrc: StaticImageData;
  title: string;
  subtitle?: string;
}

export default function Hero({ imageSrc, title, subtitle }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          className={styles.image}
          quality={90}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
