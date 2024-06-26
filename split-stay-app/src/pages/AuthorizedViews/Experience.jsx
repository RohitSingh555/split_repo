import React, { useEffect, useState } from "react";
import SectionText from "../../components/SectionText";
import { HomeButtons_Hollow } from "../../components/HomeButtons";
import ExperienceImage from "../../components/ExperienceImage";
import InfoFlexColumn from "../../components/UserComponents/InfoFlexColumn";
import LandlordDetails from "../../components/UserComponents/LandlordCard";
import TextCard from "../../components/UserComponents/TextCard";
import Tag from "../../components/UserComponents/Tag";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExperienceEditForm from "./ExperienceEditForm";

import {
  faUserFriends,
  faTag,
  faArrowLeftLong,
  faLink,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import SearchDiv from "../../components/UserComponents/SearchDiv";
import axios from "axios";

const Experience = () => {
  const landlordName = "Trip Creator";
  const wireText = "Trip Creator";
  const collectionData = [
    {
      imageUrl: "/old_woman.webp",
      name: "Elise Beverley",
      email: "elise@stellartech.com",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [experience, setExperiences] = useState([]);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const { id } = useParams();

  const fetchExperiences = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/experience/${id}`
      );
      setExperiences(response.data.data);
    } catch (error) {
      console.error("Error fetching experiences:", error);
    }
  };

  const handleGoBack = () => {
    history.goBack();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {experience && (
        <div className=" mx-auto pt-24 ">
          <div className="border border-hrColor ">
            <div className="flex gap-10 flex-col lg:flex-row items-center max-w-screen-xl m-auto pt-32 p-10 relative">
              <Link
                to={"/experiences"}
                className=" absolute hover:scale-105 left-10 top-12 mr-4 text-4xl text-gray-500 hover:text-gray-700 focus:outline-none pb-12"
              >
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </Link>
              <div>
                <ExperienceImage
                  style={{ width: "340px", height: "250px" }}
                  imagePosition="right"
                  imageSrc={experience.coverImage}
                  imageClass="rounded-xl object-cover visible"
                />
              </div>
              <div className=" w-full">
                <p className="text-xs pb-4 text-LabelEXP">
                  Day posted: {experience.date}
                </p>
                <SectionText
                  title={experience.destination}
                  className=" m-auto text-left text-xl font-medium"
                  description={experience.description}
                />

                <div className="flex flex-col lg:flex-row">
                  <button
                    type="button"
                    class="text-white bg-Black hover:Black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 w-full lg:w-3/12 mb-2 "
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
                <div className="relative lg:absolute lg:top-32 top-2 right-3 flex gap-4 flex-col lg:flex-row align-middle">
                  <Tag text="Reserved" iconClass="text-blue-500" />
                  <Tag text="Private" iconClass="text-blue-500" />
                  <Link
                    to={experience.accommodationUrl}
                    className="bg-gray-200 hover:font-bold bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-md p-2 flex items-center"
                  >
                    <FontAwesomeIcon icon={faLink} /> Accommodation URL
                  </Link>
                  <button
                    type="button"
                    className="text-white bg-Black hover:Black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl lg:text-sm py-2 lg:py-0 me-2 w-full lg:w-16 mb-2"
                    onClick={openModal}
                  >
                    <FontAwesomeIcon icon={faEdit} className="mr-2" />
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>

          <div className="  rounded-xl pt-5">
            <div className="flex  gap-10  items-center max-w-screen-xl m-auto">
              <div className="border flex-col lg:flex-row flex items-center justify-start rounded-xl border-hrColor p-6 w-full gap-5">
                <div className="border rounded-xl border-hrColor p-6 w-full">
                  <InfoFlexColumn
                    label="Rooms"
                    info={experience.availableRooms}
                  />
                </div>
                <div className="border rounded-xl border-hrColor p-6 w-full">
                  <InfoFlexColumn
                    label="Room Capacity"
                    info={experience.capacity}
                  />
                </div>
                <div className="border rounded-xl border-hrColor p-6 w-full">
                  <InfoFlexColumn
                    label="Bathrooms"
                    info={experience.availableBathrooms}
                  />
                </div>
                <div className="border rounded-xl border-hrColor p-6 w-full">
                  <InfoFlexColumn
                    label="Price per Traveller"
                    info={`$${experience.price}`}
                  />
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

          {/* <div className="border rounded-xl p-6 border-hrColor max-w-screen-xl m-auto px-12">
            <SearchDiv
              placeholder="Search..."
              buttonText="Add"
              UnitName="Units"
            />

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
          </div> */}
          {isModalOpen && (
            <div className="fixed  inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="fixed right-0 top-0 h-full  p-4 lg:p-4 w-full lg:w-96 bg-white overflow-y-auto">
                <div className="pt-16 rounded-lg shadow-lg">
                  <ExperienceEditForm
                    closeModal={closeModal}
                    experience={experience}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Experience;
