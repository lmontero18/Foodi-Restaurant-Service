import React from "react";
function FoodCard({ food }) {
  return (
    <div className="h-full w-[260px] m-2 flex-shrink-0 cursor-pointer mt-20 shadow-2xl rounded-3xl">
      <div className="rounded-3xl flex flex-col items-center justify-center overflow-hidden relative h-[250px]">
        <img
          src={`/imgs/food${food.id}.png`}
          alt={food.title}
          className="h-32"
        />
        <span className="font-bold tracking-normal">{food.title}</span>
        <span>{food.description}</span>
      </div>
    </div>
  );
}

export default FoodCard;
