import React from "react";
import PlayIcon from "../assets/PlayIcon.svg";
import HeroImage from "../assets/HeroImage.png";
import MessageBubble from "./CustomCards/MessageBubble";
import QualificationSummary from "./CustomCards/QualificationSummary";
import SpicyNoodles from "../assets/SpicyNoodles.png";
import VegetarianSalad from "../assets/VegetarianSalad.png";
function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly">
      <article className="max-w-full md:max-w-[620px] p-4 md:p-6">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-10 gap-2 leading-snug w-full md:w-[480px]">
          Dive into Delights Of Detectable{" "}
          <span className="text-green">Food</span>
        </h1>
        <span className="text-xl md:text-2xl text-gray_span font-semibold leading-relaxed">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </span>
        <div className="flex flex-col md:flex-row mt-6 md:mt-10 items-center gap-4 md:gap-6">
          <button className="bg-green text-white font-semibold px-8 md:px-11 py-3 md:py-4 rounded-full hover:bg-green_hover transition-colors duration-300 shadow-[0px_13px_16px_rgba(57,219,74,0.50)]">
            Order Now
          </button>
          <div className="flex flex-row justify-between items-center gap-4 md:gap-6 px-4 md:px-10 py-2 md:py-4">
            <span className="text-lg md:text-xl text-gray_span font-semibold">
              Watch Video
            </span>
            <button className="rounded-full p-2 md:p-4 shadow-[5px_15px_15px_rgba(0,0,0,0.12)]">
              <img src={PlayIcon} className="h-4 md:h-6" />
            </button>
          </div>
        </div>
      </article>
      <article className="">
        <MessageBubble />
        <img
          src={HeroImage}
          alt="hero icon"
          className="w-full sm:w-auto h-auto sm:h-[500px] md:h-[650px]"
        />

        <div className="absolute top-[710px] right-[570px]">
          <QualificationSummary
            img={SpicyNoodles}
            title={"Spicy Noodles"}
            price={"18.00"}
          />
        </div>
        <div className="absolute top-[710px] right-[260px]">
          <QualificationSummary
            img={VegetarianSalad}
            title={"Vegetarian Salad"}
            price={"23.00"}
          />
        </div>
      </article>
    </div>
  );
}

export default Hero;
