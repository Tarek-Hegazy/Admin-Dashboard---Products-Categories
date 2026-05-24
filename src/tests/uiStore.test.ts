import { describe, it, expect } from "vitest";

import { useUIStore } from "@/stores/uiStore";

describe("UI Store", () => {
  it("should toggle theme", () => {
    const initialTheme = useUIStore.getState().theme;

    useUIStore.getState().toggleTheme();

    const updatedTheme = useUIStore.getState().theme;

    expect(updatedTheme).not.toBe(initialTheme);
  });

  it("should change view mode", () => {
    useUIStore.getState().setViewMode("list");

    expect(useUIStore.getState().viewMode).toBe("list");
  });

  it("should toggle sidebar", () => {
    const initialSidebarState = useUIStore.getState().isSidebarOpen;

    useUIStore.getState().toggleSidebar();

    expect(useUIStore.getState().isSidebarOpen).toBe(!initialSidebarState);
  });
});
