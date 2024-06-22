import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getAllProducts(): Promise<IProduct[]> {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch((error) => console.log("Can't fetch the Products: ", error.message));
}

export async function getProduct(productId: number): Promise<IProduct | null> {
  return fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => res.json())
    .catch((error) => console.log("Can't fetch the Product: ", error.message));
}

export async function getProductsByCategory(
  category: string
): Promise<IProduct[]> {
  if (category.length <= 0) {
    return await getAllProducts();
  }
  return fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())
    .catch((error) =>
      console.log(`Can't fetch the ${category} Products: `, error.message)
    );
}
