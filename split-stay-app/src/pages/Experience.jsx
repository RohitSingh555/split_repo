import React, { useState } from "react";
import SectionText from "../components/SectionText";
import { HomeButtons_Hollow } from "../components/HomeButtons";
import SectionImage from "../components/SectionImage";
import InfoFlexColumn from "../components/UserComponents/InfoFlexColumn";
import LandlordDetails from "../components/UserComponents/LandlordCard";
import TextCard from "../components/UserComponents/TextCard";
import Tag from "../components/UserComponents/Tag";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faTag,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import SearchDiv from "../components/UserComponents/SearchDiv";

const Experience = () => {
  const landlordName = "LANDLORD";
  const wireText = "Landlord";
  const collectionData = [
    {
      imageUrl: "/old_woman.webp",
      name: "Elise Beverley",
      email: "elise@stellartech.com",
    },
  ];

  return (
    <div className=" mx-auto pt-24 ">
      <div className="border border-hrColor ">
        <div className="flex gap-10  items-center max-w-screen-xl m-auto p-10 relative">
          <div>
            <SectionImage
              style={{ width: "340px", height: "250px" }}
              imagePosition="right"
              imageSrc="/apartment.jpeg"
              imageClass="rounded-xl object-cover"
            />
          </div>
          <div>
            <p className="text-xs pb-4 text-LabelEXP">
              Day posted: 5th May 1999
            </p>
            <SectionText
              title="50 Hagiwara"
              className=" m-auto text-left text-xl font-medium"
              description="50 Hagiwara Tea Garden Dr, San Francisco, CA 94118, United States"
            />

            <div>
              <button
                type="button"
                class="text-white bg-Black hover:Black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 w-4/12 mb-2 "
              >
                + &nbsp;Create a Plan
              </button>
              <HomeButtons_Hollow
                className="lg:py-2 px-12"
                onClick={() => console.log("Signup clicked")}
              >
                <FontAwesomeIcon icon={faUserFriends} />
                &nbsp;Request to join
              </HomeButtons_Hollow>
            </div>
            <div className="absolute top-8 right-3 flex gap-4 align-middle">
              <Tag text="Reserved" iconClass="text-blue-500" />
              <Tag text="Private" iconClass="text-blue-500" />
              <Link className="bg-gray-200 hover:font-bold bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-md p-2 flex items-center">
                Accommodation URL <FontAwesomeIcon icon={faLink} />
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className=" rounded-xl pt-5">
        <div className="flex gap-10  items-center max-w-screen-xl m-auto">
          <div className="border flex items-center justify-start rounded-xl border-hrColor p-6 w-full gap-5">
            <div className="border rounded-xl border-hrColor p-6 w-full">
              <InfoFlexColumn label="Number of units" info="1" />
            </div>
            <div className="border rounded-xl border-hrColor p-6 w-full">
              <InfoFlexColumn label="Current Income" info="$ 0" />
            </div>
            <div className="border rounded-xl border-hrColor p-6 w-full">
              <InfoFlexColumn label="Rooms" info="3" />
            </div>
            <div className="border rounded-xl border-hrColor p-6 w-full">
              <InfoFlexColumn label="Bathrooms" info="2" />
            </div>
          </div>
        </div>
      </div>

      {/* Landlord details */}
      <div className=" rounded-xl  p-12">
        <div className="border rounded-xl p-6 border-hrColor flex gap-10  items-center max-w-screen-xl m-auto px-12">
          <LandlordDetails
            landlordName={landlordName}
            wireText={wireText}
            collectionData={collectionData}
          />
        </div>
      </div>

      <div className="border rounded-xl p-6 border-hrColor max-w-screen-xl m-auto px-12">
        <SearchDiv placeholder="Search..." buttonText="Add" UnitName="Units" />

        <div className="pt-4">
          <h4 className="text-xl font-medium mr-4">Leased</h4>
          <div className="flex gap-5">
            <TextCard
              divclass="bg-gray-200 p-4 rounded-lg shadow-md"
              title="Unit 2"
              description="2 bedrooms, 2 bathrooms, meditation room, minimalist living space, eco-friendly materials, bamboo cabinetry, recycled glass countertops."
            />
            <TextCard
              divclass="bg-gray-200 p-4 rounded-lg shadow-md"
              title="Unit 2"
              description="2 bedrooms, 2 bathrooms, meditation room, minimalist living space, eco-friendly materials, bamboo cabinetry, recycled glass countertops."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
