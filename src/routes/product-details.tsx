import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
