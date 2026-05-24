import { Link } from "react-router-dom";

import { Search } from "lucide-react";

import { Card, CardContent } from "@/components/ui";
import { SearchResultGroup } from "./SearchResultGroup";
import { SearchResultItem } from "./SearchResultItem";

interface SearchResultsProps {
  query: string;

  products: any[];

  categories: any[];

  closeSearch: () => void;

  onCloseOverlay?: () => void;
}

export function SearchResults({
  query,
  products,
  categories,
  closeSearch,
  onCloseOverlay,
}: SearchResultsProps) {
  const hasResults = products.length > 0 || categories.length > 0;

  return (
    <Card className="absolute top-full z-50 mt-3 w-full overflow-hidden rounded-3xl border border-border/60 bg-popover shadow-2xl backdrop-blur-md">
      <CardContent className="p-3">
        {!hasResults ? (
          <div className="py-6 text-center">
            <p className="font-medium">No results found</p>

            <p className="text-sm text-muted-foreground">
              No matches for "{query}"
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {/* Products */}
            {products.length > 0 && (
              <SearchResultGroup title="Products" count={products.length}>
                {products.map((product) => (
                  <SearchResultItem
                    key={product.id}
                    title={product.title}
                    subtitle={`$${product.price}`}
                    image={product.thumbnail}
                    productId={product.id}
                    onClick={closeSearch}
                    onCloseOverlay={onCloseOverlay}
                  />
                ))}
              </SearchResultGroup>
            )}

            {/* Categories */}
            {categories.length > 0 && (
              <SearchResultGroup title="Categories" count={categories.length}>
                {categories.map((category) => (
                  <SearchResultItem
                    onCloseOverlay={onCloseOverlay}
                    key={category.slug}
                    title={category.name}
                    href={`/products?category=${category.slug}`}
                    onClick={closeSearch}
                  />
                ))}
              </SearchResultGroup>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
