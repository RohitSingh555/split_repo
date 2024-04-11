import React from 'react';

const SectionImage = ({ imagePosition, imageSrc }) => {
  return (
    <div className={`hidden lg:mt-0 lg:col-span-7 lg:flex ${imagePosition === "left" ? "order-2" : ""}`}>
      <img src={imageSrc} alt="mockup" />
    </div>
  );
}

export default SectionImage;
