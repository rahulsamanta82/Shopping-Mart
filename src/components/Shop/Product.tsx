import { Link } from "react-router-dom";

import Cart from "./Cart";

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
      <div className="absolute left-3 top-3 shadow-lg ">
        <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">
          {product.category}
        </p>
      </div>
      <div className="flex items-start justify-between mt-4 space-x-4">
        <Link to={`/shop/${product.id}`} title="">
          <div>
            <h3 className="text-xs font-semibold text-gray-900 sm:text-sm md:text-base">
              {product.title}
              <span className=" inset-0" aria-hidden="true" />
            </h3>
            <div className="">
              <p className="text-xl font-bold text-gray-900 ">
                ₹{product.price}
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="mt-3">
        <Cart product={product} />
      </div>
    </div>
  );
};

export default Product;
