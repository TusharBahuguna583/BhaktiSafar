import React from "react";
import Cards from "./Cards";
import cardInfo from "../utils/mockdata";

const CardContainer = () => {
  return (
    <div
      id="packages"
      className="flex flex-wrap w-full sm:w-[93%] justify-center mx-auto mb-6 sm:mb-11 pt-2 mt-6 sm:mt-10"
    >
      {/* Horizontal Lines */}
      <div className="w-4/5 sm:w-3/5 sm:border-2 border rounded-full border-gray-400 "></div>
      <div className="w-4/5 sm:w-3/5 sm:border-2 border rounded-full border-gray-400 mt-[2px] sm:mt-[3px]"></div>

      {/* Heading */}
      <div className="w-full text-center text-4xl sm:text-7xl mt-6 sm:mt-8 font-bold text-gray-600">
        PACKAGES
      </div>

      {/* Card Mapping */}
      <div className="flex flex-wrap gap-4 sm:gap-8 justify-center mt-4 sm:mt-6">
        {cardInfo.map((card) => (
          <Cards key={card.title} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
