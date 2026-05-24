import { Skeleton } from "@/components/ui/Skeleton";

export function RecentProductSkeleton() {
  return (
    <div className="flex items-center gap-4 rounded-lg border p-3">
      <Skeleton className="h-12 w-12 rounded-lg" />

      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-40" />

        <Skeleton className="h-3 w-24" />
      </div>

      <div className="space-y-2 text-right">
        <Skeleton className="h-4 w-16" />

        <Skeleton className="h-3 w-20" />
      </div>
    </div>
  );
}
