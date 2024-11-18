import React from "react";
import Cards from "./Cards";
import cardInfo from "../utils/mockdata";
const CardContainer = () => {
  return (
    <div
      id="packages"
      className="flex flex-wrap w-[93%] justify-center mx-auto mb-11 pt-2 mt-10"
    >
      <div className="w-4/5 border-2 rounded-full border-gray-400 mb-"></div>
      <div className="w-4/5 border-2 rounded-full border-gray-400 mt-[3px]"></div>
      <div className="w-full text-center text-7xl mt-8 font-bold text-gray-600">
        PACKAGES
      </div>

      {cardInfo.map((card) => {
        return <Cards key={card.title} title={card.title} image={card.image} />;
      })}
    </div>
  );
};

export default CardContainer;
