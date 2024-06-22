import React from "react";

import Product from "../Shop/Product";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { SkeletonCard } from "../ui/skeletonCard";

const FeaturedProducts = ({ products }: { products: IProduct[] }) => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Our featured items
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            faucibus massa dignissim tempus.
          </p>
        </div>
        <div className="grid  md:grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
          {products.length <= 0
            ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
            : products
                .slice(0, 4)
                .map((product) => (
                  <Product product={product} key={product.id} />
                ))}
        </div>
      </div>
      <Link to="/shop">
        <Button size="lg" className="block mx-auto mt-10 lg:mt-16">
          View all products
        </Button>
      </Link>
    </section>
  );
};

export default FeaturedProducts;
