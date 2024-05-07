import React from "react";

const HTwoText = ({ text, id }) => {
  return (
    <div
      id={id}
      className="m-auto max-w-xl text-gray-900 text-3xl lg:text-5xl font-semibold leading-tight text-center"
    >
      {text}
    </div>
  );
};

export default HTwoText;
