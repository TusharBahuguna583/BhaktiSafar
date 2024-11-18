import React, { useState, useEffect } from "react";
import images from "../utils/importAllImages";

function CarouselContainer() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      name: "Slide 1",
      image: images['radha-krisna.jpg'],
    },
    {
      name: "Slide 2",
      image: images['rishikesh3.jpg'],
    },
    {
      name: "Slide 3",
      image: images['kedarnath.jpg'],
    },
    {
      name: "Slide 4",
      image: images['varanasi.jpg'],
    },
    {
      name: "Slide 5",
      image: images['rishikesh.jpg'],
    },
    {
      name: "Slide 6",
      image: images['mathura-vrindavan.jpg'],
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

  // Auto-scroll effect
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds

    // Clear interval on component unmount or when auto-scroll is disabled
    return () => clearInterval(intervalId);
  }); // Empty dependency array to run only once on mount

  return (
    <div className="w-[90%] m-auto">
      <div className="mt-10 relative">
        <img
          src={data[currentSlide].image}
          alt={data[currentSlide].name}
          className="w-full h-[350px] object-cover"
        />

        {/* Left Arrow Button */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
        >
          &#10094;
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={goToNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
        >
          &#10095;
        </button>

        {/* Slide indicator dots */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {data.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 bg-white rounded-full ${
                currentSlide === index ? "p-2" : "bg-opacity-20"
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default CarouselContainer;
