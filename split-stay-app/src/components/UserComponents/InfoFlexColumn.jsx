import React from "react";

const InfoFlexColumn = ({ className, label, info }) => {
  return (
    <div>
      <p className=" text-Overlay">{label}</p>
      <h2 className={`text-lg font-semibold ${className}`}>{info}</h2>
    </div>
  );
};

export default InfoFlexColumn;
