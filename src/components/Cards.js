import React from "react";

const Cards = ({ title, image }) => {
  return (
    <div className="w-[35%] h-2/4 p-3 m-9 bg-white rounded-xl shadow-2xl">
      <div>
        <img
          src={image}
          alt="cardImage"
          className="rounded-lg w-full h-52 object-fill mb-3"
        />
      </div>
      <div className="flex justify-center mb-2">
        <p className="font-bold text-3xl text-center mb-3 text-gray-500">
          {title}
        </p>
      </div>
      <div className="flex gap-14 justify-center items-center">
        <p className="text-1xl ">Package price : ₹2500 - ₹3000</p>
        <button className="rounded-full w-36 h-10 bg-green-500 px-4 py-1 text-center cursor-pointer font-semibold text-gray-700">
          More Details
        </button>
      </div>
    </div>
  );
};

export default Cards;
