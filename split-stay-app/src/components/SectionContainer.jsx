import React from "react";

const SectionContainer = ({ children, className }) => {
  const containerClasses = `max-w-screen-xl mx-auto px-4 ${className}`;

  return (
    <section className="py-2 lg:py-4">
      <div className={containerClasses}>{children}</div>
    </section>
  );
};

export default SectionContainer;
