import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center gap-4 sm:mt-12 mt-4 pt-2 px-4 text-gray-700"
    >
      {/* Heading */}
      <h1 className="font-normal text-2xl sm:text-3xl text-center">
        "सफ़र के रंग, भक्ति के संग"
      </h1>

      {/* Description */}
      <p className="hidden sm:block font-light text-xs sm:text-2xl text-center w-full sm:w-2/3">
        We are here to guide you to sacred temples and holy sites. Our journeys
        offer peace, connection, and inspiration—taking you beyond travel into
        an experience that nurtures the soul. Discover the divine with us.
      </p>
    </div>
  );
};

export default About;
