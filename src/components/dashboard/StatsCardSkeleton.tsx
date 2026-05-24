import { Card, CardContent } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

export function StatsCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-10 rounded-lg" />

          <Skeleton className="h-4 w-12" />
        </div>

        <div className="mt-4 space-y-2">
          <Skeleton className="h-8 w-24" />

          <Skeleton className="h-4 w-32" />
        </div>
      </CardContent>
    </Card>
  );
}
