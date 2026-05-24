import { Card, CardContent } from "@/components/ui";
import { Skeleton } from "@/components/ui";

export function CategoryCardSkeleton() {
  return (
    <Card className="border-border/50 bg-card/60">
      <CardContent className="flex flex-col gap-5 p-6">
        {/* Top Section */}
        <div className="flex items-start justify-between gap-4">
          {/* Icon */}
          <Skeleton className="h-14 w-14 rounded-2xl" />

          {/* Badge */}
          <Skeleton className="h-7 w-24 rounded-full" />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <Skeleton className="h-6 w-32 rounded-md" />

          <Skeleton className="h-4 w-full rounded-md" />

          <Skeleton className="h-4 w-3/4 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
}
