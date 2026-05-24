import { Link } from "react-router-dom";

import { Card, CardContent, Badge } from "@/components/ui";

import { cn } from "@/lib/utils";

import type { Product } from "@/types";

import { Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onOpenDetails: (id: number) => void;
}

export function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  return (
    <Card
      onClick={() => onOpenDetails(product.id)}
      className="group h-full cursor-pointer overflow-hidden border-border/50 bg-card/80 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
    >
      {/* Image */}
      <div className="aspect-square p-3 overflow-hidden bg-muted/30">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <CardContent className="space-y-2.5 p-3.5">
        {/* Title + Category */}
        <div className="space-y-0.5">
          <h3 className="line-clamp-2 text-[15px] font-semibold leading-snug tracking-tight">
            {product.title}
          </h3>

          <p className="text-sm font-medium capitalize text-primary/80">
            {product.category}
          </p>
        </div>

        {/* Description */}
        <p className="line-clamp-1 text-xs leading-5 text-muted-foreground">
          {product.description}
        </p>

        {/* Discount + Rating */}
        <div className="flex items-center justify-between text-sm">
          <Badge
            variant="outline"
            className="rounded-full border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          >
            -{product.discountPercentage}%
          </Badge>

          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-amber-500" />

            <span className="text-sm font-semibold">{product.rating}</span>
          </div>
        </div>

        {/* Price + Stock */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-lg font-bold tracking-tight">
            ${product.price.toFixed(2)}
          </span>

          <Badge
            variant="outline"
            className={cn(
              "rounded-full",

              product.stock > 0
                ? "border-primary/20 bg-primary/5 text-muted-foreground"
                : "border-rose-500/20 bg-rose-500/10 text-rose-500",
            )}
          >
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
