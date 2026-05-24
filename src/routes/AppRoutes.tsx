import { Routes, Route } from "react-router-dom";

import { DashboardLayout } from "@/components/layout/DashboardLayout";

import {
  DashboardPage,
  ProductsPage,
  CategoriesPage,
  ComingSoonPage,
  NotFoundPage,
} from "@/pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />

        <Route path="products" element={<ProductsPage />} />

        <Route path="categories" element={<CategoriesPage />} />

        <Route path="settings" element={<ComingSoonPage title="Settings" />} />

        <Route
          path="help"
          element={<ComingSoonPage title="Help & Support" />}
        />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
