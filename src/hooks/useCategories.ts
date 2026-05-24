import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api";
import type { Category } from "@/types";
export const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
