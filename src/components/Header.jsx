import React from "react";
import FoodiLogo from "../assets/Foodi.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import PhoneIcon from "../assets/PhoneIcon.svg";
import CartIcon from "../assets/CartIcon.svg";

function Header() {
  return (
    <div className="flex m-10 flex-col md:flex-row justify-between items-center p-5 mt-5">
      <div className="flex items-center justify-center w-full md:w-auto">
        <img src={FoodiLogo} alt="Foodi Logo" />
      </div>
      <div className="font-semibold mt-5 md:mt-0">
        <ul className="flex flex-col md:flex-row gap-5 md:gap-20 cursor-pointer items-center">
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
      <div className="mt-5 md:mt-0">
        <ul className="flex gap-4 md:gap-8 cursor-pointer items-center">
          <li>
            <img src={SearchIcon} alt="Search" />
          </li>
          <li>
            <img src={CartIcon} alt="Cart" />
          </li>
          <button className="flex items-center space-x-2 bg-green text-white px-4 md:px-6 py-2 md:py-4 rounded-full hover:bg-green_hover transition-colors duration-300">
            <img src={PhoneIcon} alt="Phone" />
            <span>Contact Us</span>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
