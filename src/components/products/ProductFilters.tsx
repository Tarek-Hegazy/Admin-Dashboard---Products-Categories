import {
  Button,
  Card,
  CardContent,
  SearchInput,
  AppSelect,
} from "@/components/ui";
import type { Category, SortOption, ViewMode } from "@/types";

interface ProductFiltersProps {
  searchQuery: string;

  setSearchQuery: (value: string) => void;

  activeCategory: string;

  setCategoryFilter: (value: string) => void;

  categories: Category[];

  sortBy: SortOption;

  setSortBy: (value: SortOption) => void;

  viewMode: ViewMode;

  setViewMode: (mode: ViewMode) => void;

  setCurrentPage: (page: number) => void;
  onReset: () => void;
}

export function ProductFilters({
  searchQuery,
  setSearchQuery,

  activeCategory,
  setCategoryFilter,

  categories,

  sortBy,
  setSortBy,

  viewMode,
  setViewMode,

  setCurrentPage,
  onReset,
}: ProductFiltersProps) {
  return (
    <Card className="border-border/50 bg-card/60">
      <CardContent className="p-3 md:p-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          {/* Search */}
          <SearchInput
            value={searchQuery}
            onChange={(value) => {
              setSearchQuery(value);

              if (value.trim() !== "") {
                setCategoryFilter("all");
              }
            }}
            placeholder="Search products..."
            className="h-11 flex-1"
          />

          {/* Categories */}
          <AppSelect
            value={activeCategory}
            onValueChange={(value) => {
              setSearchQuery("");
              setCategoryFilter(value);
            }}
            placeholder="Category"
            className="h-11 w-full sm:w-40"
            options={[
              {
                label: "All Categories",
                value: "all",
              },

              ...categories.map((category) => ({
                label: category.name,

                value: category.slug,
              })),
            ]}
          />

          {/* Sort */}
          <AppSelect
            value={sortBy}
            onValueChange={(value) => {
              setSortBy(value as SortOption);
            }}
            placeholder="Sort By"
            className="h-11 w-full sm:w-44"
            options={[
              {
                label: "Default",
                value: "default",
              },

              {
                label: "Price: Low to High",

                value: "price-low",
              },

              {
                label: "Price: High to Low",

                value: "price-high",
              },

              {
                label: "Rating",
                value: "rating",
              },

              {
                label: "Stock",
                value: "stock",
              },
            ]}
          />

          {/* Reset */}
          <Button
            variant="outline"
            onClick={onReset}
            className="h-11 rounded-2xl px-5"
          >
            Reset
          </Button>

          {/* View Mode */}
          <div className="flex items-center gap-2">
            <Button
              size="lg"
              variant={viewMode === "grid" ? "default" : "outline"}
              onClick={() => setViewMode("grid")}
              className="h-11 rounded-2xl px-5"
            >
              Grid
            </Button>

            <Button
              size="lg"
              variant={viewMode === "list" ? "default" : "outline"}
              onClick={() => setViewMode("list")}
              className="h-11 rounded-2xl px-5"
            >
              List
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
