import Link from "next/link";
import { company } from "@/data/company";
import { catalog } from "@/data/services";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div>
            <Link href="/" className={styles.logo}>
              {company.name}
            </Link>

            <p className={styles.region}>{company.region}</p>
          </div>

          <div className={styles.contacts}>
            <ul className={styles.contactList} aria-label="Способы связи">
              {company.contacts.map((contact) => (
                <li key={contact.id}>
                  {contact.href ? (
                    <a href={contact.href} className={styles.contact}>
                      {contact.label}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className={styles.contact}
                      disabled
                    >
                      {contact.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            <p className={styles.note}>Контакты пока не подключены</p>
          </div>
        </div>

        <nav className={styles.nav} aria-label="Основная навигация">
          <Link href="/">Главная</Link>

          {catalog.categories.map((category) => (
            <Link key={category.id} href={category.path}>
              {category.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}