import React from "react";
import { FoodApi } from "../../data/FoodCategories";
import FoodCard from "../CustomCards/FoodCard";

function Carousel() {
  const FoodCategories = [...FoodApi, ...FoodApi];

  return (
    <div className="container ">
      <div className="overflow-hidden flex items-center justify-center w-full border border-black">
        <div className="flex whitespace-nowrap animate-scroll">
          {FoodCategories.map((food, index) => (
            <FoodCard food={food} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
