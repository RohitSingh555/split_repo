import React from "react";

const SectionText = ({ subtitle, title, description, children, className }) => {
  const textClasses = `mr-auto place-self-center lg:col-span-3 ${className || ''}`;
  return (
    <div className={textClasses}>
      {subtitle && <p className="text-2xl text-gray-600 mb-2 uppercase">{subtitle}</p>}
      <h1 className="max-w-xl mb-4 text-4xl font-bold w-50 leading-none md:text-5xl xl:text-6xl dark:text-white">{title}</h1>
      <p className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">{description}</p>
      <div className="flex gap-5">
        {children}
      </div>
    </div>
  );
}

export default SectionText;
