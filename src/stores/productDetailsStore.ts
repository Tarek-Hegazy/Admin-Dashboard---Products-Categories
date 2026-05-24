import { create } from "zustand";

interface ProductDetailsStore {
  selectedProductId: number | null;

  isOpen: boolean;

  openModal: (id: number) => void;

  closeModal: () => void;
}

export const useProductDetailsStore = create<ProductDetailsStore>((set) => ({
  selectedProductId: null,

  isOpen: false,

  openModal: (id) =>
    set({
      selectedProductId: id,
      isOpen: true,
    }),

  closeModal: () =>
    set({
      isOpen: false,
      selectedProductId: null,
    }),
}));
