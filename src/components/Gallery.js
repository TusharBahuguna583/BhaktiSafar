import React, { useState, useRef } from "react";
import images from "../utils/importAllImages";

const data = [
  { src: images["image1.jpg"], caption: "image1" },
  { src: images["image2.jpg"], caption: "image2" },
  { src: images["image3.jpg"], caption: "image3" },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount =
        window.innerWidth < 640
          ? carouselRef.current.clientWidth / 1
          : carouselRef.current.clientWidth / 3;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount =
        window.innerWidth < 640
          ? carouselRef.current.clientWidth / 1
          : carouselRef.current.clientWidth / 3;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="h-1/3 flex flex-col justify-center items-center p-5 relative mb-2">
      <div className="w-4/5 sm:w-3/5 sm:border-2 border rounded-full border-gray-400 "></div>
      <div className="w-4/5 sm:w-3/5 sm:border-2 border rounded-full border-gray-400 mt-[2px] sm:mt-[3px]"></div>
      <h1 className="text-center text-4xl sm:text-7xl font-bold text-gray-600 mb-5 mt-5">
        Memorable Yatra
      </h1>

      <div className="relative w-full px-10">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
          onClick={scrollLeft}
        >
          ◀
        </button>
        <div ref={carouselRef} className="w-[98%] p-9 overflow-hidden flex gap-4">
          {data.map((image, index) => (
            <figure
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer flex-shrink-0"
              style={{
                width: "100%",
                maxWidth: window.innerWidth < 640 ? "100%" : "calc(100% / 3)",
                scrollSnapAlign: "center",
              }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full object-cover transition"
              />
            </figure>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
          onClick={scrollRight}
        >
          ▶
        </button>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-[-10px] right-1 text-black text-4xl rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
