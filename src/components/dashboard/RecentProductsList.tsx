import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
} from "@/components/ui";

import { ArrowRight } from "lucide-react";

import { RecentProductItem } from "./RecentProductItem";

interface RecentProductsListProps {
  products: any[];
  onOpenDetails: (id: number) => void;
}

export function RecentProductsList({
  products,
  onOpenDetails,
}: RecentProductsListProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between border-b border-border/50 pb-5">
        <CardTitle>Recent Products</CardTitle>

        <Button variant="ghost" size="sm" asChild>
          <Link to="/products">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>

      <CardContent className="pt-6">
        {products.length === 0 ? (
          <div className="flex min-h-[250px] flex-col items-center justify-center text-center">
            <p className="text-lg font-medium">No Recent Products</p>

            <p className="mt-2 text-sm text-muted-foreground">
              Products will appear here once they are added.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {products.map((product) => (
              <RecentProductItem
                key={product.id}
                product={product}
                onOpenDetails={onOpenDetails}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
