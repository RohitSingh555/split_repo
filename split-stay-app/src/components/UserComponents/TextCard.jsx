import React from "react";

const TextCard = ({ divclass, description, title, imageClass }) => {
  return (
    <div
      className={`block max-w-xs p-6 bg-white  rounded-lg shadow hover:bg-Overlay cursor-pointer mt-4 ${divclass}`}
    >
      <h5 className=" font-medium mr-4">{title}</h5>
      <p className="text-gray">{description}</p>
    </div>
  );
};

export default TextCard;
