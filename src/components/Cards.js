import React from "react";
import kedarnath from "../images/kedarnath.jpg";

const Cards = ({ title }) => {
  return (
    <div className="w-[35%] h-2/4 p-3 m-9 bg-white rounded-xl shadow-2xl">
      <div>
        <img src={kedarnath} alt= "cardImage" className="rounded-lg w-full h-52 object-cover mb-3" />
      </div>
      <div className="flex justify-between mx-3">
        <h1 className="font-bold text-3xl text-center mb-3 text-orange-700">{title}</h1>
        <div className="rounded-full w-36 h-10 bg-green-400 px-4 py-1 text-center pt-2 cursor-pointer">More Details</div>
      </div>
    </div>
  );
};

export default Cards;
