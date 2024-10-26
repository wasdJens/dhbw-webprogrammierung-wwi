import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BeerHeader from "./ui/beer-header";
import BeerFooter from "./ui/beer-footer";
import styles from './layout.module.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Beer App",
  description: "Sample app to introduce NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.layout}`}>
        <header className={styles.header}>
          <BeerHeader></BeerHeader>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <BeerFooter></BeerFooter>
        </footer>
      </body>
    </html>
  );
}
