import { useQuery } from "@tanstack/react-query";
import { getPaginatedProducts } from "../api";
import type { ProductsResponse } from "@/types";

export const usePaginatedProducts = ({
  page,
  limit,
  search,
  category,
}: {
  page: number;
  limit: number;
  search?: string;
  category?: string;
}) => {
  const skip = (page - 1) * limit;

  return useQuery<ProductsResponse>({
    queryKey: ["products", page, limit, search, category],

    queryFn: () =>
      getPaginatedProducts({
        limit,
        skip,
        search,
        category,
      }),

    placeholderData: (previousData) => previousData,
  });
};
