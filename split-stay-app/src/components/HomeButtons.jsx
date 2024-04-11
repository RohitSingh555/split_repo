import React from 'react';

const HomeButtons_Solid = ({ children, style, onClick, className }) => {
  const buttonClasses = `bg-Primarycolor border hover:bg-white hover:text-Primarycolor hover:border-Primarycolor text-white font-bold rounded-lg ${className}`;

  return (
    <button style={style} className={`py-2 px-4 sm:py-3 sm:px-6 ${buttonClasses}`} onClick={onClick}>
      {children}
    </button>
  );
};

const HomeButtons_Hollow = ({ children, style, onClick, className }) => {
  const buttonClasses = `border border-Primarycolor text-gray hover:text-white hover:bg-Primarycolor font-bold rounded-lg ${className}`;

  return (
    <button style={style} className={`py-2 px-4 sm:py-3 sm:px-6 ${buttonClasses}`} onClick={onClick}>
      {children}
    </button>
  );
};

export { HomeButtons_Solid, HomeButtons_Hollow };
