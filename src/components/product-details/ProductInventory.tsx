import { Package } from "lucide-react";

import { Card, CardContent } from "@/components/ui";

import { Badge } from "@/components/ui";

interface ProductInventoryProps {
  stock: number;
}

export function ProductInventory({ stock }: ProductInventoryProps) {
  return (
    <Card className="border-border/50 bg-card/70">
      <CardContent className="flex items-center justify-between p-5">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
            <Package className="h-5 w-5 text-primary" />
          </div>

          <div>
            <p className="text-2xl font-bold">{stock}</p>

            <p className="text-sm text-muted-foreground">Units in stock</p>
          </div>
        </div>

        <Badge
          variant={stock > 0 ? "secondary" : "destructive"}
          className="rounded-full"
        >
          {stock > 0 ? "Available" : "Out of stock"}
        </Badge>
      </CardContent>
    </Card>
  );
}
