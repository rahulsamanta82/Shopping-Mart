import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('/assets/images/banner/b2.jpg')] bg-no-repeat bg-center md:bg-cover  z-[-1]"></div>
      <div className="relative h-[80vh] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Welcome to Trend Mart
          </h1>
          <p className="md:text-xl mt-4">Get the best deals on our products</p>
          <Link to="/shop">
            <Button variant="secondary" size="lg" className="mt-6">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
