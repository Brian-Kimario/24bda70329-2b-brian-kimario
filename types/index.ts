// types/index.ts
export type SelectOption = {
  value: string;
  label: string;
};

export type ProductCategory = "electronics" | "clothing";

export type Product = {
  id: number;
  name: string;
  price: number;
  category: ProductCategory;
};
