import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { company } from "@/data/company";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: {
    default: "Спецтехника и доставка материалов в Москве и МО",
    template: "%s | Спецтехника",
  },
  description:
    `Аренда спецтехники, доставка песка, щебня и грунта, ` +
    `земляные работы. Регион обслуживания: ${company.region}.`,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={styles.body}>
        <LinkToContent />
        <Header />

        <main id="main-content" className={styles.main} tabIndex={-1}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

function LinkToContent() {
  return (
    <a href="#main-content" className={styles.skipLink}>
      Перейти к содержимому
    </a>
  );
}