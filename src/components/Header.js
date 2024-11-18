import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../images/logo.jpg";

const Header = () => {
  return (
    <div className="bg-white rounded-full flex flex-wrap items-center justify-between px-6 py-1 sm:px-12 sm:py-1 mx-4 sm:mx-20 lg:mx-44 shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-12 sm:w-16 rounded-lg" />
      </div>

      <div className="text-orange-700 text-sm sm:text-2xl sm:font-bold sm:tracking-tighter sm:text-left sm:ml-2 sm:w-[600px]">|| Bhakti Safar ||</div>

      {/* Contact Info */}
      <div className="flex flex-wrap items-center justify-center gap-6 mr-3 sm:mr-12 sm:gap-12">
        {/* Phone */}
        <a href="tel:+918439377579" className="flex items-center">
          <i className="fa-solid fa-phone text-2xl sm:text-3xl" style={{ color: "#c2410c" }}></i>
          <span className="hidden sm:block sm:text-orange-700 sm:font-bold sm:ml-2 sm:text-sm">
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
          <i className="fa-solid fa-envelope text-2xl sm:text-3xl" style={{ color: "#c2410c" }}></i>
          <span className="hidden sm:block text-orange-700 font-bold ml-2 text-xs sm:text-sm">
            seva@bhaktisafar.com
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
