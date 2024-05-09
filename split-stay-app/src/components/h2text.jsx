import React from "react";

const HTwoText = ({ text, id }) => {
  return (
    <div
      id={id}
      className="m-auto max-w-xl text-gray-900 text-3xl pb-5 lg:pb-0 lg:text-4xl font-medium leading-tight text-center"
    >
      {text}
    </div>
  );
};

export default HTwoText;
