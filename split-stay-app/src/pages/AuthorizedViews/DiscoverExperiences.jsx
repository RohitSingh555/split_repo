import React, { useEffect, useState } from "react";
import ExperienceDiv from "../../components/FormComponents/ExperienceDiv";
import SearchDiv from "../../components/UserComponents/SearchDiv";
import axios from "axios";
import ExperienceForm from "./ExperienceForm";
import { Link } from "react-router-dom";

const UserExperiencePage = () => {
  const [experiences, setExperiences] = useState([]);
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await axios.get("http://localhost:3000/experiences");
      setExperiences(response.data.data);
      setFilteredExperiences(response.data.data);
    } catch (error) {
      console.error("Error fetching experiences:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleExperienceSubmit = () => {
    closeModal();
    fetchExperiences();
  };

  const handleSearch = (query) => {
    const filtered = experiences.filter((experience) =>
      experience.destination.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredExperiences(filtered);
  };

  return (
    <>
      <div className="flex flex-wrap max-w-screen-xl m-auto justify-between md:py-40 px-4">
        <SearchDiv
          data={experiences}
          placeholder="Search..."
          buttonText="Add"
          UnitName="Experiences"
          onSearch={handleSearch}
          onClick={openModal}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredExperiences.map((experience, index) => (
            <Link
              key={index}
              to={`/experience/${experience._id}`}
              className="block"
            >
              <ExperienceDiv
                imageURL={experience.coverImage || "/Montgomery_1.png"}
                avatarURL={experience.createrAvator || "/userimg.png"}
                title={experience.destination}
                description={experience.description}
                beds={experience.availableRooms}
                bathrooms={experience.availableBathrooms}
                price={experience.price}
              />
            </Link>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div
            className="fixed right-0 top-0 h-full w-96 bg-white overflow-y-auto"
            style={{ width: "40%" }}
          >
            <div className="pt-16 rounded-lg shadow-lg">
              <ExperienceForm
                closeModal={closeModal}
                onSubmit={handleExperienceSubmit}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserExperiencePage;
