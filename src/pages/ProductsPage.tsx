import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/Button";

import { useCategories, usePaginatedProducts } from "@/hooks";

import { useUIStore } from "@/stores/uiStore";

import { ErrorState } from "@/components/ui";

import { toast } from "sonner";

import {
  ProductEmptyState,
  ProductFilters,
  ProductPagination,
  ProductsGrid,
} from "@/components/products";
import type { Product, Category, SortOption } from "@/types";

import { PageHeader } from "@/components/layout";
import { useProductDetailsStore } from "@/stores/productDetailsStore";

export function ProductsPage() {
  const { data: categoriesData } = useCategories();

  const categories: Category[] = categoriesData || [];
  const [searchParams, setSearchParams] = useSearchParams();

  const { viewMode, setViewMode } = useUIStore();

  const PRODUCTS_PER_PAGE = 12;

  // URL State
  const searchQuery = searchParams.get("search") || "";

  const activeCategory = searchParams.get("category") || "all";

  const sortBy = (searchParams.get("sort") as SortOption) || "default";

  const currentPage = Number(searchParams.get("page") || "1");
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [lastCategory, setLastCategory] = useState(activeCategory);
  const { openModal } = useProductDetailsStore();

  useEffect(() => {
    if (searchQuery !== localSearch) {
      setLocalSearch(searchQuery);
    }

    if (searchQuery === "") {
      setLocalSearch("");
    }
  }, [searchQuery]);
  // useEffect(() => {
  //   updateSearchParams({
  //     search: localSearch,
  //     category: localSearch.trim() !== "" ? "all" : activeCategory,
  //     page: "1",
  //   });
  // }, [localSearch]);
  useEffect(() => {
    updateSearchParams({
      search: localSearch,
      category: localSearch.trim() !== "" ? "all" : lastCategory,
      page: "1",
    });
  }, [localSearch]);

  // Helper Function
  const updateSearchParams = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (
        value === "" ||
        value === "all" ||
        value === "default" ||
        value === "1"
      ) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    setSearchParams(params);
  };

  // Products Query
  const { data, isLoading, isError, refetch } = usePaginatedProducts({
    page: currentPage,

    limit: PRODUCTS_PER_PAGE,

    search: localSearch,

    category: activeCategory !== "all" ? activeCategory : undefined,
  });

  const products: Product[] = data?.products || [];
  const total = data?.total || 0;

  // Sorting
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;

      case "price-high":
        return b.price - a.price;

      case "rating":
        return b.rating - a.rating;

      case "stock":
        return b.stock - a.stock;

      default:
        return 0;
    }
  });

  // Local Pagination For Search
  const paginatedProducts =
    localSearch.trim() !== ""
      ? sortedProducts.slice(
          (currentPage - 1) * PRODUCTS_PER_PAGE,

          currentPage * PRODUCTS_PER_PAGE,
        )
      : sortedProducts;

  // Scroll To Top
  useEffect(() => {
    const container = document.getElementById("dashboard-content");

    container?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  // Error State
  if (isError) {
    return (
      <ErrorState
        title="Failed to load products"
        message="There was a problem loading products."
        onRetry={refetch}
      />
    );
  }

  // Pagination
  const totalPages =
    localSearch.trim() !== ""
      ? Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE)
      : Math.ceil(total / PRODUCTS_PER_PAGE);

  const getPaginationPages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const startPage = Math.max(2, currentPage - 1);

      const endPage = Math.min(totalPages - 1, currentPage + 2);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const paginationPages = getPaginationPages();

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <PageHeader
        title="Products"
        description="Manage your product inventory and listings."
        action={
          <Button
            onClick={() =>
              toast("Coming Soon 🚀", {
                description: "This feature is not implemented yet.",
              })
            }
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        }
      />

      {/* Filters */}
      <ProductFilters
        searchQuery={localSearch}
        setSearchQuery={(value) => {
          setLocalSearch(value);
          updateSearchParams({
            search: value,
            page: "1",
          });
        }}
        activeCategory={activeCategory}
        setCategoryFilter={(value) => {
          setLastCategory(value);

          updateSearchParams({
            search: "",
            category: value,
            page: "1",
          });
        }}
        categories={categories}
        sortBy={sortBy}
        setSortBy={(value) => {
          updateSearchParams({
            sort: value,
            page: "1",
          });
        }}
        viewMode={viewMode}
        setViewMode={setViewMode}
        setCurrentPage={(page) => {
          updateSearchParams({
            page: page.toString(),
          });
        }}
        onReset={() => {
          setLocalSearch("");

          setSearchParams({});
        }}
      />

      {/* Products Grid */}
      <ProductsGrid
        products={paginatedProducts}
        isLoading={isLoading}
        viewMode={viewMode}
        onOpenDetails={(id) => {
          openModal(id);
        }}
      />

      {/* Empty State */}
      {sortedProducts.length === 0 && (
        <ProductEmptyState searchQuery={localSearch} />
      )}

      {/* Pagination */}
      {sortedProducts.length > 0 && (
        <ProductPagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginationPages={paginationPages}
          setCurrentPage={(page) =>
            updateSearchParams({
              page: page.toString(),
            })
          }
        />
      )}
    </div>
  );
}
