import React, { useState } from "react";
import PreferenceDiv from "../../components/FormComponents/PreferenceDiv";
import {
  HomeButtons_Hollow,
  HomeButtons_Solid,
} from "../../components/HomeButtons";

const OnboardingQuestions = () => {
  const [answers, setAnswers] = useState({
    hostedTrips: "",
    priceRange: "",
    groupSize: "",
  });

  // Function to handle user's answers
  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };
  return (
    <>
      <PreferenceDiv
        imageURL="/preference_1.png"
        customContent={
          <div className=" ">
            <div className="flex items-center space-x-2 text-gray-500 capitalize">
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
              <span>SOCIALS</span>
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
              <span className="text-Primarycolor">EXPERIENCE</span>
            </div>

            {/* Experience Section */}
            <div className="mb-4 pt-8">
              <h3 className="text-3xl font-semibold mb-2">
                Tell Us About Your Experience
              </h3>
              <div className=" mt-10">
                <h2 className="text-2xl font-semibold mb-6">Questionnaire</h2>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Have you hosted trips or retreats before?
                  </h3>
                  <div>
                    <button
                      className={`mr-4 py-2 px-4 rounded-lg border ${
                        answers.hostedTrips === "No"
                          ? "bg-Primarycolor text-white"
                          : "border-Primarycolor"
                      }`}
                      onClick={() => handleAnswer("hostedTrips", "No")}
                    >
                      No
                    </button>
                    <button
                      className={`py-2 px-4 rounded-lg border ${
                        answers.hostedTrips === "Yes"
                          ? "bg-Primarycolor text-white"
                          : "border-Primarycolor"
                      }`}
                      onClick={() => handleAnswer("hostedTrips", "Yes")}
                    >
                      Yes
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="priceRange"
                    className="text-lg font-semibold mb-2 block"
                  >
                    What price range do you prefer for shared lodging?
                  </label>
                  <select
                    id="priceRange"
                    className="w-full py-2 px-4 rounded-lg border border-Primarycolor"
                    value={answers.priceRange}
                    onChange={(e) => handleAnswer("priceRange", e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="Budget">Budget (up to $50 per night)</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="groupSize"
                    className="text-lg font-semibold mb-2 block"
                  >
                    What is the maximum number of people you prefer traveling
                    with in a group, including yourself?
                  </label>
                  <select
                    id="groupSize"
                    className="w-full py-2 px-4 rounded-lg border border-Primarycolor"
                    value={answers.groupSize}
                    onChange={(e) => handleAnswer("groupSize", e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="1-3">1-3 people</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-start justify-center  items-center gap-4">
              <HomeButtons_Solid
                className="py-1 px-4 mt-10 fw-lighter w-56 mr-4"
                onClick={() => handleExperienceOption("Skip")}
              >
                Next
              </HomeButtons_Solid>
              <HomeButtons_Hollow
                className="py-1 px-4 mt-10 fw-lighter w-56"
                onClick={() => console.log("Signup clicked")}
              >
                Skip
              </HomeButtons_Hollow>
            </div>
          </div>
        }
      />
    </>
  );
};

export default OnboardingQuestions;
