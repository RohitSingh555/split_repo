import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faLocation,
  faTag,
  faList,
  faMoneyBillAlt,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

const ExperienceDiv = ({
  imageURL,
  title,
  description,
  destination,
  openSlots,
  reserved,
  beds,
  bathrooms,
  price,
  avatarURL,
}) => {
  return (
    <div className="container mx-auto pt-2 md:pt-20 ">
      <div className="max-w-sm border border-hrColor rounded overflow-hidden shadow-md hover:bg-Graybg cursor-pointer">
        <img className="w-full rounded-3xl p-3" src={imageURL} alt="Cover" />
        <div className="px-6 py-4 ">
          <div className="font-bold text-xl mb-2">
            <FontAwesomeIcon icon={faLocation} className="mr-2" />
            {title}
          </div>
          <p className="text-gray-700 text-base">{description}</p>
          <div className="grid grid-cols-1 gap-2 mt-4 ">
            {/* <div className="flex items-center">
              <span className="font-semibold">Destination:</span> {destination}
            </div> */}
            {/* <div className="flex items-center">
              <FontAwesomeIcon icon={faList} className="mr-2" />
              <span className="font-semibold">Open Slots</span> {openSlots}
            </div> */}
            <div className="flex items-center">
              <FontAwesomeIcon icon={faTag} className="mr-2" />
              <span className="font-semibold">Reserved:</span>{" "}
              {reserved ? "Yes" : "No"}
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faBed} className="mr-2" />
              <span className="font-semibold">Beds:</span> {beds}
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faBath} className="mr-2" />
              <span className="font-semibold">Bathrooms:</span> {bathrooms}
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMoneyBillAlt} className="mr-2" />
              <span className="font-semibold">Price:</span> {price}
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="mr-2">
              <span className="font-semibold">Creator Avatar:</span>{" "}
              <img
                src={avatarURL}
                alt="Avatar"
                className="w-6 h-6 rounded-full inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDiv;
