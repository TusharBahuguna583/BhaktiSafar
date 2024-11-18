import React, { useState, useEffect } from "react";
import images from "../utils/importAllImages";

function CarouselContainer() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      name: "Slide 1",
      image: images["radha-krisna.jpg"],
    },
    {
      name: "Slide 2",
      image: images["rishikesh3.jpg"],
    },
    {
      name: "Slide 3",
      image: images["kedarnath.jpg"],
    },
    {
      name: "Slide 4",
      image: images["varanasi.jpg"],
    },
    {
      name: "Slide 5",
      image: images["rishikesh.jpg"],
    },
    {
      name: "Slide 6",
      image: images["mathura-vrindavan.jpg"],
    },
  ];

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((nextSlide) =>
      nextSlide === data.length - 1 ? 0 : nextSlide + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="w-full sm:w-[90%] m-auto">
      <div className="mt-5 sm:mt-10 relative">
        <img
          src={data[currentSlide].image}
          alt={data[currentSlide].name}
          className="w-full h-[200px] sm:h-[350px] object-cover"
        />

        {/* Left Arrow Button */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full text-lg sm:text-2xl"
          aria-label="Previous Slide"
        >
          &#10094;
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={goToNextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full text-lg sm:text-2xl"
          aria-label="Next Slide"
        >
          &#10095;
        </button>

        {/* Slide indicator dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {data.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full cursor-pointer ${
                currentSlide === index
                  ? "bg-opacity-100 scale-110"
                  : "bg-opacity-50"
              } transition-transform`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselContainer;
