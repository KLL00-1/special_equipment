import Link from "next/link";
import { company } from "@/data/company";
import { catalog } from "@/data/services";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.region}>{company.region}</p>

        <h1 className={styles.title}>
          Техника, материалы и земляные работы
        </h1>

        <p className={styles.intro}>
          Доставка песка, щебня и грунта. Аренда спецтехники
          и разработка котлованов в Москве и Московской области.
        </p>
      </header>

      <section aria-labelledby="services-heading">
        <h2 id="services-heading">Наши направления</h2>

        <div className={styles.grid}>
          {catalog.categories.map((category) => (
            <Link
              key={category.id}
              href={category.path}
              className={styles.card}
              aria-labelledby={`category-${category.id}`}
            >
              <h3 id={`category-${category.id}`}>
                {category.title}
              </h3>

              <ul className={styles.list}>
                {catalog.services
                  .filter(
                    (service) => service.category === category.id,
                  )
                  .map((service) => (
                    <li key={service.id}>{service.title}</li>
                  ))}
              </ul>

              <span className={styles.more}>Подробнее</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}