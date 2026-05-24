import { PackageSearch } from "lucide-react";

interface ProductEmptyStateProps {
  searchQuery?: string;
}

export function ProductEmptyState({ searchQuery }: ProductEmptyStateProps) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-border/60 bg-card/40 text-center">
      <div className="rounded-full bg-muted p-4">
        <PackageSearch className="h-10 w-10 rounded-2xl bg-primary/10" />
      </div>

      <h3 className="mt-4 text-lg font-semibold">No Products Found</h3>

      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        {searchQuery
          ? `No products match "${searchQuery}".`
          : "There are no products available right now."}
      </p>
    </div>
  );
}
