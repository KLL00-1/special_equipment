import Link from "next/link";
import { company } from "@/data/company";
import { catalog } from "@/data/services";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <Link href="/" className={styles.logo}>
              {company.name}
            </Link>

            <p className={styles.text}>
              Аренда спецтехники, доставка материалов и земляные работы.
            </p>

            <p className={styles.text}>{company.region}</p>
          </div>

          <nav aria-label="Направления в подвале">
            <h2 className={styles.heading}>Направления</h2>

            <ul className={styles.list}>
              {catalog.categories.map((category) => (
                <li key={category.id}>
                  <Link href={category.path}>{category.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-contacts">
            <h2 id="footer-contacts" className={styles.heading}>
              Контакты
            </h2>

            <ul className={styles.list}>
              {company.contacts.map((contact) => (
                <li key={contact.id}>
                  {contact.href ? (
                    <a href={contact.href}>{contact.label}</a>
                  ) : (
                    <span className={styles.muted}>
                      {contact.label} — скоро
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className={styles.bottom}>
          <span>© {company.name}</span>
          <span>{company.region}</span>
        </div>
      </div>
    </footer>
  );
}