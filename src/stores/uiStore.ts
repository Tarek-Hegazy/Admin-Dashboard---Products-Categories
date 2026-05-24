import { create } from "zustand";

import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";
import type { ViewMode } from "@/types";

interface UIStore {
  isSidebarOpen: boolean;

  toggleSidebar: () => void;

  theme: "light" | "dark";

  toggleTheme: () => void;

  viewMode: ViewMode;

  setViewMode: (mode: ViewMode) => void;
}

export const useUIStore = create<UIStore>()(
  persist(
    (set) => ({
      // Sidebar
      isSidebarOpen: true,

      toggleSidebar: () =>
        set((state: UIStore) => ({
          isSidebarOpen: !state.isSidebarOpen,
        })),

      // Theme
      theme: document.documentElement.classList.contains("dark")
        ? "dark"
        : "light",

      toggleTheme: () =>
        set((state: UIStore) => {
          const newTheme = state.theme === "light" ? "dark" : "light";

          document.documentElement.classList.toggle(
            "dark",
            newTheme === "dark",
          );

          return {
            theme: newTheme,
          };
        }),

      // View Mode
      viewMode: "grid",

      setViewMode: (mode: ViewMode) => {
        set({
          viewMode: mode,
        });
      },
    }),

    {
      name: "ui-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
