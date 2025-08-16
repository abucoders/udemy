import Image from "next/image";

import { ICategory } from "@/types";

function CategoryCard(category: ICategory) {
  return (
    <div>
      <div className="bg-secondary flex h-44 w-full items-center justify-center rounded-md">
        <Image
          src={category.icon}
          alt={category.label}
          width={100}
          height={100}
        />
      </div>
      <h2 className="font-spaceGrotesk mt-2 line-clamp-1 text-lg">
        {category.label}
      </h2>
    </div>
  );
}

export default CategoryCard;
