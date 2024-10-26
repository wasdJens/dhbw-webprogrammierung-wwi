"use client";

import { useState } from "react";
import styles from "./beer-header.module.css";
import Link from "next/link";

export default function BeerHeader() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>Beer App</h1>
        <h1
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={isHovered ? styles.shake : ""}
        >
          🍻
          {isHovered && <span className={styles.prost}>Prost!</span>}
        </h1>
      </div>
      <nav className={styles.navigation}>
        <Link href="/">🍺 Home</Link>
        <a
          href="https://www.bierbewusstgeniessen.de/drink-responsibly/"
          target="_blank"
        >
          ⚠️ Drink Responsible
        </a>
      </nav>
    </div>
  );
}
