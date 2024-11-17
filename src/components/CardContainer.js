import React from "react";
import Cards from "./Cards";
import cardInfo from "../utils/mockdata";
const CardContainer = () => {
  return (
    <div
      id="packages"
      className="flex flex-wrap w-[93%] justify-center mx-auto mb-11 pt-2 mt-10"
    >
      <div className="w-3/5 border border-x-0  border-y-1 border-gray-400 mb-[2px]"></div>
      <div className="w-full border border-x-0  border-y-1 border-gray-400"></div>
      <div className="w-3/5 border border-x-0  border-y-1 border-gray-400 mt-[1px]"></div>
      <div className="w-full text-center text-5xl mt-8 font-bold text-gray-600">
        PACKAGES
      </div>

      {cardInfo.map((card) => {
        return <Cards key={card.title} title={card.title} image={card.image} />;
      })}
    </div>
  );
};

export default CardContainer;
