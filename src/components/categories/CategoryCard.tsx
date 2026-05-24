import { Link } from "react-router-dom";

import { Card, CardContent, Badge } from "@/components/ui";

import { Package } from "lucide-react";

import type { Category } from "@/types";

interface CategoryCardProps {
  category: Category;

  productCount: number;
}

export function CategoryCard({ category, productCount }: CategoryCardProps) {
  return (
    <Link to={`/products?category=${category.slug}`} className="group block">
      <Card className="h-full border-border/50 bg-card/60 transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.015] hover:shadow-lg">
        <CardContent className="flex h-full flex-col gap-5 p-6">
          {/* Top Section */}
          <div className="flex items-start justify-between gap-4">
            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 shadow-sm transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/15">
              <Package className="h-6 w-6 text-primary" />
            </div>

            {/* Product Count */}
            <Badge
              variant="outline"
              className="rounded-full border-border/50 bg-background/40 px-3 py-1 text-xs font-semibold shadow-sm"
            >
              {productCount} products
            </Badge>
          </div>

          {/* Content */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold capitalize tracking-tight text-foreground transition-colors group-hover:text-primary">
              {category.name}
            </h3>

            <p className="text-sm text-muted-foreground">
              Browse available products in this category.
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
