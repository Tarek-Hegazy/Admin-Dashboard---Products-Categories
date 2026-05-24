import { Package, FolderTree, Star, ShoppingCart } from "lucide-react";
import { useCategories, useProducts } from "@/hooks/";
import { Loader, ErrorState } from "@/components/ui";
import {
  StatsCardSkeleton,
  RecentProductsList,
  StatsCard,
} from "@/components/dashboard";
import { PageHeader } from "@/components/layout";
import { useState } from "react";
import { useProductDetailsStore } from "@/stores/productDetailsStore";

export function DashboardPage() {
  const { data, isLoading, isError, refetch } = useProducts();
  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    isError: categoriesError,
    refetch: refetchCategories,
  } = useCategories();
  const { openModal } = useProductDetailsStore();
  const products = data?.products || [];
  const categories = categoriesData || [];
  const recentProducts = products.slice(0, 5);
  const totalProducts = products.length;

  const totalCategories = categories.length;

  const totalStock = products.reduce(
    (acc: number, product: any) => acc + product.stock,
    0,
  );

  const averageRating =
    products.reduce((acc: number, product: any) => acc + product.rating, 0) /
      products.length || 0;

  const totalRevenue = products.reduce(
    (acc: number, product: any) => acc + product.price * product.stock,
    0,
  );
  const stats = [
    {
      title: "Total Products",
      value: totalProducts,
      icon: Package,
      trend: "+12%",
      trendUp: true,
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Categories",
      value: totalCategories,
      icon: FolderTree,
      trend: "+2",
      trendUp: true,
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "Average Rating",
      value: averageRating.toFixed(1),
      icon: Star,
      trend: "+4%",
      trendUp: true,
      color: "bg-amber-500/10 text-amber-600",
    },
    {
      title: "Total Stock",
      value: totalStock,
      icon: ShoppingCart,
      trend: "+8%",
      trendUp: true,
      color: "bg-rose-500/10 text-rose-600",
    },
  ];

  if (isError || categoriesError) {
    return (
      <ErrorState
        title="Failed to load dashboard"
        message="There was a problem loading dashboard."
        onRetry={refetch}
      />
    );
  }

  return (
    <div className="space-y-7">
      {/* Page Header */}
      <PageHeader
        title="Dashboard"
        description="Welcome back! Here's an overview of your store."
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {isLoading || categoriesLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <StatsCardSkeleton key={index} />
            ))
          : stats.map((stat) => <StatsCard key={stat.title} {...stat} />)}
      </div>

      {/* Recent Products */}
      <RecentProductsList
        products={recentProducts}
        onOpenDetails={(id) => {
          openModal(id);
        }}
      />
    </div>
  );
}
