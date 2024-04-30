import React from "react";

const SearchDiv = ({ placeholder, buttonText, UnitName }) => {
  return (
    <div className="flex justify-between items-center mb-4 w-full">
      <h2 className="text-3xl font-medium mr-4">{UnitName}</h2>
      <div className="flex items-baseline justify-center gap-3">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-Overlay"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-Overlay text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            placeholder={placeholder}
            required
          />
        </div>
        <button
          type="button"
          className="text-white bg-Black hover:Black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 w-4/12 mb-2"
        >
          + &nbsp;{buttonText}
        </button>
      </div>
    </div>
  );
};

export default SearchDiv;
