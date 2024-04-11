import React from 'react';

const SectionContainer = ({ children, className }) => {
  const containerClasses = `max-w-screen-xl mx-auto  ${className}`;

  return (
    <section className="py-8 lg:py-16">
      <div className={containerClasses}>
        {children}
      </div>
    </section>
  );
}

export default SectionContainer;
