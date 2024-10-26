"use client";

import styles from "./beer-mug.module.css";

function BeerMug({ rating = 1, onClick }) {
  const fillHeight = rating * 20;
  const fillY = 140 - fillHeight; // Position des Füllstarts von unten
  const foamHeight = 10;
  return (
    <svg
      className={styles.beerMug}
      width="100"
      height="150"
      viewBox="0 0 100 150"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      {/* Hintergrund: Glas Segmente für Maßkrug-Effekt */}
      <defs>
        <pattern
          id="glassPattern"
          width="15"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect width="15" height="20" fill="rgba(255, 255, 255, 0.2)" />
          <circle cx="7.5" cy="10" r="6" fill="rgba(255, 255, 255, 0.1)" />
        </pattern>
      </defs>

      {/* Glasumriss mit Muster */}
      <rect
        x="10"
        y="10"
        width="60"
        height="130"
        rx="10"
        ry="10"
        fill="url(#glassPattern)"
        stroke="#8b8b8b"
        strokeWidth="2"
      />

      {/* Griff rechts */}
      <rect
        x="70"
        y="30"
        width="15"
        height="90"
        rx="8"
        ry="8"
        fill="none"
        stroke="#8b8b8b"
        strokeWidth="2"
      />

      {/* Bierfüllung */}
      <rect
        x="10"
        y={fillY} // Position der Füllung von unten
        width="60"
        height={fillHeight} // Höhe der Füllung basierend auf dem Rating
        rx="10"
        ry="10"
        fill="#F8D568"
      />

      {/* Blubberblasen */}
      {rating > 1 && (
        <>
          <circle
            className={styles.bubble}
            cx="30"
            cy={fillY + 15}
            r="3"
            fill="#FFF5E1"
          />
          <circle
            className={styles.bubble}
            cx="50"
            cy={fillY + 25}
            r="2"
            fill="#FFF5E1"
          />
          <circle
            className={styles.bubble}
            cx="40"
            cy={fillY + 35}
            r="4"
            fill="#FFF5E1"
          />
        </>
      )}

      {/* Schaumkrone */}
      <ellipse
        cx="40"
        cy={fillY} // Position der Schaumkrone am oberen Rand des Bieres
        rx="30"
        ry={foamHeight}
        fill="#FFF5E1" // Farbe für die Schaumkrone
        stroke="#e1d5c9" // leichter Rand für Kontrast
        strokeWidth="1"
      />

      {/* Überlaufender Schaum nur bei Rating 5 */}
      {rating === 5 && (
        <ellipse
          cx="40"
          cy={fillY - foamHeight} // Position leicht über dem Bierkrug
          rx="30"
          ry="15"
          fill="#FFF5E1"
          stroke="#e1d5c9"
          strokeWidth="2"
          className={styles.overflowFoam} // Animation für überlaufenden Schaum
        />
      )}

      {/* Verstärkter Glaseffekt / Reflexionen */}
      <rect
        x="15"
        y="15"
        width="5"
        height="120"
        fill="rgba(255, 255, 255, 0.3)"
        rx="2"
        ry="2"
      />
      <rect
        x="40"
        y="15"
        width="3"
        height="120"
        fill="rgba(255, 255, 255, 0.2)"
        rx="2"
        ry="2"
      />
      <rect
        x="55"
        y="15"
        width="3"
        height="120"
        fill="rgba(255, 255, 255, 0.2)"
        rx="2"
        ry="2"
      />
    </svg>
  );
}

export default BeerMug;
