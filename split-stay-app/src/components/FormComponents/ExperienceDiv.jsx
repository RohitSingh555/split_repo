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
    <div className="container mx-auto pt-2 md:pt-10 ">
      <div className="max-w-sm border border-hrColor rounded overflow-hidden shadow-md hover:bg-Graybg cursor-pointer">
        <img
          className="w-full rounded-3xl p-3 max-h-48 min-h-48 object-fit"
          src={imageURL}
          alt="Cover"
        />
        <div className="px-6 py-4 ">
          <div className="flex justify-between font-bold text-xl mb-2">
            <div className="">
              <FontAwesomeIcon icon={faLocation} className="mr-2" />
              {title}
            </div>
            <div className="mr-2">
              <img
                src={avatarURL}
                alt="Avatar"
                className="w-10 h-10 rounded-full inline-block"
              />
            </div>
          </div>
          <p className="text-gray-700 text-base line-clamp-2">{description}</p>

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
              <span className="font-semibold">Reserved:</span>&nbsp;{" "}
              {reserved ? "Yes" : "No"}
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faBed} className="mr-2" />
              <span className="font-semibold">Beds:</span> &nbsp;{beds}
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faBath} className="mr-2" />
              <span className="font-semibold">Bathrooms:</span> &nbsp;
              {bathrooms}
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMoneyBillAlt} className="mr-2" />
              <span className="font-semibold">Price:</span>&nbsp;$ {price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDiv;
