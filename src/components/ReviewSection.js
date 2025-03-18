import { FaChevronLeft, FaChevronRight, FaUserCircle } from "react-icons/fa";
import { useRef } from "react";

const reviews = [
  {
    name: "Priyankar and Khusboo",
    review:
      "Thank you everyone, organizers and fellow passengers for this memorable trip. Truly blessed to be a part of this. This was the first time for us and looking forward to being a part of future initiatives. Thank you again. ",
  },
  {
    name: "H. S. Rawat",
    review:
      `
      Jai Shree Ram 🙏🙏
      Our pilgrimage was a pleasant and ever memorable with the kind cooperation of all devotees and the energetic and enthusiastic team who planned and organised our pilgrimage throughout the Journey.
      And with the blessings of Ganga Maya and Mata Rani our Journey was smooth and complete. `,
  },
  {
    name: "Sandeep",
    review:
      "Family Members has been reached at Home. I have reached at office. Thanks everyone for this wonderful & superb journey & experience with you all.",
  },
];

const ReviewSection = () => {
  const reviewContainerRef = useRef(null);

  const scrollReviews = (direction) => {
    if (reviewContainerRef.current) {
      const scrollAmount = 435; // Adjust scroll distance for three reviews at a time
      reviewContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full text-center flex flex-col justify-center items-center p-5 mb-4">
      <div className="w-4/5 sm:w-3/5 sm:border-2 border rounded-full border-gray-400 "></div>
      <div className="w-4/5 sm:w-3/5 sm:border-2 border rounded-full border-gray-400 mt-[2px] sm:mt-[3px]"></div>

      <h1 className="w-full text-center text-4xl sm:text-6xl mt-6 sm:mt-8 mb-4 font-bold text-gray-600 ">
        What Our Users Say
      </h1>
      <div className="flex flex-row justify-center gap-5 box-border items-center">
        <button onClick={() => scrollReviews("left")} className="text-3xl text-gray-700">
          <FaChevronLeft />
        </button>
        <div
          ref={reviewContainerRef}
          className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar w-[81rem]"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[26rem] text-white bg-slate-600 rounded-lg h-56 p-5 flex flex-col gap-2"
            >
              <div className="flex justify-center items-center gap-3 text-2xl h-1/4">
                <div className="text-3xl"><FaUserCircle /></div>
                {review.name}
              </div>
              <div className="h-3/4">{review.review}</div>
            </div>
          ))}
        </div>
        <button onClick={() => scrollReviews("right")} className="text-3xl text-gray-700">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
