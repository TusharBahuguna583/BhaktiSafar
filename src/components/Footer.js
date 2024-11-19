import React from "react";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#475e7a] p-4 sm:p-5 flex flex-col items-center">
      {/* Logo and Title */}
      <div className="flex flex-col sm:flex-row items-center gap-2 mt-3 sm:mt-5">
        <img
          src={logo}
          alt="Bhakti Safar Logo"
          className="w-14 sm:w-20 rounded-lg"
        />
        <p className="font-bold text-lg sm:text-3xl text-white text-center">
          Bhakti Safar
        </p>
      </div>

      {/* Divider */}
      <div className="w-full sm:w-2/3 bg-white h-[1px] my-3"></div>

      {/* Description */}
      <p className="text-center text-white text-xs sm:text-base w-11/12 sm:w-2/4">
        We are here to guide you to sacred temples and holy sites. Our journeys
        offer peace, connection, and inspiration—taking you beyond travel into
        an experience that nurtures the soul. Discover the divine with us.
      </p>

      {/* Navigation Links */}
      <ul className="flex flex-wrap gap-2 sm:gap-8 mt-4 sm:mt-8 text-white text-xs sm:text-base justify-center">
        <li>
          <Link to="/" onClick={() => scrollToTop()}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => scrollToSection("about")}>
            About
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => scrollToSection("packages")}>
            Packages
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Contact Information */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-14 mt-3 sm:mt-5">
        <a href="tel:+918439377579" className="flex items-center">
          <i
            className="fa-solid fa-phone text-lg sm:fa-2xl"
            style={{ color: "#f97316" }}
          ></i>
          <span className="text-orange-500 font-bold ml-2 text-xs sm:text-base">
            +91-9289772369
          </span>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=seva@bhaktisafar.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <i
            className="fa-solid fa-envelope text-lg sm:fa-2xl"
            style={{ color: "#f97316" }}
          ></i>
          <span className="text-orange-500 font-bold ml-2 text-xs sm:text-base">
            seva@bhaktisafar.com
          </span>
        </a>
      </div>

      {/* Footer Divider */}
      <div className="w-full bg-white h-[1px] my-2"></div>

      {/* Copyright */}
      <p className="text-xs text-white text-center">
        Copyright© 2024 | Bhakti Safar
      </p>
    </div>
  );
};

export default Footer;
