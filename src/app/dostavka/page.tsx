import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage/CategoryPage";

const description =
  "Доставка песка, щебня, пескогрунта и чернозёма в Москве и Московской области.";

export const metadata: Metadata = {
  title: "Доставка материалов в Москве и МО",
  description,
};

export default function DeliveryPage() {
  return (
    <CategoryPage
      categoryId="delivery"
      description={description}
    />
  );
}