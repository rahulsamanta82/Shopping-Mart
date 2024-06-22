import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../lib/utils";
import Cart from "../components/Shop/Cart";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = React.useState<IProduct | null>(null);

  useEffect(() => {
    async function getProductDetails() {
      if (!id) return null;

      const product = await getProduct(id);
      if (!product) setProduct(null);
      setProduct(product);
    }
    getProductDetails();
  }, [id]);

  if (!product)
    return (
      <h1 className="text-3xl font-bold h-[50vh] flex items-center justify-center">
        Loading...
      </h1>
    );
  const { title, description, price, image } = product;

  return (
    <div className="container flex flex-col md:flex-row pt-10 md:pt-20 md:gap-6">
      <div className="m-5 md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover zoom-in"
        />
      </div>
      <div className="space-y-2 md:w-1/2">
        <h1 className="text-3xl font-semibold py-2">{title}</h1>
        <p className="capitalize text-sm  text-gray-800 ">{description}</p>
        <p className="text-2xl ">
          Rs: <strong>{price}</strong>
        </p>
        <div className="space-x-4 space-y-3">
          <Cart product={product} />
          <Cart product={product} showCart={true} />
        </div>
        {/* <button>Buy Now</button> */}
      </div>
    </div>
  );
};

export default ProductDetails;
