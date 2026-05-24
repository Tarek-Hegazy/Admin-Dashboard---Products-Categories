import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "../ui/Button";

import { SidebarNavItem, navItems, bottomNavItems } from "./sidebar-components";

interface SidebarProps {
  isCollapsed: boolean;

  onToggle: () => void;

  isMobileOpen: boolean;

  onMobileClose: () => void;
}

export function Sidebar({
  isCollapsed,
  onToggle,
  isMobileOpen,
  onMobileClose,
}: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-border/60 bg-card/95 backdrop-blur-xl transition-all duration-300 lg:relative lg:z-auto",

          isCollapsed ? "w-20" : "w-72",

          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-border/60 px-4">
          {!isCollapsed ? (
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-violet-400 shadow-lg shadow-primary/20">
                <span className="text-sm font-bold text-primary-foreground">
                  A
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight">
                  Admin Dashboard
                </span>

                <span className="text-xs text-muted-foreground">
                  Management Panel
                </span>
              </div>
            </div>
          ) : (
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-violet-400 shadow-lg shadow-primary/20">
              <span className="text-sm font-bold text-primary-foreground">
                A
              </span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <div className="space-y-1">
            {!isCollapsed && (
              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                Main Menu
              </p>
            )}

            {navItems.map((item: any) => (
              <SidebarNavItem
                key={item.path}
                item={item}
                isCollapsed={isCollapsed}
                onClick={onMobileClose}
                end={item.path === "/"}
              />
            ))}
          </div>
        </nav>

        {/* Bottom Navigation */}
        <div className="space-y-1 border-t border-border/60 p-3">
          {!isCollapsed && (
            <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
              Support
            </p>
          )}

          {bottomNavItems.map((item: any) => (
            <SidebarNavItem
              key={item.path}
              item={item}
              isCollapsed={isCollapsed}
              onClick={onMobileClose}
            />
          ))}
        </div>

        {/* Collapse Toggle */}
        <div className="hidden border-t border-border/60 p-3 lg:block">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className={cn(
              "h-11 w-full justify-center rounded-2xl text-muted-foreground transition-all hover:bg-accent/60 hover:text-foreground",

              isCollapsed && "px-2",
            )}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <>
                <ChevronLeft className="mr-2 h-4 w-4" />

                <span>Collapse</span>
              </>
            )}
          </Button>
        </div>
      </aside>
    </>
  );
}
