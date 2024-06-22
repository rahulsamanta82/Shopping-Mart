import { useEffect, useState } from "react";
import Banner from "../components/Home/Banner";
import { getAllProducts } from "../lib/utils";
import FeaturedProducts from "../components/Home/FeaturedProducts";

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    let mounted = false;
    if (mounted) return;
    (async () => {
      const data = await getAllProducts();

      setProducts(data);
    })();

    return () => {
      mounted = true;
    };
  }, []);

  return (
    <div className="">
      <Banner />
      <FeaturedProducts products={products} />
    </div>
  );
};

export default Home;
