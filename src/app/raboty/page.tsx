import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage/CategoryPage";

const description =
  "Земляные и проектные работы в Москве и Московской области. Разработка котлованов с расчётом стоимости под задачу.";

export const metadata: Metadata = {
  title: "Земляные работы в Москве и МО",
  description,
};

export default function WorksPage() {
  return <CategoryPage categoryId="works" description={description} />;
}
