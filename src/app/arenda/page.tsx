import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage/CategoryPage";

const description =
  "Аренда спецтехники в Москве и Московской области: экскаватор-погрузчик, гидромолот, каток и грузовой эвакуатор.";

export const metadata: Metadata = {
  title: "Аренда спецтехники в Москве и МО",
  description,
};

export default function RentalPage() {
  return (
    <CategoryPage
      categoryId="rental"
      description={description}
    />
  );
}