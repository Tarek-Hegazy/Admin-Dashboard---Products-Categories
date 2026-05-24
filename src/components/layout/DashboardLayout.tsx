import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/stores/uiStore";
import { useProductDetailsStore } from "@/stores/productDetailsStore";
import { ProductDetailsModal } from "../product-details";

export function DashboardLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isSidebarOpen, toggleSidebar } = useUIStore();
  const { selectedProductId, isOpen, closeModal } = useProductDetailsStore();
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar
        isCollapsed={!isSidebarOpen}
        onToggle={toggleSidebar}
        isMobileOpen={isMobileOpen}
        onMobileClose={() => setIsMobileOpen(false)}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header onMenuClick={() => setIsMobileOpen(true)} />

        <main
          id="dashboard-content"
          className={cn(
            "flex-1 overflow-y-auto bg-gradient-to-b from-background to-muted/20 p-4 md:p-5 lg:p-7",
            "transition-all duration-300",
          )}
        >
          <Outlet />
          <ProductDetailsModal
            productId={selectedProductId}
            open={isOpen}
            onOpenChange={(open) => {
              if (!open) {
                closeModal();
              }
            }}
          />
        </main>
      </div>
    </div>
  );
}
