import { Star } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

import { Badge } from "@/components/ui/Bagde";

import { ProductActions } from "./ProductActions";

interface ProductInfoProps {
  product: any;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <Card className="border-border/50 bg-card/70">
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div>
          <CardTitle className="text-xl leading-tight">
            {product.title}
          </CardTitle>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{product.brand}</Badge>

            <Badge variant="outline">{product.category}</Badge>
          </div>
        </div>

        <ProductActions />
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Description */}
        <div>
          <h3 className="mb-2 text-sm font-semibold">Description</h3>

          <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
            {product.description}
          </p>
        </div>

        {/* Price */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-2xl font-bold">
            ${product.price.toFixed(2)}
          </span>

          <Badge className="bg-green-600 hover:bg-green-600">
            -{product.discountPercentage}%
          </Badge>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

          <span className="font-medium">{product.rating}</span>

          <span className="text-sm text-muted-foreground">Product Rating</span>
        </div>

        {/* Tags */}
        {product.tags?.length > 0 && (
          <div>
            <h3 className="mb-2 text-sm font-semibold">Tags</h3>

            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag: string) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
