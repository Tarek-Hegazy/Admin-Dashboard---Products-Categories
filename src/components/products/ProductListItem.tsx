import { Card, CardContent } from "@/components/ui";

import { cn } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductListItemProps {
  product: Product;
  onOpenDetails: (id: number) => void;
}

export function ProductListItem({
  product,
  onOpenDetails,
}: ProductListItemProps) {
  return (
    <Card
      onClick={() => onOpenDetails(product.id)}
      className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg"
    >
      <div className="flex flex-row items-center">
        <div className="h-36 w-36 shrink-0 overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <CardContent className="flex flex-1 flex-col justify-between p-4">
          <div>
            <div className="mb-2 flex items-start justify-between gap-2">
              <div>
                <h3 className="line-clamp-2 font-semibold leading-tight">
                  {product.title}
                </h3>

                <p className="mt-1 text-sm capitalize text-primary/80 font-medium">
                  {product.category}
                </p>
              </div>
            </div>

            <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>

            <div className="mb-3 flex items-center gap-4 text-sm">
              <span className="font-medium text-green-600">
                -{product.discountPercentage}%
              </span>

              <span>⭐ {product.rating}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">
              ${product.price.toFixed(2)}
            </span>

            <span
              className={cn(
                "text-sm",

                product.stock > 0 ? "text-muted-foreground" : "text-rose-600",
              )}
            >
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </span>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
