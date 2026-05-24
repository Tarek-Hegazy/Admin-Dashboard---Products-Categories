import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api";
import type { Product } from "@/types";
export const useProduct = (id: number) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });
};
