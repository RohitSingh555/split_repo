import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const Tag = ({ text, iconClass, containerClass }) => {
  return (
    <div
      className={`bg-gray-200  bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-md p-2 flex items-center ${containerClass}`}
    >
      {iconClass && <FontAwesomeIcon icon={faTag} />}
      <span className="text-gray-100">&nbsp;{text}</span>
    </div>
  );
};

export default Tag;
