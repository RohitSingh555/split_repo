import React from "react";

const SectionImage = ({
  imagePosition,
  imageSrc,
  style,
  imageClass,
  className,
}) => {
  return (
    <div
      className={` lg:mt-0 lg:col-span-7 lg:flex ${className} ${
        imagePosition === "left" ? "order-2" : ""
      }`}
    >
      <img
        className={`pr-4 ${imageClass}`}
        style={style}
        src={imageSrc}
        alt="mockup"
      />
    </div>
  );
};

export default SectionImage;
