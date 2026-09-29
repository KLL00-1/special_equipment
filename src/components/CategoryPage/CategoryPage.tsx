import Link from "next/link";
import { catalog } from "@/data/services";
import styles from "./CategoryPage.module.css";

type CategoryId = (typeof catalog.categories)[number]["id"];

type CategoryPageProps = {
  categoryId: CategoryId;
  description: string;
};

export default function CategoryPage({
  categoryId,
  description,
}: CategoryPageProps) {
  const category = catalog.categories.find(
    (item) => item.id === categoryId,
  );

  if (!category) {
    throw new Error(`Неизвестная категория: ${categoryId}`);
  }

  const services = catalog.services.filter(
    (service) => service.category === categoryId,
  );

  return (
    <div className={styles.page}>
      <nav aria-label="Хлебные крошки">
        <ol className={styles.breadcrumbs}>
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li aria-current="page">{category.title}</li>
        </ol>
      </nav>

      <header className={styles.header}>
        <h1>{category.title}</h1>
        <p>{description}</p>
      </header>

      <section aria-labelledby="category-services">
        <h2 id="category-services">Доступные услуги</h2>

        <ul className={styles.services}>
          {services.map((service) => (
            <li key={service.id} className={styles.service}>
              <h3>{service.title}</h3>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}