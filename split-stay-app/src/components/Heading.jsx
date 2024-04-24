import React from "react";

const Heading = ({ className, children }) => {
  return <h2 className={`text-4xl font-semibold ${className}`}>{children}</h2>;
};

export default Heading;
