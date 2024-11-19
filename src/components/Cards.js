import React from "react";
import { Link } from "react-router-dom";
const Cards = ({ title, image }) => {
  return (
    <div className="perspective-1000 w-[80%] sm:w-[35%] h-auto p-3 m-4 bg-white rounded-xl shadow-lg transform transition-transform duration-500 ease-in-out hover:rotate-x-6 hover:shadow-xl hover:scale-105">
      <div>
        <img
          src={image}
          alt="cardImage"
          className="rounded-lg w-full h-40 sm:h-52 object-cover mb-3"
        />
      </div>
      <div className="flex justify-center">
        <p className="font-bold text-xl sm:text-3xl text-center mb-2 text-gray-500">
          {title}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mx-2">
        <p className="text-sm sm:text-cm text-gray-600 mb-3 sm:mb-0">
          Package price : ₹2500 - ₹3000
        </p>
        <Link to="/contact">
          <button className="rounded-full w-36 h-10 bg-green-500 px-4 py-1 text-center cursor-pointer font-semibold text-gray-700">
            Get Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
