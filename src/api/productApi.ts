import { api } from "./axiosClient";
import type { Product, ProductsResponse, Category } from "@/types";
export const getProducts = async (): Promise<ProductsResponse> => {
  const response = await api.get("/products?limit=200");
  return response.data;
};

export const getPaginatedProducts = async ({
  limit,
  skip,
  search,
  category,
}: {
  limit: number;
  skip: number;
  search?: string;
  category?: string;
}): Promise<ProductsResponse> => {
  let endpoint = `/products?limit=${limit}&skip=${skip}`;

  // Category has priority
  if (category && category !== "all") {
    endpoint = `/products/category/${category}?limit=${limit}&skip=${skip}`;
  }

  // Global search
  if (search && search.trim() !== "") {
    endpoint = `/products/search?q=${search}`;
  }

  const response = await api.get(endpoint);

  return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const getCategories = async (): Promise<Category[]> => {
  const response = await api.get("/products/categories");
  return response.data;
};

export const getProductsByCategory = async (
  category: string,
): Promise<ProductsResponse> => {
  const response = await api.get(`/products/category/${category}`);
  return response.data;
};
