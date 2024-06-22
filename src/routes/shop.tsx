import React, { useEffect, useState } from "react";
import { getAllProducts, getProductsByCategory } from "../lib/utils";
import Product from "../components/Shop/Product";
import FilterSiderBar from "../components/Shop/Filter";
import { SkeletonCard } from "../components/ui/skeletonCard";

const Shop = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    let mounted = true;
    async function getProducts() {
      if (mounted) {
        const products = await getAllProducts();
        setProducts(products);
        setFilteredProducts(products);
      }
    }
    getProducts();
    // cleanup
    return () => {
      mounted = false;
    };
  }, []);

  async function filterProductsByCategory(category: string) {
    const products = await getProductsByCategory(category);
    setProducts(products);
    setFilteredProducts(products);
  }

  function filterProductsByPrice(price: number) {
    const filteredProducts = products.filter(
      (product) => Math.floor(product.price) <= price
    );
    setFilteredProducts(filteredProducts);
  }

  console.log(products);

  return (
    <main className="flex  container flex-col py-20">
      <h1 className="text-4xl text-center pb-10">Our Shop</h1>
      <div className="flex gap-5">
        <div className="w-1/6 p-2 border-r-2 h-[380px]  ">
          <FilterSiderBar
            filterProductsByCategory={filterProductsByCategory}
            filterProductsByPrice={filterProductsByPrice}
          />
        </div>

        <div className="grid grid-cols-3 gap-5 w-3/4 ">
          {products?.length <= 0 ? (
            Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          ) : filteredProducts.length <= 0 ? (
            <h2 className="text-2xl font-bold flex h-[40vh] justify-center w-full items-center">
              No Products in Stock
            </h2>
          ) : (
            filteredProducts?.map((product) => {
              return <Product key={product.id} product={product} />;
            })
          )}
        </div>
      </div>
    </main>
  );
};

export default Shop;
