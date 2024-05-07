// Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import SectionText from "../components/SectionText";
import { HomeButtons_Solid } from "../components/HomeButtons";
import SectionContainer from "../components/SectionContainer";
import SectionImage from "../components/SectionImage";
import "../styles/home.css";
import { Steps, Steps1 } from "../components/Steps";
import TestimonialContainer from "../components/TestimonialContainer";
import HTwoText from "../components/h2text";
import SectionText2 from "../components/SectionText2";
import TextSlider from "../components/UserComponents/TextSlider";
import NewsletterSection from "../components/FormComponents/NewsletterSection";
import FAQAccordion from "../components/UserComponents/FAQAccordion";
import ContactForm from "../components/FormComponents/ContactForm";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className=" md:p-28 p-3">
        <div className="  md:p-12 p-5">
          <SectionContainer className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <SectionText
              title="Share a Stay, Split the Cost "
              description="Explore more for less by splitting your accommodation bill with someone that shares your lifestyle, interests, and travel preferences."
            >
              <HomeButtons_Solid
                className="py-4 px-14"
                onClick={() => console.log("Login clicked")}
              >
                Share a Stay
              </HomeButtons_Solid>
            </SectionText>
            <SectionImage
              imagePosition="right"
              imageClass=" rounded-xl"
              imageSrc="/handstand.png" // Replace with your image URL
            />
          </SectionContainer>
        </div>
      </div>

      <HTwoText text="How SplitStay Works" />

      {/* New style div 1 */}
      <div className=" p-3 ">
        <div className="  md:p-12 p-5">
          <SectionContainer className="">
            <div className="flex flex-col">
              <SectionText
                title="Propose an experience"
                description="Wow this project is so awesome! Let me tell you why right here, right now."
                className=" max-w-sm"
              ></SectionText>
              <div className="flex gap-5 justify-between">
                <div className=" max-w-xl">
                  <SectionImage
                    imagePosition="right"
                    imageClass=" rounded-xl"
                    imageSrc="/group1.png" // Replace with your image URL
                  />
                  {/* <HomeButtons_Solid className="py-4 px-14" onClick={() => console.log('Login clicked')}>Sign up now</HomeButtons_Solid> */}
                </div>
                <Steps />
              </div>
            </div>
          </SectionContainer>
        </div>
      </div>

      {/* New style div 2 */}
      <div className=" p-3 ">
        <div className="  md:p-12 p-5">
          <SectionContainer className="">
            <div className="flex flex-col">
              <SectionText
                title="Join an experience"
                description="Wow this project is so awesome! Let me tell you why right here, right now."
                className=" max-w-sm"
              ></SectionText>
              <div className="flex gap-5 justify-between">
                <div className=" max-w-xl">
                  <SectionImage
                    imagePosition="right"
                    imageClass=" rounded-xl"
                    imageSrc="/group2.png" // Replace with your image URL
                  />
                  {/* <HomeButtons_Solid className="py-4 px-14" onClick={() => console.log('Login clicked')}>Sign up now</HomeButtons_Solid> */}
                </div>
                <Steps1 />
              </div>
            </div>
          </SectionContainer>
        </div>
      </div>

      <HTwoText text="A travel companion platform with features focused on safety" />

      <div className="Section2 md:p-20 p-3">
        <SectionContainer className="flex gap-10 md:gap-36 sectionContainer2 flex-row-reverse">
          <SectionImage
            imagePosition="right"
            imageClass="min-h-96 min-w-96"
            imageSrc="/drink.png" // Replace with your image URL
          />
          <SectionText2
            // subtitle="Matching made easy"
            title="Your safety top of mind with multiple verifications"
            description="This feature is probably amazing! Of course, it's a best thing since sliced bread! This text block is where you get the chance to explain why it's so great and why people should care about your project. "
          >
            {/* <HomeButtons_Solid className="py-4 px-14" onClick={() => console.log('Login clicked')}>View local splitters</HomeButtons_Solid> */}
          </SectionText2>
        </SectionContainer>
      </div>

      <div className="Section3 md:p-20 p-3">
        <SectionContainer className="flex gap-10 md:gap-36 sectionContainer3 ">
          <SectionText2
            // subtitle="Trust & safety"
            title="Search and filter through experiences and travelers"
            description="This feature is probably amazing! Of course, it's a best thing since sliced bread! This text block is where you get the chance to explain why it's so great and why people should care about your project. "
          >
            {/* <HomeButtons_Solid className="py-4 px-14" onClick={() => console.log('Login clicked')}>View local splitters</HomeButtons_Solid> */}
          </SectionText2>
          <SectionImage
            imagePosition="right"
            imageClass="min-h-96 min-w-96"
            imageSrc="/surf.png" // Replace with your image URL
          />
        </SectionContainer>
      </div>

      <div className="Section3 md:p-20 p-3 ">
        <SectionContainer className="flex gap-10 md:gap-36 sectionContainer3 ">
          <SectionText2
            // subtitle="Trust & safety"
            title="Easily and securely send payments"
            description="This feature is probably amazing! Of course, it's a best thing since sliced bread! This text block is where you get the chance to explain why it's so great and why people should care about your project.  "
          >
            {/* <HomeButtons_Solid className="py-4 px-14" onClick={() => console.log('Login clicked')}>View local splitters</HomeButtons_Solid> */}
          </SectionText2>
          <SectionImage
            imagePosition="right"
            imageClass="min-h-96 min-w-96"
            imageSrc="/pool.png" // Replace with your image URL
          />
        </SectionContainer>
      </div>

      {/* section 4 */}
      <HTwoText text="What our early adopters are saying" />

      <TextSlider />

      <NewsletterSection />

      <HTwoText text="A few answers to common questions" />

      <SectionContainer className="flex align-middle items-center justify-center gap-10 md:gap-36 sectionContainer3 ">
        <FAQAccordion />
        <SectionImage
          imagePosition="right"
          imageClass="min-h-96 min-w-96"
          imageSrc="/lane.png" // Replace with your image URL
        />
      </SectionContainer>

      <ContactForm />

      {/* Footer */}
    </>
  );
};

export default Home;
