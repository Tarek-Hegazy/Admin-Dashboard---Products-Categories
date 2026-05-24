import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../api";

import type { ProductsResponse } from "@/types";

export const useProducts = () => {
  return useQuery<ProductsResponse>({
    queryKey: ["products"],

    queryFn: getProducts,
  });
};
