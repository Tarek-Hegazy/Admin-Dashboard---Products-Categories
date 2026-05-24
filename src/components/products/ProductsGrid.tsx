import { cn } from "@/lib/utils";

import {
  ProductCard,
  ProductListItem,
  ProductCardSkeleton,
} from "@/components/products";
import type { Product, ViewMode } from "@/types";
interface ProductsGridProps {
  products: Product[];

  isLoading: boolean;

  viewMode: ViewMode;

  onOpenDetails: (id: number) => void;
}
export function ProductsGrid({
  products,
  isLoading,
  viewMode,
  onOpenDetails,
}: ProductsGridProps) {
  return (
    <div
      className={cn(
        "gap-5",

        viewMode === "grid"
          ? "grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
          : "flex flex-col gap-4",
      )}
    >
      {isLoading
        ? Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        : products.map((product) =>
            viewMode === "grid" ? (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={onOpenDetails}
              />
            ) : (
              <ProductListItem
                key={product.id}
                product={product}
                onOpenDetails={onOpenDetails}
              />
            ),
          )}
    </div>
  );
}
