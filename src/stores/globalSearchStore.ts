import { create } from "zustand";

interface GlobalSearchStore {
  query: string;

  isOpen: boolean;

  setQuery: (query: string) => void;

  openSearch: () => void;

  closeSearch: () => void;
}

export const useGlobalSearchStore = create<GlobalSearchStore>((set) => ({
  query: "",

  isOpen: false,

  setQuery: (query) => set({ query }),

  openSearch: () => set({ isOpen: true }),

  closeSearch: () => set({ isOpen: false }),
}));
