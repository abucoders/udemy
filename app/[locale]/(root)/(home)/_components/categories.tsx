"use client";

import { useTranslations } from "next-intl";

import CategoryCard from "@/components/cards/category-card";
import { categories } from "@/constants";

function Categories() {
  const t = useTranslations();

  return (
    <div className="container mx-auto max-w-6xl py-12">
      <div className="flex flex-col space-y-1">
        <h1 className="font-spaceGrotesk text-3xl font-bold">
          {t("TopCategories.title")}
        </h1>
        <p className="text-muted-foreground text-sm">
          {t("TopCategories.description")}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.label} {...category} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
