import { useEffect, useMemo } from "react";

import { SearchInput } from "@/components/ui";

import { useProducts, useCategories } from "@/hooks";

import { useGlobalSearchStore } from "@/stores/globalSearchStore";

import { SearchResults } from "./SearchResults";

interface GlobalSearchProps {
  autoFocus?: boolean;

  onCloseOverlay?: () => void;
}

export function GlobalSearch({
  autoFocus = false,
  onCloseOverlay,
}: GlobalSearchProps) {
  const { query, setQuery, isOpen, openSearch, closeSearch } =
    useGlobalSearchStore();

  const { data } = useProducts();

  const { data: categories } = useCategories();

  const products = data?.products || [];

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];

    return products
      .filter((product: any) =>
        product.title.toLowerCase().includes(query.toLowerCase()),
      )
      .slice(0, 5);
  }, [products, query]);

  const filteredCategories = useMemo(() => {
    if (!query.trim()) return [];

    return categories
      ?.filter((category: any) =>
        category.name.toLowerCase().includes(query.toLowerCase()),
      )
      .slice(0, 5);
  }, [categories, query]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeSearch();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeSearch]);

  return (
    <div
      className="relative w-full lg:w-80"
      onBlur={(event) => {
        const nextFocusedElement = event.relatedTarget as Node | null;

        if (!event.currentTarget.contains(nextFocusedElement)) {
          closeSearch();
        }
      }}
    >
      <SearchInput
        autoFocus={autoFocus}
        onFocus={() => {
          if (query.trim()) {
            openSearch();
          }
        }}
        value={query}
        onChange={(value) => {
          setQuery(value);

          if (value.trim()) {
            openSearch();
          } else {
            closeSearch();
          }
        }}
        placeholder="Search products or categories..."
      />

      {isOpen && (
        <SearchResults
          query={query}
          products={filteredProducts}
          categories={filteredCategories || []}
          closeSearch={closeSearch}
          onCloseOverlay={onCloseOverlay}
        />
      )}
    </div>
  );
}
