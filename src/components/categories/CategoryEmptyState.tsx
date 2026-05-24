import { Card } from "@/components/ui";
import { Package } from "lucide-react";

interface CategoryEmptyStateProps {
  searchQuery: string;
}

export function CategoryEmptyState({ searchQuery }: CategoryEmptyStateProps) {
  return (
    <Card className="border-dashed border-border/60 bg-card/50 p-14">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 rounded-2xl bg-muted p-4">
          <Package className="h-6 w-6 text-muted-foreground" />
        </div>
        <p className="text-lg font-medium">No categories found</p>
        <p className="text-sm text-muted-foreground">
          No categories match "{searchQuery}"
        </p>
      </div>
    </Card>
  );
}
