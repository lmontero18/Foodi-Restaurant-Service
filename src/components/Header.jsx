import React from "react";
import FoodiLogo from "../assets/Foodi.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import PhoneIcon from "../assets/PhoneIcon.svg";
import CartIcon from "../assets/CartIcon.svg";

function Header() {
  return (
    <div className="p-5 flex flex-row justify-around items-center mt-5">
      <div>
        <img src={FoodiLogo} alt="" />
      </div>
      <div className="font-semibold">
        <ul className="flex flex-row gap-20 cursor-pointer">
          <li className="hover:text-green_hover transition-colors duration-300">
            Home
          </li>
          <li className="hover:text-green_hover transition-colors duration-300">
            Menu
          </li>
          <li className="hover:text-green_hover transition-colors duration-300">
            Services
          </li>
          <li className="hover:text-green_hover transition-colors duration-300">
            Offers
          </li>
        </ul>
      </div>
      <div className="">
        <ul className="flex flex-row gap-8 cursor-pointer items-center">
          <li>
            <img src={SearchIcon} alt="" />
          </li>
          <li>
            <img src={CartIcon} alt="" />
          </li>
          <button className="flex items-center space-x-2 bg-green text-white px-6 py-4 rounded-full hover:bg-green_hover transition-colors duration-300">
            <img src={PhoneIcon} alt="phone icon" />
            <span>Contact Us</span>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
