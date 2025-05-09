// components/SectionDivider.tsx
import React from "react";
import styles from "../styles/SectionDivider.module.css";

interface SectionDividerProps {
  color?: string;
  variant?: "angle" | "straight" | "soft-edge";
  flip?: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  color,
  variant = "angle",
  flip = false,
}) => {
  const renderDivider = () => {
    switch (variant) {
      case "angle":
        return (
          <svg
            className={`${styles.divider} ${flip ? styles.flip : ""}`}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 60 0 0 1200 0 1200 120z"
              fill={color || "white"}
            ></path>
          </svg>
        );
      case "straight":
        return (
          <svg
            className={`${styles.divider} ${flip ? styles.flip : ""}`}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <rect width="1200" height="120" fill={color || "white"} />
          </svg>
        );
      case "soft-edge":
        return (
          <svg
            className={`${styles.divider} ${flip ? styles.flip : ""}`}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 120 0 20 C150 60 300 40 600 80 C900 120 1050 80 1200 100 L1200 120z"
              fill={color || "white"}
            ></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return <div className={styles.dividerContainer}>{renderDivider()}</div>;
};

export default SectionDivider;
