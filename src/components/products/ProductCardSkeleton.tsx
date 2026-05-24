import { Card, CardContent } from "@/components/ui/Card";

import { Skeleton } from "@/components/ui";

export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden border-border/50 bg-card/80">
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-muted/30 p-3">
        <Skeleton className="h-full w-full rounded-2xl" />
      </div>

      {/* Content */}
      <CardContent className="space-y-2.5 p-3.5">
        {/* Title + Category */}
        <div className="space-y-1">
          <Skeleton className="h-5 w-4/5 rounded-md" />

          <Skeleton className="h-4 w-1/3 rounded-md" />
        </div>

        {/* Description */}
        <Skeleton className="h-4 w-full rounded-md" />

        {/* Discount + Rating */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-16 rounded-full" />

          <Skeleton className="h-5 w-12 rounded-md" />
        </div>

        {/* Price + Stock */}
        <div className="flex items-center justify-between pt-1">
          <Skeleton className="h-7 w-20 rounded-md" />

          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
}
