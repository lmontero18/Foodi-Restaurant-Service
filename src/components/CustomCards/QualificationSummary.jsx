import React from "react";
import ReactStars from "react-rating-stars-component";

function QualificationSummary({ img, title, price }) {
  return (
    <div className="flex gap-4 p-4 max-w-[300px] bg-white shadow-2xl rounded-3xl">
      <img
        src={img}
        alt={title}
        className="w-20 h-20 object-cover rounded-xl"
      />
      <div className="flex flex-col justify-center">
        <span className="text-smooth_black font-bold">{title}</span>
        <ReactStars count={5} activeColor={"#ffd700"} />
        <span className="font-semibold text-gray_span">
          <span className="text-salmon text-sm">$</span>
          {price}
        </span>
      </div>
    </div>
  );
}

export default QualificationSummary;
