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
    <div className="w-screen bg-[#475e7a] grid place-items-center p-5">
      <div className="flex items-center justify-center gap-2 mt-5">
        <img src={logo} alt="" className="w-20 rounded-lg m-2" />
        <p className="font-bold text-3xl text-white">Bhakti Safar</p>
      </div>
      <div className="w-2/3 bg-white h-[2px] m-4"></div>
      <p className="w-2/4 text-center text-white">
        We are here to guide you to sacred temples and holy sites. Our journeys
        offer peace, connection, and inspiration—taking you beyond travel into
        an experience that nurtures the soul. Discover the divine with us.
      </p>
      <ul className="flex gap-8 my-8 text-white">
        <li>
          <Link to="/" onClick={() => scrollToTop()}>Home</Link>
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
          <Link to="/" onClick={() => scrollToSection("contactus")}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex items-center">
        <a href="tel:+918439377579" className="mr-16">
          <i class="fa-solid fa-phone fa-2xl" style={{ color: "#f97316" }}></i>
          <span className="text-orange-500 font-bold ml-3 text-sm">
            +91-9289772369
          </span>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=seva@bhaktisafar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            class="fa-solid fa-envelope fa-2xl"
            style={{ color: "#f97316" }}
          ></i>
          <span className="text-orange-500 font-bold ml-4 text-sm">
            seva@bhaktisafar.com
          </span>
        </a>
      </div>
      <div className="w-full bg-white h-[1px] mb-2 mt-3"></div>
      <p className="text-xs text-white ">Copyright© 2024 | Bhakti Safar</p>
    </div>
  );
};

export default Footer;
