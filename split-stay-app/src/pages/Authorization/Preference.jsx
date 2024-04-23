import React from "react";
import PreferenceDiv from "../../components/FormComponents/PreferenceDiv";
import {
  HomeButtons_Hollow,
  HomeButtons_Solid,
} from "../../components/HomeButtons";
import { Link } from "react-router-dom";

const PreferencePage = () => {
  return (
    <>
      <PreferenceDiv
        imageURL="/preference_1.png"
        customContent={
          <div className=" p-4">
            <div className="flex items-center space-x-2 text-gray-500">
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
                Tell Us About Your Experience
              </h3>
              <div className="flex md:flex-row flex-col items-center">
                <HomeButtons_Hollow
                  className="py-1 px-4 mt-10 fw-lighter w-36 mr-4"
                  onClick={() => handleExperienceOption("no")}
                >
                  No
                </HomeButtons_Hollow>
                <HomeButtons_Hollow
                  className="py-1 px-4 mt-10 fw-lighter w-36 mr-4"
                  onClick={() => handleExperienceOption("yes")}
                >
                  Yes
                </HomeButtons_Hollow>
                <Link to="/onboarding-preferences">
                  <HomeButtons_Hollow
                    className="py-1 px-4 mt-10 fw-lighter w-36 mr-4"
                    onClick={() => handleExperienceOption("Skip")}
                  >
                    Skip
                  </HomeButtons_Hollow>
                </Link>
              </div>
            </div>
            <HomeButtons_Solid
              className="py-1 px-4 w-full md:w-56 mt-10 fw-lighter  mr-4"
              onClick={() => handleExperienceOption("Skip")}
            >
              Get Started
            </HomeButtons_Solid>
          </div>
        }
      />
    </>
  );
};

export default PreferencePage;
