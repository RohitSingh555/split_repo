import React from "react";

const Slides = ({ text, textStyle, containerStyle }) => {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center text-white ${containerStyle}`}
    >
      <div className="w-3/4">
        <h2 className={`text-3xl font-bold text-center mb-4 ${textStyle}`}>
          {text.heading}
        </h2>
        <p className={`text-lg text-center px-4 ${textStyle}`}>
          {text.description}
        </p>
      </div>
    </div>
  );
};

export default Slides;
