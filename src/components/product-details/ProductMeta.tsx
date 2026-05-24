import { Card, CardContent } from "@/components/ui";

interface ProductMetaProps {
  product: any;
}

export function ProductMeta({ product }: ProductMetaProps) {
  return (
    <Card className="border-border/50 bg-card/70">
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">Product ID</span>

          <span className="font-medium">#{product.id}</span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">Brand</span>

          <span className="font-medium">{product.brand}</span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">Category</span>

          <span className="font-medium capitalize">{product.category}</span>
        </div>
      </CardContent>
    </Card>
  );
}
