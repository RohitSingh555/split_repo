import React from "react";
import { Outlet, Link } from "react-router-dom";

const ExperienceDiv = ({
  imageURL,
  title,
  description,
  destination,
  openSlots,
  accommodationIcon,
  reserved,
  beds,
  bathrooms,
  price,
  avatarURL,
}) => {
  return (
    <div className="container mx-auto pt-2 md:pt-40">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imageURL} alt="Cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
          <div className="grid items-center mt-4">
            <div className="mr-2">
              <span className="font-semibold">Destination:</span> {destination}
            </div>
            <div className="mr-2">
              <span className="font-semibold">Open Slots Available:</span>{" "}
              {openSlots}
            </div>
            <div className="mr-2 flex">
              <span className="font-semibold">Accommodation Icon:</span>{" "}
              {accommodationIcon}
              <div className="mr-2">
                {true ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div className="mr-2">
              <span className="font-semibold">Bed Icon:</span> {beds}
            </div>
            <div className="mr-2">
              <span className="font-semibold">Bathroom:</span> {bathrooms}
            </div>
            <div className="mr-2">
              <span className="font-semibold">Price:</span> {price}
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="mr-2">
              <span className="font-semibold">Creator Avatar:</span>{" "}
              {/* <Avatar src={avatarURL} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDiv;
