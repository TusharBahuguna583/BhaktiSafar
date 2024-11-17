import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../images/logo.jpg";
const Header = () => {
  return (
    <div className="bg-white rounded-full flex place-content-between pr-20 pl-12 mx-44">
      <div>
        <img src={logo} alt="Logo" className="w-16 rounded-lg m-2" />
      </div>
      <div className="flex items-center">
        <a href="tel:+918439377579" className="mr-16">
          <i class="fa-solid fa-phone fa-2xl" style={{ color: "#c2410c" }}></i>
          <span className="text-orange-700 font-bold ml-2 text-sm">
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
            style={{ color: "#c2410c" }}
          ></i>
          <span className="text-orange-700 font-bold ml-2 text-sm">
            seva@bhaktisafar.com
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
