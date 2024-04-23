import React from "react";
import { Outlet, Link } from "react-router-dom";

const PreferenceDiv = ({ imageURL, customContent }) => {
  return (
    <div className="container mx-auto pt-28 md:pt-52">
      {/* <Link
        to="/"
        className="flex items-center space-x-3 rtl:space-x-reverse md:pb-8 justify-center"
      >
        <img src="/SplitStay.png" className="h-10" alt="SplitStay Logo" />
      </Link> */}
      <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-100 pb-10 px-4 md:pb-24 md:px-24 rounded-lg shadow-lg">
        {/* Image Section */}
        <div className="lg:w-1/2 p-4  hidden md:block">
          <img src={imageURL} alt="Your Image" className="w-full h-auto " />
        </div>

        {/* Custom Content */}
        {customContent && <div className="lg:w-1/2 p-4">{customContent}</div>}
      </div>
    </div>
  );
};

export default PreferenceDiv;
