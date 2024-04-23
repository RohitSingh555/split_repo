import React, { useState } from "react";
import PreferenceDiv from "../../components/FormComponents/PreferenceDiv";
import {
  HomeButtons_Hollow,
  HomeButtons_Solid,
} from "../../components/HomeButtons";
import { Link } from "react-router-dom";

const OnboardingPreferencePage = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Options array
  const options = [
    "Wellness",
    "Entrepreneurship",
    "Music",
    "Art",
    "Design",
    "Making Friends",
    "Sports",
    "Tech",
  ];

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <>
      <PreferenceDiv
        imageURL="/preference_1.png"
        customContent={
          <div className="p-4">
            <div className="flex items-center space-x-2 text-gray-500 ">
              <span>INTERESTS</span>
              <svg
                className="w-4 h-4 flex-shrink-0 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.224 4.276a.75.75 0 011.06-1.06l5 5a.75.75 0 010 1.06l-5 5a.75.75 0 01-1.06-1.06L9.189 10 5.224 6.036a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>HOST</span>
              <svg
                className="w-4 h-4 flex-shrink-0 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.224 4.276a.75.75 0 011.06-1.06l5 5a.75.75 0 010 1.06l-5 5a.75.75 0 01-1.06-1.06L9.189 10 5.224 6.036a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-Primarycolor">SPLITTERS</span>
            </div>

            {/* Experience Section */}
            <div className="mb-4 pt-8">
              <h3 className="text-3xl font-semibold mb-2">
                Tell Us About Your Interest
              </h3>
              <p className="text-lg mb-2">
                What are your personal interests? (can choose multiple)
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-12">
                {options.map((option, index) => (
                  <button
                    key={index}
                    className={`text-center py-2 px-4 font-medium rounded-lg border break-words border-Primarycolor outline-none focus:outline-none ${
                      selectedOptions.includes(option)
                        ? "bg-Primarycolor text-white"
                        : "text-black"
                    }`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-start justify-center  items-center gap-4">
              <HomeButtons_Solid
                className="py-1 px-4 mt-10 fw-lighter w-56 mr-4"
                onClick={() => handleExperienceOption("Skip")}
              >
                Get Started
              </HomeButtons_Solid>
              <Link to="/onboarding-questions">
                <HomeButtons_Hollow
                  className="py-1 px-4 mt-10 fw-lighter w-56"
                  onClick={() => console.log("Signup clicked")}
                >
                  Skip
                </HomeButtons_Hollow>
              </Link>
            </div>
          </div>
        }
      />
    </>
  );
};

export default OnboardingPreferencePage;
