import React from "react";
import PlayIcon from "../assets/PlayIcon.svg";
import HeroImage from "../assets/HeroImage.png";

function Hero() {
  return (
    <div className=" flex items-center justify-evenly">
      <article className="max-w-[620px]">
        <h1 className="text-5xl font-extrabold mb-10 gap-2 leading-snug w-[480px]">
          Dive into Delights Of Detectable{" "}
          <span className="text-green">Food</span>
        </h1>
        <span className="text-gray_span text-2xl font-semibold leading-relaxed">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </span>
        <div className="flex mt-10 items-center">
          <button className="bg-green text-white font-semibold px-11 py-4 rounded-full hover:bg-green_hover transition-colors duration-300 shadow-[0px_13px_16px_rgba(57,219,74,0.50)]">
            Order Now
          </button>
          <div className="flex flex-row justify-between items-center gap-6 px-10 py-4">
            <span className="text-gray_span font-semibold text-lg">
              Watch Video
            </span>
            <button className="rounded-full p-4 shadow-[5px_15px_15px_rgba(0,0,0,0.12)]">
              <img src={PlayIcon} className="h-4" />
            </button>
          </div>
        </div>
      </article>
      <article className="">
        <img src={HeroImage} alt="hero icon" className="h-[650px]" />
      </article>
    </div>
  );
}

export default Hero;
