import React, { useState } from "react";
import images from "../utils/importAllImages";

const data = [
  { src: images["image1.jpg"], caption: "image1" },
  { src: images["image2.jpg"], caption: "image2" },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto flex justify-center items-center p-5">
      <div className="max-w-6xl w-full">
        <div className="mx-auto w-4/5 sm:w-3/5 sm:border-2 border rounded-full border-gray-400 "></div>
        <div className="mx-auto w-4/5 sm:w-3/5 sm:border-2 border rounded-full border-gray-400 mt-[2px] sm:mt-[3px]"></div>
        <h1 className="w-full text-center text-4xl sm:text-7xl mt-6 sm:mt-8 font-bold text-gray-600 mb-5">
          Memorable Yatra
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 w-4/5 mx-auto gap-5">
          {data.map((image, index) => (
            <figure
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition"
              />
            </figure>
          ))}
        </div>
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
            <img src={selectedImage} alt="Selected" className="w-full h-auto rounded-md" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;