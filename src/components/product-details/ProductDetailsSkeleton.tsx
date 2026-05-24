import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui";

export function ProductDetailsSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-10 w-24" />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Image Section */}
        <Card className="overflow-hidden">
          <CardContent className="space-y-4 p-4">
            <Skeleton className="aspect-square w-full rounded-xl" />

            <div className="flex gap-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} className="h-20 w-20 rounded-lg" />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Details Section */}
        <div className="space-y-6">
          {/* Main Info */}
          <Card>
            <CardHeader className="space-y-4">
              <Skeleton className="h-8 w-2/3" />

              <Skeleton className="h-4 w-24" />
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />

                <Skeleton className="h-4 w-5/6" />

                <Skeleton className="h-4 w-2/3" />
              </div>

              <Skeleton className="h-10 w-32" />
            </CardContent>
          </Card>

          {/* Inventory */}
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Skeleton className="h-14 w-14 rounded-lg" />

              <div className="space-y-2">
                <Skeleton className="h-8 w-16" />

                <Skeleton className="h-4 w-24" />
              </div>
            </CardContent>
          </Card>

          {/* Details */}
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-24" />
            </CardHeader>

            <CardContent className="space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex justify-between">
                  <Skeleton className="h-4 w-24" />

                  <Skeleton className="h-4 w-16" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
