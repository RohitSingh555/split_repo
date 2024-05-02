import React, { useEffect, useState } from "react";
import ExperienceDiv from "../../components/FormComponents/ExperienceDiv";
import SearchDiv from "../../components/UserComponents/SearchDiv";
import axios from "axios";
import ExperienceForm from "./ExperienceForm";
import { Link } from "react-router-dom";

const UserExperiencePage = () => {
  const [experiences, setExperiences] = useState([]);
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newExperience, setnewExperience] = useState({});
  const [setsearchText, setsetsearchText] = useState("");
  useEffect(() => {
    fetchExperiences();
    console.log("Initialized Page");
    console.log(newExperience);
    addnewExperience(newExperience);
    // setnewExperience({});
  }, [newExperience]);

  const addnewExperience = (experience) => {
    console.log("Adding new experience:", experience);

    // Update state with functional form of setState
    setFilteredExperiences((prevExperiences) => {
      const newArray = [...prevExperiences, experience];
      console.log("New filtered experiences array:", newArray);
      return newArray;
    });
  };

  const fetchExperiences = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/experiences");
      setExperiences(response.data.data);
      // const modifiedArray = setExperiences([...experiences, newExperience])
      setFilteredExperiences(response.data.data);
    } catch (error) {
      console.error("Error fetching experiences:", error);
      setError("Failed to fetch experiences. Please try again later.");
    } finally {
      setLoading(false);
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

  const handleSearch = (e) => {
    const filteredExperiences = experiences.filter((experience) =>
      experience.destination.toLowerCase().includes(e.target.value)
    );
    setFilteredExperiences(filteredExperiences);
  };

  return (
    <>
      {error && <div className="text-red-600">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap max-w-screen-xl m-auto justify-between md:py-40 px-4">
          <div className="flex flex-col lg:flex-row gap-5 justify-between items-center mb-4 w-full searchdiv mt-28">
            <h2 className="text-3xl font-medium mr-4">Experiences</h2>
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
                  className="bg-gray-50 border border-Overlay text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
              </div>
              <button
                type="button"
                className="text-white bg-Black hover:Black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 w-4/12 mb-2"
                onClick={openModal}
              >
                + &nbsp;Add
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredExperiences.map((experience, index) => {
              return (
                !experience.privacy && (
                  <Link
                    key={index}
                    to={`/experience/${experience._id}`}
                    className="block"
                  >
                    <ExperienceDiv
                      imageURL={
                        experience.coverImage ||
                        "https://cdn.britannica.com/72/132272-050-E4877C4C/Madrid-Spain.jpg"
                      }
                      avatarURL={experience.createrAvator || "/userimg.png"}
                      title={experience.destination}
                      description={experience.description}
                      beds={experience.availableRooms}
                      bathrooms={experience.availableBathrooms}
                      price={experience.price}
                    />
                  </Link>
                )
              );
            })}
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed  inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="fixed right-0 top-0 h-full  p-4 lg:p-4 w-full lg:w-96 bg-white overflow-y-auto">
            <div className="pt-16 rounded-lg shadow-lg">
              <ExperienceForm
                closeModal={closeModal}
                setnewExperience={setnewExperience}
                newExperience={newExperience}
                filteredExperiences={filteredExperiences}
                setFilteredExperiences={setFilteredExperiences}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserExperiencePage;
