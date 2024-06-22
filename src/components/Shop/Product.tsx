import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }: { product: IProduct }) => {
  return (
    <div className="relative group shadow-lg rounded-lg p-4" key={product.id}>
      <div className="overflow-hidden aspect-w-1 aspect-h-1 ">
        <img
          className="object-cover h-80  transition-all duration-300 group-hover:scale-125"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="absolute left-3 top-3 ">
        <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">
          {product.category}
        </p>
      </div>
      <div className="flex items-start justify-between mt-4 space-x-4">
        <div>
          <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
            <Link to={`/shop/${product.id}`} title="">
              {product.title}
              <span className="absolute inset-0" aria-hidden="true" />
            </Link>
          </h3>
          <div className="flex items-center mt-2.5 space-x-px">
            <svg
              className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
