// Home.jsx
import React from "react";
import SectionText from "../components/SectionText";
import {
  HomeButtons_Solid,
  HomeButtons_Hollow,
} from "../components/HomeButtons";
import SectionContainer from "../components/SectionContainer";
import SectionImage from "../components/SectionImage";
import "../styles/home.css";
import Steps from "../components/Steps";
import TestimonialContainer from "../components/TestimonialContainer";
import HeroSection_Main from "../components/HeroSection_Main";

const MainPage = () => {
  return (
    <>
      <HeroSection_Main />
      <div className="Section1 md:p-28 p-3">
        <div className=" sectionContainer1 md:p-12 p-5">
          <SectionContainer className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <SectionText
              title="Discover amazing stays with splitstay"
              description="SplitStay is a trusted marketplace and social network for shared lodging 1,480,086 shared lodging options around the world are waiting for you!. "
            >
              <HomeButtons_Solid
                className="py-4 px-14"
                onClick={() => console.log("Login clicked")}
              >
                Browse Experiences
              </HomeButtons_Solid>
              <HomeButtons_Hollow
                className="py-1 px-1 mt-10 fw-lighter w-40"
                onClick={() => console.log("Signup clicked")}
              >
                Propose an Experience
              </HomeButtons_Hollow>
            </SectionText>
            <SectionImage
              imagePosition="right"
              imageSrc="/sec-1.png" // Replace with your image URL
            />
          </SectionContainer>
        </div>
      </div>

      <div className="Section2 md:p-20 p-3">
        <SectionContainer className="flex gap-10 md:gap-36 sectionContainer2">
          <SectionImage
            imagePosition="right"
            imageSrc="/sec-3.png" // Replace with your image URL
          />
          <SectionText
            subtitle="Matching made easy"
            title="View and filter by shared interest"
            description="see like  minded individuals that share you
        lifestyle, hobbies, and travel preferences."
          >
            <HomeButtons_Solid
              className="py-4 px-14"
              onClick={() => console.log("Login clicked")}
            >
              View local splitters
            </HomeButtons_Solid>
          </SectionText>
        </SectionContainer>
      </div>
      <div className="Section3 md:p-20 p-3">
        <SectionContainer className="flex gap-10 md:gap-36 sectionContainer3 ">
          <SectionText
            subtitle="Trust & safety"
            title="Connect with Peace of mind"
            description="see like  minded individuals that share you
        lifestyle, hobbies, and travel preferences."
          >
            <HomeButtons_Solid
              className="py-4 px-14"
              onClick={() => console.log("Login clicked")}
            >
              View local splitters
            </HomeButtons_Solid>
          </SectionText>
          <SectionImage
            imagePosition="right"
            imageSrc="/sec-4.png" // Replace with your image URL
          />
        </SectionContainer>
      </div>

      {/* section 4 */}
      <div className="Section1 md:p-28 p-3 ">
        <div className=" sectionContainer1 md:p-12 p-5">
          <SectionContainer className="flex gap-10 md:gap-32 flex-col lg:flex-row">
            <SectionText
              title="Let's talk about how it works "
              description="Turn your reserved lodging into shared savings and explore more for a fraction of the cost."
              className=""
            >
              <HomeButtons_Solid
                className="py-4 px-14"
                onClick={() => console.log("Login clicked")}
              >
                Sign up now
              </HomeButtons_Solid>
            </SectionText>
            <Steps />
          </SectionContainer>
        </div>
      </div>

      {/* Section 5 */}
      <TestimonialContainer />
      {/* section 6 */}

      <div className="Section6 md:p-20 p-3">
        <div className=" sectionContainer1 md:p-12 p-5">
          <SectionContainer className="flex gap-10 md:gap-32 ">
            <SectionText
              title="Get started with SplitStay today "
              description="Turn your reserved lodging into shared savings and explore more for a fraction of the cost."
            >
              <HomeButtons_Solid
                className="py-4 px-14"
                onClick={() => console.log("Login clicked")}
              >
                Sign up now
              </HomeButtons_Solid>
            </SectionText>
            <SectionImage imagePosition="right" imageSrc="/sec-4.png" />
          </SectionContainer>
        </div>
      </div>

      {/* Footer */}
    </>
  );
};

export default MainPage;
