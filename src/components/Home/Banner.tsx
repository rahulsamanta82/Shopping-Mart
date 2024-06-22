import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('/assets/images/banner/b2.jpg')] bg-no-repeat  z-[-1]"></div>
      <div className="relative h-[80vh] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome to our store</h1>
          <p className="text-xl mt-4">Get the best deals on our products</p>
          <Button variant="secondary" size="lg" className="mt-6">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
