"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "../app/page.module.css";

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  delay = 0,
  threshold = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; // Capturar el valor actual

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el elemento es visible según el umbral
        if (entry.isIntersecting) {
          // Aplicar delay si está configurado
          setTimeout(() => {
            setIsVisible(true);
          }, delay);

          // Una vez que es visible, no necesitamos seguir observando
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      { threshold }
    );

    // Observar el elemento si existe
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Limpiar el observer al desmontar
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={`${styles.scrollFadeIn} ${isVisible ? styles.visible : ""}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
