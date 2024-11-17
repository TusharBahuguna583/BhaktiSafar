import React from "react";
import Cards from "./Cards";
import cardInfo from "../utils/mockdata";
const CardContainer = () => {
  return (
    <div className="flex flex-wrap w-[93%] justify-center mx-auto mb-11">
      {
        cardInfo.map((card) => {
          return (
            <Cards key={card.title} 
                   title={card.title} 
                   image={card.image} />
          );
        })
      }
    </div>
  );
};

export default CardContainer;
