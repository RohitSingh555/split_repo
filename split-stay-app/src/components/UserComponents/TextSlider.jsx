import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TextSlider = () => {
  const slides = [
    '"I no longer have to wait on my friends to go on my next adventure"',
    '"I work remotely and explore new cities all the time, now I can bring a new friend"',
    '"I love the emphasis on trust and safety"',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex justify-center items-center p-4 lg:p-8 py-2 lg:py-22">
      <FontAwesomeIcon
        icon={faArrowLeft}
        onClick={prevSlide}
        style={{
          cursor: "pointer",
          marginRight: "40px",
          fontSize: "30px",
        }}
      />
      <div className="text-xl lg:text-4xl font-medium leading-none text-center text-gray-800 font-poppins w-3/6 ">
        <h2 className="w-full flex items-center min-h-36 lg:min-h-36">
          {slides[currentSlide]}
        </h2>
      </div>
      <FontAwesomeIcon
        icon={faArrowRight}
        onClick={nextSlide}
        style={{ cursor: "pointer", marginLeft: "40px", fontSize: "30px" }}
      />
    </div>
  );
};

export default TextSlider;
