import { Bell, Menu, Moon, Search, Sun } from "lucide-react";

import { useState } from "react";

import { toast } from "sonner";

import { Button } from "../ui/Button";

import { useUIStore } from "@/stores/uiStore";

import { GlobalSearch, MobileSearchOverlay } from "../global-search";

import { useIsMobile } from "@/hooks";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { theme, toggleTheme } = useUIStore();

  const isMobile = useIsMobile();

  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const isDark = theme === "dark";

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/60 bg-background/75 px-4 backdrop-blur-xl md:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-2xl lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />

            <span className="sr-only">Toggle menu</span>
          </Button>

          {/* Search */}
          <div className="hidden md:block">
            <GlobalSearch />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Mobile Search */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-2xl md:hidden"
            onClick={() => setIsMobileSearchOpen(true)}
          >
            <Search className="h-5 w-5" />

            <span className="sr-only">Search</span>
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-2xl"
            onClick={toggleTheme}
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}

            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-2xl"
            onClick={() =>
              toast("Notifications", {
                description: "Notifications feature is coming soon.",
              })
            }
          >
            <Bell className="h-5 w-5" />

            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-primary shadow-sm shadow-primary/50" />

            <span className="sr-only">Notifications</span>
          </Button>

          {/* User Avatar */}
          <Button
            variant="ghost"
            className="h-11 rounded-2xl px-2.5 hover:bg-accent/60"
            onClick={() =>
              toast("Profile", {
                description: "Profile menu is coming soon.",
              })
            }
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-violet-400 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20">
              TH
            </div>

            <div className="hidden text-left lg:block">
              <p className="text-sm font-semibold leading-none">T.Hegazy</p>

              <p className="mt-1 text-xs text-muted-foreground">
                Administrator
              </p>
            </div>
          </Button>
        </div>
      </header>

      <MobileSearchOverlay
        isOpen={isMobileSearchOpen}
        onClose={() => setIsMobileSearchOpen(false)}
      />
    </>
  );
}
