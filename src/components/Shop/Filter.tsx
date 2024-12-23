import React, { useEffect, useState } from "react";

interface FilterSiderBarProps {
  filterProductsByCategory: (category: string) => void;
  filterProductsByPrice: (price: number) => void;
}

const FilterSiderBar = ({
  filterProductsByCategory,
  filterProductsByPrice,
}: FilterSiderBarProps) => {
  const [selectedCategory, setSelectedCatagory] = useState("");
  const [price, setPrice] = useState(100);

  const handleSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCatagory(e.target.value);

    filterProductsByCategory(e.target.value);
  };

  //debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      filterProductsByPrice(price);
      console.log(price, "debounce");
    }, 500);

    return () => clearTimeout(timer);
  }, [price, filterProductsByPrice]);

  const priceFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  return (
    <>
      <h2 className="text-2xl font-semibold">Filter:</h2>
      <div className=" w-auto p-2  ">
        <h3 className="pb-2 text-lg ">By Category</h3>
        <div className="space-y-2 font-light">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="mens"
              name="category"
              value=""
              className=""
              checked={selectedCategory == ""}
              onChange={handleSelection}
            />
            <label htmlFor="mens" className="text-sm font-medium leading-none">
              All
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="mens"
              name="category"
              value="electronics"
              className=""
              checked={selectedCategory == "electronics"}
              onChange={handleSelection}
            />
            <label htmlFor="mens" className="text-sm font-medium leading-none">
              Electronics
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="mens"
              name="category"
              value="men's clothing"
              className=""
              checked={selectedCategory == "men's clothing"}
              onChange={handleSelection}
            />
            <label htmlFor="mens" className="text-sm font-medium leading-none">
              Men&apos;s
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="womens"
              name="category"
              value="women's clothing"
              checked={selectedCategory === "women's clothing"}
              onChange={handleSelection}
            />
            <label
              htmlFor="womens"
              className="text-sm font-medium leading-none"
            >
              Women&apos;s
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="jewelery"
              name="category"
              value="jewelery"
              checked={selectedCategory === "jewelery"}
              onChange={handleSelection}
            />
            <label
              htmlFor="jewelery"
              className="text-sm font-medium leading-none"
            >
              Jewelry&apos;s
            </label>
          </div>
        </div>
      </div>
      <div className=" flex space-y-2 flex-col p-2 ">
        <h3 className=" text-lg ">By Price</h3>
        <div>
          <input
            type="range"
            min="10"
            max="500"
            step="10"
            value={price}
            onChange={priceFilterHandler}
            className="w-full  bg-gradient-to-r from-slate-500 to-slate-700 rounded-full outline-none"
            style={{ color: "black" }}
          />
          <p>Price: INR {price}</p>
        </div>
      </div>
    </>
  );
};

export default FilterSiderBar;
