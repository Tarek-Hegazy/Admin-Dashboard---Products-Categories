import { useEffect, useState } from "react";
import { Plus, Search, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { useCategories } from "@/hooks/useCategories";
import { useProducts } from "@/hooks";
import { Link, useSearchParams } from "react-router-dom";
import { Loader, ErrorState, SearchInput } from "@/components/ui";
import {
  CategoryCard,
  CategoryCardSkeleton,
  CategoryEmptyState,
} from "@/components/categories/";
import { PageHeader } from "@/components/layout";
import { toast } from "sonner";

export function CategoriesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  const [localSearch, setLocalSearch] = useState(searchQuery);
  const { data } = useProducts();

  const products = data?.products || [];
  const { data: categoriesData, isLoading, isError, refetch } = useCategories();
  const categories = categoriesData || [];
  const filteredCategories = categories.filter((category: any) =>
    category.name.toLowerCase().includes(localSearch.toLowerCase()),
  );
  useEffect(() => {
    setLocalSearch(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (localSearch.trim()) {
      params.set("search", localSearch);
    } else {
      params.delete("search");
    }

    setSearchParams(params);
  }, [localSearch]);
  // console.log(filteredCategories);

  if (isError) {
    return (
      <ErrorState
        title="Failed to load categories"
        message="There was a problem loading categories."
        onRetry={refetch}
      />
    );
  }

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <PageHeader
        title="Categories"
        description="Manage your product categories."
        action={
          <Button
            onClick={() =>
              toast("Coming Soon 🚀", {
                description: "This feature is not implemented yet.",
              })
            }
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Category
          </Button>
        }
      />

      {/* Search */}
      <Card className="border-border/50 bg-card/60">
        <CardContent className="p-3 md:p-4">
          <div className="max-w-md">
            <SearchInput
              value={localSearch}
              onChange={setLocalSearch}
              placeholder="Search categories..."
              className="h-11"
            />
          </div>
        </CardContent>
      </Card>

      {/* Categories Grid */}
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <CategoryCardSkeleton key={index} />
            ))
          : filteredCategories.map((category: any) => {
              const productCount = products.filter(
                (product: any) => product.category === category.slug,
              ).length;

              return (
                <CategoryCard
                  key={category.slug}
                  category={category}
                  productCount={productCount}
                />
              );
            })}
      </div>

      {/* Empty State */}
      {filteredCategories.length === 0 && (
        <CategoryEmptyState searchQuery={localSearch} />
      )}
    </div>
  );
}
