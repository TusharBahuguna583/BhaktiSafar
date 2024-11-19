import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white rounded-full flex items-center justify-between px-4 py-1 sm:px-6 lg:px-12 sm:py-1 mx-2 sm:mx-10 lg:mx-20 shadow-lg mt-2">
      {/* Logo */}
      <div className="flex items-center justify-start w-1/3">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-10 sm:w-12 md:w-16 rounded-lg"
          />
        </Link>
      </div>

      <div className="flex justify-center w-1/3">
        <div className="text-orange-700 text-sm sm:text-lg md:text-2xl font-bold tracking-tight sm:tracking-tighter">
          || Bhakti Safar ||
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex items-center justify-end w-1/3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Phone */}
        <a href="tel:+919289772369" className="flex items-center">
          <i
            className="fa-solid fa-phone text-lg sm:text-xl md:text-2xl"
            style={{ color: "#c2410c" }}
          ></i>
          <span className="hidden sm:block sm:text-orange-700 font-bold ml-2 text-xxs sm:text-xs md:text-sm">
            +91-9289772369
          </span>
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=seva@bhaktisafar.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <i
            className="fa-solid fa-envelope text-lg sm:text-xl md:text-2xl"
            style={{ color: "#c2410c" }}
          ></i>
          <span className="hidden sm:block text-orange-700 font-bold ml-2 text-xxs sm:text-xs md:text-sm">
            seva@bhaktisafar.com
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
