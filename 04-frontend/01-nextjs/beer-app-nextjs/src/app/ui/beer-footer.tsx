"use client";

import styles from "./beer-footer.module.css";

export default function BeerFooter() {
  return (
    <div className={styles.footer}>
      <div>
        <p>
          Diese Webseite dient nur für Unterhaltunszwecke und wurde im Rahmen
          der Web Programmierung Vorlesung 2024 entwickelt
        </p>
        <p>Made with ❤️ by Jens Reiner</p>
      </div>
      <div className={styles.links}>
        <a
          href="https://www.bundesdrogenbeauftragter.de/service/beratungsangebote/"
          target="_blank"
        >
          🔗 Beratungsangebote
        </a>
        <a
          href="https://www.dhs.de/service/suchthilfeverzeichnis"
          target="_blank"
        >
          🔗 Deutsche Hauptstelle für Suchtfragen
        </a>
      </div>
    </div>
  );
}
