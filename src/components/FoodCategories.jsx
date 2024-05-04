import React from "react";
import { FoodApi } from "../data/FoodCategories";
import FoodCard from "./CustomCards/FoodCard";

function FoodCategories() {
  const FoodCategories = [...FoodApi, ...FoodApi];

  return (
    <div className=" mt-40 flex flex-col items-center justify-center">
      <h2 className="text-salmon font-bold tracking-widest mb-5">
        CUSTOMER FAVORITES
      </h2>
      <h1 className="text-5xl font-bold">Popular Categories</h1>
      <div className="flex gap-11">
        {FoodCategories.slice(0, 4).map((food, index) => (
          <FoodCard food={food} key={index} />
        ))}
      </div>
    </div>
  );
}

export default FoodCategories;
