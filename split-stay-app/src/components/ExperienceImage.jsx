import React from "react";

const ExperienceImage = ({ imagePosition, imageSrc, style, imageClass }) => {
  return (
    <div
      className={` lg:mt-0 lg:col-span-7 lg:flex ${
        imagePosition === "left" ? "order-2" : ""
      }`}
    >
      <img className={imageClass} style={style} src={imageSrc} alt="mockup" />
    </div>
  );
};

export default ExperienceImage;
